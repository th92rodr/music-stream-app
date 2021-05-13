package musicsIntegration

import (
	e "playlists-service/internal/entities"
	"playlists-service/internal/integrations/musicsIntegration/proto"
)

func translateMusicEntity(music *proto.Music) *e.Music {
	return &e.Music{
		Id:                music.Id,
		Title:             music.Title,
		DurationInSeconds: music.DurationInSeconds,
		File:              music.File,
		Composers:         music.Composers,
		Lyrics:            music.Lyrics,
		Views:             music.Views,
		AlbumId:           music.AlbumId,
	}
}
