package errorHandler

import (
	"users-musics-service/internal/constants"
	l "users-musics-service/internal/providers/loggerProvider"
)

type errorHandler struct {
	loggerProvider l.ILoggerProvider
}

func New(loggerProvider l.ILoggerProvider) IErrorHandler {
	return errorHandler{
		loggerProvider: loggerProvider,
	}
}

func (e errorHandler) HandleError(err error) {
	if e.IsTrustedError(err) {
		e.loggerProvider.Error("", err)
	} else {
		e.loggerProvider.Fatal("", err)
	}
}

func (e errorHandler) IsTrustedError(err error) bool {
	if customError, ok := err.(*constants.BaseError); ok {
		return customError.IsOperational
	}

	return false
}
