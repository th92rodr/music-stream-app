package steps

type artist struct {
	Id             string   `json:"id"`
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
	Favorites      int32    `json:"favorites"`
	Followers      int32    `json:"followers"`
}

type album struct {
	Id          string   `json:"id"`
	Name        string   `json:"name,omitempty"`
	ReleaseDate string   `json:"release_date,omitempty"`
	Cover       string   `json:"cover,omitempty"`
	Studio      string   `json:"studio,omitempty"`
	Producers   []string `json:"producers,omitempty"`
	ArtistId    string   `json:"artist_id,omitempty"`
}

type music struct {
	Id        string   `json:"id"`
	Title     string   `json:"title,omitempty"`
	Duration  int32    `json:"duration,omitempty"`
	File      string   `json:"file,omitempty"`
	Composers []string `json:"composers,omitempty"`
	Lyrics    string   `json:"lyrics,omitempty"`
	AlbumId   string   `json:"album_id,omitempty"`
	Views     int32    `json:"views"`
}
