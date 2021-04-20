package constants

import (
	"encoding/json"
	"fmt"
)

type BaseError struct {
	Name          string
	Message       string
	StatusCode    int32
	IsOperational bool
}

func (e *BaseError) Error() string {
	var p []byte
	p, err := json.MarshalIndent(e, "", "\t")
	if err != nil {
		return fmt.Sprint(err)
	}
	return fmt.Sprintf("%s \n", p)
}
