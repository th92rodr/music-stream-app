package sql

type IDatabase interface {
	Close() error
}
