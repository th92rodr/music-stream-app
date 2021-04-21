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

func (r playlistsRepository) FindAll(userId string) ([]e.Playlist, error) {
	playlists := []e.Playlist{}

	query := fmt.Sprintf(`
		SELECT * FROM %s WHERE %s = '%s'`,
		c.PlaylistsTable, fieldUserId, userId,
	)

	rows, err := r.databaseConnection.Query(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	defer rows.Close()

	for rows.Next() {
		playlist := e.Playlist{}

		if err := rows.Scan(&playlist.Id, &playlist.Name, &playlist.UserId); err != nil {
			if err == sql.ErrNoRows {
				customError := c.ErrorPlaylistNotFound
				customError.Message = fmt.Sprintf("A playlist entity with the user_id %s was not found.", userId)
				customError.Details = err.Error()
				return nil, customError
			}

			customError := c.InternalError
			customError.Details = err.Error()
			return nil, customError
		}

		playlists = append(playlists, playlist)
	}

	if err = rows.Err(); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return playlists, nil
}

func (r playlistsRepository) Store(playlist *e.Playlist) error {
	query := fmt.Sprintf(`
		INSERT INTO %s (%s, %s, %s) VALUES ($1, $2, $3)`,
		c.PlaylistsTable, fieldId, fieldName, fieldUserId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(playlist.Id, playlist.Name, playlist.UserId); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if err = statement.Close(); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	return nil
}

func (r playlistsRepository) Update(playlist *e.Playlist) error {
	query := fmt.Sprintf(`
		UPDATE %s
		SET %s = $2, %s = $3
		WHERE %s = $1`,
		c.PlaylistsTable, fieldName, fieldUserId, fieldId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(playlist.Id, playlist.Name, playlist.UserId); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if err = statement.Close(); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	return nil
}

func (r playlistsRepository) Delete(id string) error {}
