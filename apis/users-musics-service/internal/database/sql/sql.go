package sql

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"

	"users-musics-service/internal/config"
	l "users-musics-service/internal/providers/loggerProvider"
)

type database struct {
	connection     *sql.DB
	loggerProvider l.ILoggerProvider
}

func New(loggerProvider l.ILoggerProvider) IDatabase {
	connection, err := sql.Open(config.DatabaseKind, buildDatabaseSourceName())
	if err != nil {
		loggerProvider.Error("Failed connecting to database: ", err)
		panic(err)
	}

	if err = connection.Ping(); err != nil {
		loggerProvider.Error("Failed pinging database: ", err)
		panic(err)
	}

	return database{
		connection:     connection,
		loggerProvider: loggerProvider,
	}
}

func buildDatabaseSourceName() string {
	return fmt.Sprintf(
		"user=%s password=%s dbname=%s host=%s port=%s sslmode=disable",
		config.DatabaseUser, config.DatabasePassword, config.DatabaseName, config.DatabaseHost, config.DatabasePort,
	)
}

func (d database) GetConnection() *sql.DB {
	return d.connection
}

func (d database) Close() error {
	return d.connection.Close()
}
