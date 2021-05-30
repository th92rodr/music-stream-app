package grpc

import (
	"context"
	"fmt"

	"users-musics-service/internal/channels/grpc/proto"
	sa "users-musics-service/internal/services/usersArtistsService"
	sm "users-musics-service/internal/services/usersMusicsService"
)

func (c grpcChannel) FollowArtist(ctx context.Context, request *proto.FollowArtistRequest) (*proto.Empty, error) {
	userArtist, err := c.usersArtistsService.Follow(sa.FollowRequest{
		UserId:   request.UserId,
		ArtistId: request.ArtistId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[FOLLOW ARTIST] user_id: %s, artist_id %s", userArtist.UserId, userArtist.ArtistId))

	return &proto.Empty{}, nil
}

func (c grpcChannel) UnfollowArtist(ctx context.Context, request *proto.UnfollowArtistRequest) (*proto.Empty, error) {
	if err := c.usersArtistsService.Unfollow(sa.UnfollowRequest{
		UserId:   request.UserId,
		ArtistId: request.ArtistId,
	}); err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[UNFOLLOW ARTIST] user_id: %s, artist_id %s", request.UserId, request.ArtistId))

	return &proto.Empty{}, nil
}

func (c grpcChannel) GetFollowingArtist(ctx context.Context, request *proto.GetFollowingArtistRequest) (*proto.FollowingArtist, error) {
	userArtist, err := c.usersArtistsService.GetFollowing(sa.GetFollowingRequest{
		UserId:   request.UserId,
		ArtistId: request.ArtistId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[GET FOLLOWING ARTIST] user_id: %s, artist_id %s", userArtist.UserId, userArtist.ArtistId))

	return translateUserArtist(userArtist), nil
}

func (c grpcChannel) GetAllFollowingArtists(ctx context.Context, request *proto.GetAllFollowingArtistsRequest) (*proto.FollowingArtists, error) {
	userArtists, err := c.usersArtistsService.GetAllFollowing(sa.GetAllFollowingRequest{
		UserId: request.UserId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[GET ALL FOLLOWING ARTISTS] user_id: %s", request.UserId))

	return translateUserArtistList(request.UserId, userArtists), nil
}

func (c grpcChannel) ViewMusic(ctx context.Context, request *proto.ViewMusicRequest) (*proto.UserMusic, error) {
	userMusic, err := c.usersMusicsService.AddView(sm.AddViewRequest{
		UserId:  request.UserId,
		MusicId: request.MusicId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[VIEW MUSIC] user_id: %s, music_id %s", userMusic.UserId, userMusic.MusicId))

	return translateUserMusic(userMusic), nil
}

func (c grpcChannel) GetViews(ctx context.Context, request *proto.GetViewsRequest) (*proto.UserMusic, error) {
	userMusic, err := c.usersMusicsService.GetViews(sm.GetViewsRequest{
		UserId:  request.UserId,
		MusicId: request.MusicId,
	})

	if err != nil {
		return nil, c.handleError(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("[GET VIEWS] user_id: %s, music_id %s", userMusic.UserId, userMusic.MusicId))

	return translateUserMusic(userMusic), nil
}
