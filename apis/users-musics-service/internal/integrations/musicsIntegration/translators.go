package musicsIntegration

import (
	e "users-musics-service/internal/entities"
	"users-musics-service/internal/integrations/musicsIntegration/proto"
)

func translateArtistEntity(artist *proto.Artist) *e.Artist {
	return &e.Artist{
		Id:           artist.Id,
		Name:         artist.Name,
		Country:      artist.Country,
		Members:      artist.Members,
		Description:  artist.Description,
		Photos:       artist.Photos,
		FacebookUrl:  artist.FacebookUrl,
		TwitterUrl:   artist.TwitterUrl,
		InstagramUrl: artist.InstagramUrl,
		WikipediaUrl: artist.WikipediaUrl,
		Font:         artist.Font,
		Favorites:    artist.Favorites,
		Followers:    artist.Followers,
	}
}

func translateMusicEntity(music *proto.Music) *e.Music {
	return &e.Music{
		Id:        music.Id,
		Title:     music.Title,
		Duration:  music.Duration,
		File:      music.File,
		Composers: music.Composers,
		Lyrics:    music.Lyrics,
		Views:     music.Views,
		AlbumId:   music.AlbumId,
		ArtistId:  music.ArtistId,
	}
}
