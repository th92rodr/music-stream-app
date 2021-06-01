package musicsIntegration

import e "users-musics-service/internal/entities"

type IMusicsIntegration interface {
	GetArtist(request GetArtistRequest) (*e.Artist, error)
	GetMusic(request GetMusicRequest) (*e.Music, error)

	ViewMusic(request ViewMusicRequest) error
}
