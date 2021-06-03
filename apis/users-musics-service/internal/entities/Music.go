package entities

type Music struct {
	Id        string
	Title     string
	Duration  int32
	File      string
	Composers []string
	Lyrics    string
	AlbumId   string
	ArtistId  string
	Views     int32
}
