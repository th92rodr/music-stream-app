package playlistsRepository

import e "playlists-service/internal/entities"

type IPlaylistsRepository interface {
	Find(id string) (*e.Playlist, map[int32]string, error)
	FindAll(userId string) ([]e.Playlist, error)
	Store(playlist *e.Playlist) error
	Update(playlist *e.Playlist) error
	Delete(id string) error
}
