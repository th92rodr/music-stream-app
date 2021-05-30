package idProvider

import "github.com/google/uuid"

type idProvider struct{}

func New() IIdProvider {
	return idProvider{}
}

func (p idProvider) Generate() string {
	id := uuid.New()
	return id.String()
}
