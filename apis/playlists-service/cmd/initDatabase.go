package main

import (
	"database/sql"
	"fmt"

	"playlists-service/internal/config"
	c "playlists-service/internal/constants"
	db "playlists-service/internal/database/sql"
	l "playlists-service/internal/providers/loggerProvider"
)

func main() {
	config.Initialize()
	loggerProvider := l.New()
	database := db.New(loggerProvider)

	initializeDatabase((database.GetConnection()))
}

func initializeDatabase(connection *sql.DB) error {
	queries := []string{playlistsTable(), playlistsMusicsTable()}

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

func playlistsTable() string {
	return fmt.Sprintf(
		`CREATE TABLE IF NOT EXISTS %s (
			id TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			user_id TEXT NOT NULL
		);`, c.PlaylistsTable)
}

func playlistsMusicsTable() string {
	return fmt.Sprintf(
		`CREATE TABLE IF NOT EXISTS %s (
			id TEXT PRIMARY KEY,
			index INT NOT NULL,
			playlist_id TEXT NOT NULL,
			music_id TEXT NOT NULL
		);`, c.PlaylistsMusicsTable)
}
