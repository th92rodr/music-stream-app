package loggerProvider

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/i582/cfmt/cmd/cfmt"
)

type loggerProvider struct{}

func New() ILoggerProvider {
	return loggerProvider{}
}

func (l loggerProvider) Info(message string) {
	cfmt.Print("{{INFO }}::green")
	prettyPrint(struct {
		Time    time.Time
		Message string
	}{
		Time:    time.Now(),
		Message: message,
	})
}

func (l loggerProvider) Error(message string, err error) {
	cfmt.Print("{{ERROR }}::red")
	prettyPrint(struct {
		Time    time.Time
		Message string `json:"Message,omitempty"`
		Error   error
	}{
		Time:    time.Now(),
		Message: message,
		Error:   err,
	})
}

func (l loggerProvider) Fatal(message string, err error) {
	cfmt.Print("{{FATAL }}::red")
	prettyPrint(struct {
		Time    time.Time
		Message string `json:"Message,omitempty"`
		Error   error
	}{
		Time:    time.Now(),
		Message: message,
		Error:   err,
	})
}

func prettyPrint(data interface{}) {
	var p []byte
	p, _ = json.MarshalIndent(data, "", "  ")
	fmt.Printf("%s \n", p)
}
