package constants

var ErrorPlaylistNotFound = &BaseError{
	Name:          "NOT FOUND",
	Message:       "A playlist entity with the id (id) was not found.",
	StatusCode:    int32(NOT_FOUND),
	IsOperational: true,
}

var InternalError = &BaseError{
	Name:          "INTERNAL ERROR",
	Message:       "An unexpected error occur.",
	StatusCode:    int32(INTERNAL_SERVER_ERROR),
	IsOperational: false,
}
