package steps

import (
	"encoding/json"
	"fmt"
)

type user struct {
	Id       string `json:"id,omitempty"`
	Username string `json:"username,omitempty"`
	Email    string `json:"email,omitempty"`
	Password string `json:"password,omitempty"`
}

type artist struct {
	Id             string   `json:"id,omitempty"`
	Name           string   `json:"name,omitempty"`
	Country        string   `json:"country,omitempty"`
	FoundationDate string   `json:"foundation_date,omitempty"`
	Members        []string `json:"members,omitempty"`
	Description    string   `json:"description,omitempty"`
	Genre          string   `json:"genre,omitempty"`
	Photos         []string `json:"photos,omitempty"`
	FacebookUrl    string   `json:"facebook_url,omitempty"`
	TwitterUrl     string   `json:"twitter_url,omitempty"`
	InstagramUrl   string   `json:"instagram_url,omitempty"`
	WikipediaUrl   string   `json:"wikipedia_url,omitempty"`
	Font           string   `json:"font,omitempty"`
	Favorites      int32    `json:"favorites,omitempty"`
	Followers      int32    `json:"followers,omitempty"`
}

type album struct {
	Id          string   `json:"id,omitempty"`
	Name        string   `json:"name,omitempty"`
	ReleaseDate string   `json:"release_date,omitempty"`
	Cover       string   `json:"cover,omitempty"`
	Studio      string   `json:"studio,omitempty"`
	Producers   []string `json:"producers,omitempty"`
	ArtistId    string   `json:"artist_id,omitempty"`
}

type music struct {
	Id        string   `json:"id,omitempty"`
	Title     string   `json:"title,omitempty"`
	Duration  int32    `json:"duration,omitempty"`
	File      string   `json:"file,omitempty"`
	Composers []string `json:"composers,omitempty"`
	Lyrics    string   `json:"lyrics,omitempty"`
	AlbumId   string   `json:"album_id,omitempty"`
	ArtistId  string   `json:"artist_id,omitempty"`
	Views     int32    `json:"views,omitempty"`
}

type playlist struct {
	Id     string `json:"id,omitempty"`
	Name   string `json:"name,omitempty"`
	UserId string `json:"user_id,omitempty"`
}

type track struct {
	Id    string `json:"id,omitempty"`
	Index int32  `json:"index,omitempty"`
	Music music  `json:"music:omitempty"`
}

func prettyPrint(data interface{}) {
	var p []byte
	p, err := json.MarshalIndent(data, "", "\t")
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("%s \n", p)
}
