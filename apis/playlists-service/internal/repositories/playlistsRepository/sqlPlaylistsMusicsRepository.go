package playlistsRepository

import (
	"database/sql"
	"fmt"

	c "playlists-service/internal/constants"
	e "playlists-service/internal/entities"
)

const (
	playlistsMusicsTable = c.PlaylistsMusicsTable

	fieldIndex      = "index"
	fieldPlaylistId = "playlist_id"
	fieldMusicId    = "music_id"
)

func (r playlistsRepository) FindTrack(request FindTrackRequest) (*e.Track, error) {
	track := &e.Track{
		Id: request.Id,
	}

	query := fmt.Sprintf(`
		SELECT %s, %s FROM %s WHERE %s = $1`,
		fieldIndex, fieldMusicId, playlistsMusicsTable, fieldId,
	)

	row := r.databaseConnection.QueryRow(query, request.Id)

	if err := row.Scan(&track.Index, &track.MusicId); err != nil {
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

	return track, nil
}

func (r playlistsRepository) StoreTrack(request StoreTrackRequest) error {
	query := fmt.Sprintf(`
		INSERT INTO %s (%s, %s, %s, %s) VALUES ($1, $2, $3, $4)`,
		playlistsMusicsTable, fieldId, fieldIndex, fieldPlaylistId, fieldMusicId,
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
		SET %s = $2
		WHERE %s = $1`,
		playlistsMusicsTable, fieldIndex, fieldId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(request.Id, request.Index); err != nil {
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
		DELETE FROM %s WHERE %s = $1`,
		playlistsMusicsTable, fieldId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(request.Id); err != nil {
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

func (r playlistsRepository) findAllTracks(playlistId string) ([]*e.Track, error) {
	tracks := []*e.Track{}

	query := fmt.Sprintf(`
		SELECT %s, %s, %s FROM %s WHERE %s = $1`,
		fieldId, fieldIndex, fieldMusicId, playlistsMusicsTable, fieldPlaylistId,
	)

	rows, err := r.databaseConnection.Query(query, playlistId)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	defer rows.Close()

	for rows.Next() {
		track := &e.Track{}

		if err := rows.Scan(&track.Id, &track.Index, &track.MusicId); err != nil {
			customError := c.InternalError
			customError.Details = err.Error()
			return nil, customError
		}

		tracks = append(tracks, track)
	}

	if err = rows.Err(); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return tracks, nil
}
