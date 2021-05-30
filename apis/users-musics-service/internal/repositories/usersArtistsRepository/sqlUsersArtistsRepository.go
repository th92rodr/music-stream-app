package usersArtistsRepository

import (
	"database/sql"
	"fmt"

	c "users-musics-service/internal/constants"
	e "users-musics-service/internal/entities"
)

const (
	usersArtistsTable = c.UsersArtistsTable

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

func (r usersArtistsRepository) Store(request StoreUserArtistRequest) error {
	query := fmt.Sprintf(`
		INSERT INTO %s (%s, %s, %s) VALUES ($1, $2, $3)`,
		usersArtistsTable, fieldId, fieldUserId, fieldArtistId,
	)

	statement, err := r.databaseConnection.Prepare(query)
	if err != nil {
		customError := c.InternalError
		customError.Details = err.Error()
		return customError
	}

	if _, err = statement.Exec(request.Id, request.UserId, request.ArtistId); err != nil {
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

func (r usersArtistsRepository) Delete(request DeleteUserArtistRequest) error {
	query := fmt.Sprintf(`
		DELETE FROM %s WHERE %s = $1`,
		usersArtistsTable, fieldId,
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

func (r usersArtistsRepository) Find(request FindUserArtistRequest) (*e.UserArtist, error) {
	userArtist := &e.UserArtist{
		UserId:   request.UserId,
		ArtistId: request.ArtistId,
	}

	query := fmt.Sprintf(`
		SELECT %s FROM %s WHERE %s = $1 AND %s = $2`,
		fieldId, usersArtistsTable, fieldUserId, fieldArtistId,
	)

	row := r.databaseConnection.QueryRow(query, request.UserId, request.ArtistId)

	if err := row.Scan(&userArtist.Id); err != nil {
		if err == sql.ErrNoRows {
			customError := c.ErrorUserArtistNotFound
			customError.Message = fmt.Sprintf("A user_artist entity with the user (%s) and the artist (%s) was not found.", request.UserId, request.ArtistId)
			customError.Details = err.Error()
			return nil, customError
		}

		customError := c.InternalError
		customError.Details = err.Error()
		return nil, customError
	}

	return userArtist, nil
}
