package playlistsRepository

import (
	"fmt"

	c "playlists-service/internal/constants"
)

const (
	fieldIndex      = "index"
	fieldPlaylistId = "playlist_id"
	fieldMusicId    = "music_id"
)

func (r playlistsRepository) findTracks(playlistId string) (map[int32]string, error) {
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
