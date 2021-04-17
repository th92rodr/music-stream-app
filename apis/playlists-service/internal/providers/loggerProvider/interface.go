package loggerProvider

type ILoggerProvider interface {
	Info(message string, meta interface{})
	Error(message string, err error)
	Warn(message string, err error)
}
