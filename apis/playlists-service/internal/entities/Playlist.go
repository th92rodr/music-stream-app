package entities

type Playlist struct {
	Id     string
	Name   string
	UserId string
	Tracks map[int32]Music
}
