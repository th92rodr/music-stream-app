package entities

import "time"

type Artist struct {
	Id             string
	Name           string
	Country        string
	FoundationDate time.Time
	Members        []string
	Description    string
	Genre          string
	Photos         []string
	FacebookUrl    string
	TwitterUrl     string
	InstagramUrl   string
	WikipediaUrl   string
	Font           string
	Favorites      int32
	Followers      int32
}
