package entities

type Playlist struct {
	Id     string
	Name   string
	UserId string
	Tracks []*Track
}

type Track struct {
	Id      string
	Index   int32
	MusicId string
	Music   *Music
}
