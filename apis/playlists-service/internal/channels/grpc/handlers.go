package grpc

import (
	"context"

	"playlists-service/internal/channels/grpc/proto"
	s "playlists-service/internal/services/playlistsService"
)

func (c grpcChannel) GetPlaylist(ctx context.Context, request *proto.GetPlaylistRequest) (*proto.Playlist, error) {
	playlist, err := c.playlistsService.Get(s.GetPlaylistRequest{
		Id:     request.Id,
		UserId: request.UserId,
	})

	if err != nil {
		return nil, err
	}

	c.loggerProvider.Info("GET PLAYLIST", request.Id)

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) GetPlaylists(ctx context.Context, request *proto.GetPlaylistsRequest) (*proto.PlaylistsList, error) {
	playlists, err := c.playlistsService.GetAll(s.GetAllPlaylistsRequest{
		UserId: request.UserId,
	})

	if err != nil {
		return nil, err
	}

	c.loggerProvider.Info("GET PLAYLISTS", nil)

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

	c.loggerProvider.Info("CREATE PLAYLIST", nil)

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) UpdatePlaylist(ctx context.Context, request *proto.UpdatePlaylistRequest) (*proto.Playlist, error) {
	playlist, err := c.playlistsService.Update(s.UpdatePlaylistRequest{
		Id:     request.Id,
		Name:   request.Name,
		UserId: request.UserId,
	})

	if err != nil {
		return nil, err
	}

	c.loggerProvider.Info("UPDATE PLAYLIST", request.Id)

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) DeletePlaylist(ctx context.Context, request *proto.DeletePlaylistRequest) (*proto.Empty, error) {
	if err := c.playlistsService.Delete(s.DeletePlaylistRequest{
		Id:     request.Id,
		UserId: request.UserId,
	}); err != nil {
		return nil, err
	}

	c.loggerProvider.Info("DELETE PLAYLIST", request.Id)

	return &proto.Empty{}, nil
}
