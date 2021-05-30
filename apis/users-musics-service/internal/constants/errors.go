package constants

var InternalError = &BaseError{
	Name:          "INTERNAL ERROR",
	Message:       "An unexpected error occur.",
	StatusCode:    int32(INTERNAL_SERVER_ERROR),
	IsOperational: false,
}
