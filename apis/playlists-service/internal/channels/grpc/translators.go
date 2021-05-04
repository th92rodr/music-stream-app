package grpc

import (
	"playlists-service/internal/channels/grpc/proto"
	e "playlists-service/internal/entities"
)

func translatePlaylist(playlist *e.Playlist) *proto.Playlist {
	tracks := []*proto.Playlist_Track{}

	for _, track := range playlist.Tracks {
		tracks = append(tracks, &proto.Playlist_Track{
			Index: track.Index,
			Music: translateMusic(track.Music),
		})
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
