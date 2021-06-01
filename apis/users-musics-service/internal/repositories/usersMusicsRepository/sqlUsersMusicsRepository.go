package usersMusicsRepository

import (
	"database/sql"
	"fmt"

	c "users-musics-service/internal/constants"
	e "users-musics-service/internal/entities"
)

const (
	usersMusicsTable = c.UsersMusicsTable

	fieldId        = "id"
	fieldViews     = "views"
	fieldUserId    = "user_id"
	fieldMusicId   = "music_id"
	fieldCreatedAt = "created_at"
	fieldUpdatedAt = "updated_at"

	offsetZero int = 0
)

type usersMusicsRepository struct {
	databaseConnection *sql.DB
}

func New(databaseConnection *sql.DB) IUsersMusicsRepository {
	return usersMusicsRepository{
		databaseConnection: databaseConnection,
	}
}

func (r usersMusicsRepository) Store(request StoreUserMusicRequest) error {
	query := fmt.Sprintf(`
		INSERT INTO %s (%s, %s, %s, %s, %s, %s) VALUES ($1, $2, $3, $4, $5, $6)`,
		usersMusicsTable, fieldId, fieldViews, fieldUserId, fieldMusicId, fieldCreatedAt, fieldUpdatedAt,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(request.Id, request.Views, request.UserId, request.MusicId, request.CreatedAt, request.UpdatedAt); err != nil {
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

func (r usersMusicsRepository) Update(request UpdateUserMusicRequest) error {
	query := fmt.Sprintf(`
		UPDATE %s
		SET %s = $2, %s = $3
		WHERE %s = $1`,
		usersMusicsTable, fieldViews, fieldUpdatedAt, fieldId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(request.Id, request.Views, request.UpdatedAt); err != nil {
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

func (r usersMusicsRepository) Delete(request DeleteUserMusicRequest) error {
	query := fmt.Sprintf(`
		DELETE FROM %s WHERE %s = $1`,
		usersMusicsTable, fieldId,
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

func (r usersMusicsRepository) Find(request FindUserMusicRequest) (*e.UserMusic, error) {
	userMusic := &e.UserMusic{
		UserId:  request.UserId,
		MusicId: request.MusicId,
	}

	query := fmt.Sprintf(`
		SELECT %s, %s, %s, %s FROM %s WHERE %s = $1 AND %s = $2`,
		fieldId, fieldViews, fieldCreatedAt, fieldUpdatedAt, usersMusicsTable, fieldUserId, fieldMusicId,
	)

	row := r.databaseConnection.QueryRow(query, request.UserId, request.MusicId)

	if err := row.Scan(&userMusic.Id, &userMusic.Views, &userMusic.CreatedAt, &userMusic.UpdatedAt); err != nil {
		if err == sql.ErrNoRows {
			customError := c.ErrorUserMusicNotFound
			customError.Message = fmt.Sprintf("A user_music entity with the user (%s) and the music (%s) was not found.", request.UserId, request.MusicId)
			customError.Details = err.Error()
			return nil, customError
		}

		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return userMusic, nil
}

func (r usersMusicsRepository) FindLastUpdated(request FindLastUpdatedRequest) ([]e.UserMusic, error) {
	userMusics := []e.UserMusic{}

	query := fmt.Sprintf(`
		SELECT %s, %s, %s, %s, %s FROM %s WHERE %s = $1 ORDER BY %s DESC OFFSET $2 LIMIT $3`,
		fieldId, fieldViews, fieldMusicId, fieldCreatedAt, fieldUpdatedAt, usersMusicsTable, fieldUserId, fieldUpdatedAt,
	)

	rows, err := r.databaseConnection.Query(query, request.UserId, offsetZero, request.Limit)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	defer rows.Close()

	for rows.Next() {
		userMusic := e.UserMusic{
			UserId: request.UserId,
		}

		if err := rows.Scan(&userMusic.Id, &userMusic.Views, &userMusic.MusicId, &userMusic.CreatedAt, &userMusic.UpdatedAt); err != nil {
			customError := c.InternalError
			customError.Details = err.Error()
			return nil, customError
		}

		userMusics = append(userMusics, userMusic)
	}

	if err = rows.Err(); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return userMusics, nil
}

func (r usersMusicsRepository) FindMostViews(request FindMostViewsRequest) ([]e.UserMusic, error) {
	userMusics := []e.UserMusic{}

	query := fmt.Sprintf(`
		SELECT %s, %s, %s, %s, %s FROM %s WHERE %s = $1 ORDER BY %s DESC OFFSET $2 LIMIT $3`,
		fieldId, fieldViews, fieldMusicId, fieldCreatedAt, fieldUpdatedAt, usersMusicsTable, fieldUserId, fieldViews,
	)

	rows, err := r.databaseConnection.Query(query, request.UserId, offsetZero, request.Limit)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	defer rows.Close()

	for rows.Next() {
		userMusic := e.UserMusic{
			UserId: request.UserId,
		}

		if err := rows.Scan(&userMusic.Id, &userMusic.Views, &userMusic.MusicId, &userMusic.CreatedAt, &userMusic.UpdatedAt); err != nil {
			customError := c.InternalError
			customError.Details = err.Error()
			return nil, customError
		}

		userMusics = append(userMusics, userMusic)
	}

	if err = rows.Err(); err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return userMusics, nil
}
