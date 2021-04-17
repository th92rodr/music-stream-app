package loggerProvider

import "fmt"

type loggerProvider struct{}

func New() ILoggerProvider {
	return loggerProvider{}
}

func (l loggerProvider) Info(message string, meta interface{}) {
	fmt.Println(message, meta)
}

func (l loggerProvider) Error(message string, err error) {
	fmt.Println(message, err)
}

func (l loggerProvider) Warn(message string, err error) {
	fmt.Println(message, err)
}
