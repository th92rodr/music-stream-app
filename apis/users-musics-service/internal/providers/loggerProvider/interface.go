package loggerProvider

type ILoggerProvider interface {
	Info(message string)
	Error(message string, err error)
	Fatal(message string, err error)
}
