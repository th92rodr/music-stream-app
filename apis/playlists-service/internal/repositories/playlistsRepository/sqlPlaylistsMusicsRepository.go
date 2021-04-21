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
