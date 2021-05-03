package playlistsRepository

import (
	"database/sql"
	"fmt"

	c "playlists-service/internal/constants"
)

const (
	fieldIndex      = "index"
	fieldPlaylistId = "playlist_id"
	fieldMusicId    = "music_id"
)

func (r playlistsRepository) FindTrack(request FindTrackRequest) (*FindTrackResponse, error) {
	response := &FindTrackResponse{}

	query := fmt.Sprintf(`
		SELECT * FROM %s WHERE %s = '%s'`,
		c.PlaylistsMusicsTable, fieldId, request.Id,
	)

	row := r.databaseConnection.QueryRow(query)

	if err := row.Scan(&response.Id, &response.Index, &response.MusicId, &response.PlaylistId); err != nil {
		if err == sql.ErrNoRows {
			customError := c.ErrorPlaylistNotFound
			customError.Message = fmt.Sprintf("A playlist track with the id %s was not found.", request.Id)
			customError.Details = err.Error()
			return nil, customError
		}

		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return response, nil
}

func (r playlistsRepository) StoreTrack(request StoreTrackRequest) error {
	query := fmt.Sprintf(`
		INSERT INTO %s (%s, %s, %s, %s) VALUES ($1, $2, $3, $4)`,
		c.PlaylistsMusicsTable, fieldId, fieldIndex, fieldPlaylistId, fieldMusicId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(request.Id, request.Index, request.PlaylistId, request.MusicId); err != nil {
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

func (r playlistsRepository) UpdateTrack(request UpdateTrackRequest) error {
	query := fmt.Sprintf(`
		UPDATE %s
		SET %s = $1
		WHERE %s = %s`,
		c.PlaylistsMusicsTable, fieldIndex, fieldId, request.Id,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(request.Index); err != nil {
		if err == sql.ErrNoRows {
			customError := c.ErrorPlaylistNotFound
			customError.Message = fmt.Sprintf("A playlist track with the id %s was not found.", request.Id)
			customError.Details = err.Error()
			return customError
		}

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

func (r playlistsRepository) DeleteTrack(request DeleteTrackRequest) error {
	query := fmt.Sprintf(`
		DELETE FROM %s WHERE %s = '%s'`,
		c.PlaylistsMusicsTable, fieldId, request.Id,
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

func (r playlistsRepository) findAllTracks(playlistId string) (map[int32]string, error) {
	tracks := map[int32]string{}

	query := fmt.Sprintf(`
		SELECT %s, %s FROM %s WHERE %s = '%s'`,
		fieldIndex, fieldMusicId, c.PlaylistsMusicsTable, fieldPlaylistId, playlistId,
	)

	rows, err := r.databaseConnection.Query(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	defer rows.Close()

	for rows.Next() {
		var index int32
		var musicId string

		if err := rows.Scan(&index, &musicId); err != nil {
			customError := c.InternalError
			customError.Details = err.Error()
			return nil, customError
		}

		tracks[index] = musicId
	}

	if err = rows.Err(); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return tracks, nil
}
