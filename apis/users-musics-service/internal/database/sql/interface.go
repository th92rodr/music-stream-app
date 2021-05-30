package sql

import "database/sql"

type IDatabase interface {
	GetConnection() *sql.DB
	Close() error
}
