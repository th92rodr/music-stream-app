package playlistsRepository

import e "playlists-service/internal/entities"

type IPlaylistsRepository interface {
	Find(id string) (*e.Playlist, map[int32]string, error)
	FindAll(userId string) ([]e.Playlist, error)
	Store(request StorePlaylistRequest) error
	Update(request UpdatePlaylistRequest) error
	Delete(id string) error
}
