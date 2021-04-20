package entities

type Music struct {
	Id                string
	Title             string
	DurationInSeconds int32
	File              string
	Composers         []string
	Lyrics            string
	AlbumId           string
	Views             int32
}
