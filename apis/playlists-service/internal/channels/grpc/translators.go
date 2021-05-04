package grpc

import (
	"playlists-service/internal/channels/grpc/proto"
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
	return &proto.Track{
		Id:    track.Id,
		Index: track.Index,
		Music: translateMusic(track.Music),
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
