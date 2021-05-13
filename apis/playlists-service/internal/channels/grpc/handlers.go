package grpc

import (
	"context"
	"fmt"

	"playlists-service/internal/channels/grpc/proto"
	s "playlists-service/internal/services/playlistsService"
)

func (c grpcChannel) GetPlaylist(ctx context.Context, request *proto.GetPlaylistRequest) (*proto.Playlist, error) {
	playlist, err := c.playlistsService.Get(s.GetPlaylistRequest{
		Id:     request.Id,
		UserId: request.UserId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[GET PLAYLIST] id: %s", request.Id))

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) GetPlaylists(ctx context.Context, request *proto.GetPlaylistsRequest) (*proto.PlaylistsList, error) {
	playlists, err := c.playlistsService.GetAll(s.GetAllPlaylistsRequest{
		UserId: request.UserId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[GET PLAYLISTS]"))

	return translatePlaylistList(playlists), nil
}

func (c grpcChannel) CreatePlaylist(ctx context.Context, request *proto.CreatePlaylistRequest) (*proto.Playlist, error) {
	playlist, err := c.playlistsService.Create(s.CreatePlaylistRequest{
		Name:   request.Name,
		UserId: request.UserId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[CREATE PLAYLIST]"))

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) UpdatePlaylist(ctx context.Context, request *proto.UpdatePlaylistRequest) (*proto.Playlist, error) {
	playlist, err := c.playlistsService.Update(s.UpdatePlaylistRequest{
		Id:     request.Id,
		Name:   request.Name,
		UserId: request.UserId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[UPDATE PLAYLIST] id: %s", request.Id))

	return translatePlaylist(playlist), nil
}

func (c grpcChannel) DeletePlaylist(ctx context.Context, request *proto.DeletePlaylistRequest) (*proto.Empty, error) {
	if err := c.playlistsService.Delete(s.DeletePlaylistRequest{
		Id:     request.Id,
		UserId: request.UserId,
	}); err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[DELETE PLAYLIST] id: %s", request.Id))

	return &proto.Empty{}, nil
}

func (c grpcChannel) AddTrack(ctx context.Context, request *proto.AddTrackRequest) (*proto.Track, error) {
	track, err := c.playlistsService.AddTrack(s.AddTrackRequest{
		UserId:     request.UserId,
		PlaylistId: request.PlaylistId,
		MusicId:    request.MusicId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[ADD TRACK]"))

	return translatePlaylistTrack(track), nil
}

func (c grpcChannel) UpdateTrack(ctx context.Context, request *proto.UpdateTrackRequest) (*proto.Track, error) {
	track, err := c.playlistsService.UpdateTrack(s.UpdateTrackRequest{
		UserId:     request.UserId,
		PlaylistId: request.PlaylistId,
		Id:         request.Id,
		Index:      request.Index,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[UPDATE TRACK] id: %s", request.Id))

	return translatePlaylistTrack(track), nil
}

func (c grpcChannel) RemoveTrack(ctx context.Context, request *proto.RemoveTrackRequest) (*proto.Empty, error) {
	if err := c.playlistsService.RemoveTrack(s.RemoveTrackRequest{
		UserId:     request.UserId,
		PlaylistId: request.PlaylistId,
		Id:         request.Id,
	}); err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[DELETE TRACK] id: %s", request.Id))

	return &proto.Empty{}, nil
}
