package usersArtistsRepository

import (
	"database/sql"
)

const (
	fieldId       = "id"
	fieldUserId   = "user_id"
	fieldArtistId = "artist_id"
)

type usersArtistsRepository struct {
	databaseConnection *sql.DB
}

func New(databaseConnection *sql.DB) IUsersArtistsRepository {
	return usersArtistsRepository{
		databaseConnection: databaseConnection,
	}
}
