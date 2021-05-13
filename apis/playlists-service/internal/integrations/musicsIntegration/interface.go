package musicsIntegration

import e "playlists-service/internal/entities"

type IMusicsIntegration interface {
	GetMusic(request GetMusicRequest) (*e.Music, error)
}
