package playlistsRepository

import (
	"database/sql"
	"fmt"

	c "playlists-service/internal/constants"
	e "playlists-service/internal/entities"
)

const (
	fieldId     = "id"
	fieldName   = "name"
	fieldUserId = "user_id"
)

type playlistsRepository struct {
	databaseConnection *sql.DB
}

func New(databaseConnection *sql.DB) IPlaylistsRepository {
	return playlistsRepository{
		databaseConnection: databaseConnection,
	}
}

func (r playlistsRepository) Find(id string) (*e.Playlist, map[int32]string, error) {
	playlist := &e.Playlist{}

	query := fmt.Sprintf(`
		SELECT * FROM %s WHERE %s = '%s'`,
		c.PlaylistsTable, fieldId, id,
	)

	row := r.databaseConnection.QueryRow(query)

	if err := row.Scan(&playlist.Id, &playlist.Name, &playlist.UserId); err != nil {
		if err == sql.ErrNoRows {
			customError := c.ErrorPlaylistNotFound
			customError.Message = fmt.Sprintf("A playlist entity with the id %s was not found.", id)
			customError.Details = err.Error()
			return nil, nil, customError
		}

		customError := c.InternalError
		customError.Details = err.Error()
		return nil, nil, customError
	}

	return playlist, nil, nil
}

func (r playlistsRepository) FindAll(userId string) ([]e.Playlist, error) {}

func (r playlistsRepository) Store(playlist *e.Playlist) error {}

func (r playlistsRepository) Update(playlist *e.Playlist) error {}

func (r playlistsRepository) Delete(id string) error {}
