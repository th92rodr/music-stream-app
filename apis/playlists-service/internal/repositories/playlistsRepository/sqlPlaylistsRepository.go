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

func (r playlistsRepository) FindById(request FindPlaylistByIdRequest) (*e.Playlist, error) {
	playlist := &e.Playlist{}

	query := fmt.Sprintf(`
		SELECT * FROM %s WHERE %s = '%s' AND %s = '%s'`,
		c.PlaylistsTable, fieldId, request.Id, fieldUserId, request.UserId,
	)

	row := r.databaseConnection.QueryRow(query)

	if err := row.Scan(&playlist.Id, &playlist.Name, &playlist.UserId); err != nil {
		if err == sql.ErrNoRows {
			customError := c.ErrorPlaylistNotFound
			customError.Message = fmt.Sprintf("A playlist entity from the user %s with id %s was not found.", request.UserId, request.Id)
			customError.Details = err.Error()
			return nil, customError
		}

		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return playlist, nil
}

func (r playlistsRepository) FindByName(request FindPlaylistByNameRequest) (*e.Playlist, error) {
	playlist := &e.Playlist{}

	query := fmt.Sprintf(`
		SELECT * FROM %s WHERE %s = '%s' AND %s = '%s'`,
		c.PlaylistsTable, fieldUserId, request.UserId, fieldName, request.Name,
	)

	row := r.databaseConnection.QueryRow(query)

	if err := row.Scan(&playlist.Id, &playlist.Name, &playlist.UserId); err != nil {
		if err == sql.ErrNoRows {
			customError := c.ErrorPlaylistNotFound
			customError.Message = fmt.Sprintf("A playlist entity from the user %s with the name %s was not found.", request.UserId, request.Name)
			customError.Details = err.Error()
			return nil, customError
		}

		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return playlist, nil
}

func (r playlistsRepository) FindAll(request FindAllPlaylistsRequest) ([]e.Playlist, error) {
	playlists := []e.Playlist{}

	query := fmt.Sprintf(`
		SELECT * FROM %s WHERE %s = '%s'`,
		c.PlaylistsTable, fieldUserId, request.UserId,
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

func (r playlistsRepository) FindByIdWithTracks(request FindPlaylistByIdRequest) (*e.Playlist, map[int32]string, error) {
	playlist, err := r.FindById(request)
	if err != nil {
		return nil, nil, err
	}

	tracks, err := r.findAllTracks(request.Id)
	if err != nil {
		return nil, nil, err
	}

	return playlist, tracks, nil
}

func (r playlistsRepository) Store(request StorePlaylistRequest) error {
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

	if _, err = statement.Exec(request.Id, request.Name, request.UserId); err != nil {
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

func (r playlistsRepository) Update(request UpdatePlaylistRequest) error {
	query := fmt.Sprintf(`
		UPDATE %s
		SET %s = $1
		WHERE %s = '%s' AND %s = '%s'`,
		c.PlaylistsTable, fieldName, fieldId, request.Id, fieldUserId, request.UserId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(request.Name); err != nil {
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

func (r playlistsRepository) Delete(request DeletePlaylistRequest) error {
	query := fmt.Sprintf(`
		DELETE FROM %s WHERE %s = '%s' AND %s = '%s'`,
		c.PlaylistsTable, fieldId, request.Id, fieldUserId, request.UserId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(); err != nil {
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
