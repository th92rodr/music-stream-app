package grpc

import (
	"google.golang.org/grpc/codes"

	"playlists-service/internal/channels/grpc/proto"
	"playlists-service/internal/constants"
	e "playlists-service/internal/entities"
)

func translatePlaylist(playlist *e.Playlist) *proto.Playlist {
	tracks := []*proto.Track{}

	for _, track := range playlist.Tracks {
		tracks = append(tracks, translatePlaylistTrack(track))
	}

	return &proto.Playlist{
		Id:     playlist.Id,
		Name:   playlist.Name,
		UserId: playlist.UserId,
		Tracks: tracks,
	}
}

func translatePlaylistList(playlists []e.Playlist) *proto.PlaylistsList {
	playlistList := []*proto.Playlist{}

	for _, playlist := range playlists {
		playlistList = append(playlistList, translatePlaylist(&playlist))
	}

	return &proto.PlaylistsList{
		Playlists: playlistList,
	}
}

func translatePlaylistTrack(track *e.Track) *proto.Track {
	var music *proto.Music = nil
	if track.Music != nil {
		music = translateMusic(track.Music)
	}

	return &proto.Track{
		Id:    track.Id,
		Index: track.Index,
		Music: music,
	}
}

func translateMusic(music *e.Music) *proto.Music {
	return &proto.Music{
		Id:                music.Id,
		Title:             music.Title,
		DurationInSeconds: music.DurationInSeconds,
		File:              music.File,
		Composers:         music.Composers,
		Lyrics:            music.Lyrics,
		AlbumId:           music.AlbumId,
		Views:             music.Views,
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
