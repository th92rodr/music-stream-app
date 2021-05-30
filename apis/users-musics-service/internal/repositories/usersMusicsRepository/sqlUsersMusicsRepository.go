package usersMusicsRepository

import (
	"database/sql"
)

const (
	fieldId        = "id"
	fieldViews     = "views"
	fieldUserId    = "user_id"
	fieldMusicId   = "music_id"
	fieldCreatedAt = "created_at"
	fieldUpdatedAt = "updated_at"
)

type usersMusicsRepository struct {
	databaseConnection *sql.DB
}

func New(databaseConnection *sql.DB) IUsersMusicsRepository {
	return usersMusicsRepository{
		databaseConnection: databaseConnection,
	}
}
