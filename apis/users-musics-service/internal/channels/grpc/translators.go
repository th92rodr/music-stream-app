package grpc

import (
	"google.golang.org/grpc/codes"

	"users-musics-service/internal/channels/grpc/proto"
	"users-musics-service/internal/constants"
	e "users-musics-service/internal/entities"
)

func translateUserArtist(userArtist *e.UserArtist) *proto.FollowingArtist {
	return &proto.FollowingArtist{
		UserId:   userArtist.UserId,
		ArtistId: userArtist.ArtistId,
	}
}

func translateUserArtistList(userId string, userArtists []e.UserArtist) *proto.FollowingArtists {
	artistIds := []string{}

	for _, userArtist := range userArtists {
		artistIds = append(artistIds, userArtist.ArtistId)
	}

	return &proto.FollowingArtists{
		UserId:    userId,
		ArtistsId: artistIds,
	}
}

func translateUserMusic(userMusic *e.UserMusic) *proto.UserMusic {
	return &proto.UserMusic{
		UserId:  userMusic.UserId,
		MusicId: userMusic.MusicId,
		Views:   int32(userMusic.Views),
	}
}

func translateGrpcError(statusCode int32) codes.Code {
	switch statusCode {
	case int32(constants.BAD_REQUEST):
		return codes.InvalidArgument
	case int32(constants.NOT_FOUND):
		return codes.NotFound
	case int32(constants.INTERNAL_SERVER_ERROR):
		return codes.Internal
	}

	return codes.Internal
}
