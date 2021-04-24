package grpc

import (
	"context"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"playlists-service/internal/channels/grpc/proto"
	"playlists-service/internal/config"
	l "playlists-service/internal/providers/loggerProvider"
	s "playlists-service/internal/services/playlistsService"
)

type grpcChannel struct {
	server           *grpc.Server
	loggerProvider   l.ILoggerProvider
	playlistsService s.IPlaylistsService
}

func New(loggerProvider l.ILoggerProvider, playlistsService s.IPlaylistsService) IGrpcChannel {
	return grpcChannel{
		loggerProvider:   loggerProvider,
		playlistsService: playlistsService,
	}
}

func (c grpcChannel) Start() {
	listener, err := net.Listen("tcp", config.GrpcPort)
	if err != nil {
		panic(err)
	}

	c.server = grpc.NewServer()
	proto.RegisterPlaylistsServer(c.server, c)
	reflection.Register(c.server)

	if err := c.server.Serve(listener); err != nil {
		panic(err)
	}
}

func (c grpcChannel) Stop() {
	c.server.Stop()
}

func (c grpcChannel) GetPlaylist(ctx context.Context, request *proto.Id) (*proto.Playlist, error) {
	playlist, err := c.playlistsService.Get(s.GetPlaylistRequest{
		Id: request.Id,
	})

	if err != nil {
		return nil, err
	}

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) GetPlaylists(ctx context.Context, request *proto.Id) (*proto.PlaylistsList, error) {
	playlists, err := c.playlistsService.GetAll(s.GetAllPlaylistsRequest{
		UserId: request.Id,
	})

	if err != nil {
		return nil, err
	}

	return translatePlaylistList(playlists), nil
}

func (c grpcChannel) CreatePlaylist(ctx context.Context, request *proto.CreatePlaylistRequest) (*proto.Playlist, error) {
	playlist, err := c.playlistsService.Create(s.CreatePlaylistRequest{
		Name:   request.Name,
		UserId: request.UserId,
	})

	if err != nil {
		return nil, err
	}

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) UpdatePlaylist(ctx context.Context, request *proto.UpdatePlaylistRequest) (*proto.Playlist, error) {
	playlist, err := c.playlistsService.Update(s.UpdatePlaylistRequest{
		Id:   request.Id,
		Name: request.Name,
	})

	if err != nil {
		return nil, err
	}

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) DeletePlaylist(ctx context.Context, request *proto.Id) (*proto.Empty, error) {
	if err := c.playlistsService.Delete(s.DeletePlaylistRequest{
		Id: request.Id,
	}); err != nil {
		return nil, err
	}

	return &proto.Empty{}, nil
}
