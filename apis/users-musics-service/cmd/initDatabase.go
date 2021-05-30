package main

import (
	"database/sql"
	"fmt"

	"users-musics-service/internal/config"
	c "users-musics-service/internal/constants"
	db "users-musics-service/internal/database/sql"
	l "users-musics-service/internal/providers/loggerProvider"
)

func main() {
	config.Initialize()
	loggerProvider := l.New()
	database := db.New(loggerProvider)

	initializeDatabase((database.GetConnection()))
}

func initializeDatabase(connection *sql.DB) error {
	queries := []string{usersArtistsTable(), usersMusicsTable()}

	for _, query := range queries {
		statement, err := connection.Prepare(query)
		if err != nil {
			panic(err)
		}

		if _, err = statement.Exec(); err != nil {
			panic(err)
		}

		if err = statement.Close(); err != nil {
			panic(err)
		}
	}

	return nil
}

func usersArtistsTable() string {
	return fmt.Sprintf(
		`CREATE TABLE IF NOT EXISTS %s (
			id TEXT PRIMARY KEY,
			user_id TEXT NOT NULL,
			artist_id TEXT NOT NULL
		);`, c.UsersArtistsTable)
}

func usersMusicsTable() string {
	return fmt.Sprintf(
		`CREATE TABLE IF NOT EXISTS %s (
			id TEXT PRIMARY KEY,
			views INT NOT NULL,
			user_id TEXT NOT NULL,
			music_id TEXT NOT NULL,
			created_at timestamp NOT NULL,
  			updated_at timestamp NOT NULL
		);`, c.UsersMusicsTable)
}
