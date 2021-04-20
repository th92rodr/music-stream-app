package playlistsRepository

import (
	"database/sql"

	e "playlists-service/internal/entities"
)

type playlistsRepository struct {
	databaseConnection *sql.DB
}

func New(databaseConnection *sql.DB) IPlaylistsRepository {
	return playlistsRepository{
		databaseConnection: databaseConnection,
	}
}

func (r playlistsRepository) Find(id string) (*e.Playlist, map[int32]string, error) {}

func (r playlistsRepository) FindAll(userId string) ([]e.Playlist, error) {}

func (r playlistsRepository) Store(playlist *e.Playlist) error {}

func (r playlistsRepository) Update(playlist *e.Playlist) error {}

func (r playlistsRepository) Delete(id string) error {}
