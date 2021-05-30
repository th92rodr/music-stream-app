package entities

import "time"

type UserMusic struct {
	Id        string
	Views     int
	UserId    string
	MusicId   string
	CreatedAt time.Time
	UpdatedAt time.Time
}
