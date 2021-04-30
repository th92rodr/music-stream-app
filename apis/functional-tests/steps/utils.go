package steps

import (
	"strconv"
	"strings"

	"github.com/cucumber/godog"
)

func (t *testFeature) parseArtistData(data *godog.Table) {
	for _, row := range data.Rows {
		key := row.Cells[0].Value
		value := row.Cells[1].Value

		switch key {
		case "name":
			t.artist.Name = parseString(value)
		case "country":
			t.artist.Country = parseString(value)
		case "foundationDate":
			t.artist.FoundationDate = parseString(value)
		case "members":
			t.artist.Members = append(t.artist.Members, parseArray(value)...)
		case "description":
			t.artist.Description = parseString(value)
		case "genre":
			t.artist.Genre = parseString(value)
		case "photos":
			t.artist.Photos = append(t.artist.Photos, parseArray(value)...)
		case "facebookUrl":
			t.artist.FacebookUrl = parseString(value)
		case "twitterUrl":
			t.artist.TwitterUrl = parseString(value)
		case "instagramUrl":
			t.artist.InstagramUrl = parseString(value)
		case "wikipediaUrl":
			t.artist.WikipediaUrl = parseString(value)
		}
	}
}

func (t *testFeature) parseAlbumData(data *godog.Table) {
	for _, row := range data.Rows {
		key := row.Cells[0].Value
		value := row.Cells[1].Value

		switch key {
		case "name":
			t.album.Name = parseString(value)
		case "releaseDate":
			t.album.ReleaseDate = parseString(value)
		case "cover":
			t.album.Cover = parseString(value)
		case "studio":
			t.album.Studio = parseString(value)
		case "producers":
			t.album.Producers = append(t.album.Producers, parseArray(value)...)
		case "artistId":
			t.album.ArtistId = parseString(value)
		}
	}
}

func (t *testFeature) parseMusicData(data *godog.Table) {
	for _, row := range data.Rows {
		key := row.Cells[0].Value
		value := row.Cells[1].Value

		switch key {
		case "title":
			t.music.Title = parseString(value)
		case "durationInSeconds":
			t.music.Duration = parseNumber(value)
		case "file":
			t.music.File = parseString(value)
		case "composers":
			t.music.Composers = append(t.music.Composers, parseArray(value)...)
		case "lyrics":
			t.music.Lyrics = parseString(value)
		case "albumId":
			t.music.AlbumId = parseString(value)
		}
	}
}

func parseString(str string) string {
	str = strings.ReplaceAll(str, "\"", "")
	str = strings.TrimPrefix(str, " ")
	str = strings.TrimSuffix(str, " ")
	return str
}

func parseNumber(str string) int32 {
	number, _ := strconv.Atoi(str)
	return int32(number)
}

func parseArray(str string) []string {
	var array []string

	str = strings.ReplaceAll(str, "[", "")
	str = strings.ReplaceAll(str, "]", "")

	strs := strings.Split(str, ",")

	for _, str := range strs {
		array = append(array, parseString(str))
	}

	return array
}

func validateArtist(sent, received artist, method string) bool {
	if method == "create" {
		if sent.Name != received.Name ||
			sent.Country != received.Country ||
			!compareDate(sent.FoundationDate, received.FoundationDate) ||
			!compareSlice(sent.Members, received.Members) ||
			sent.Description != received.Description ||
			sent.Genre != received.Genre ||
			!compareSlice(sent.Photos, received.Photos) ||
			sent.FacebookUrl != received.FacebookUrl ||
			sent.TwitterUrl != received.TwitterUrl ||
			sent.InstagramUrl != received.InstagramUrl ||
			sent.WikipediaUrl != received.WikipediaUrl ||
			received.Id == "" ||
			received.Favorites != 0 ||
			received.Followers != 0 {
			return false
		}
		return true
	}

	if method == "get" || method == "update" {
		if sent.Id != received.Id ||
			sent.Name != received.Name ||
			sent.Country != received.Country ||
			!compareDate(sent.FoundationDate, received.FoundationDate) ||
			!compareSlice(sent.Members, received.Members) ||
			sent.Description != received.Description ||
			sent.Genre != received.Genre ||
			!compareSlice(sent.Photos, received.Photos) ||
			sent.FacebookUrl != received.FacebookUrl ||
			sent.TwitterUrl != received.TwitterUrl ||
			sent.InstagramUrl != received.InstagramUrl ||
			sent.WikipediaUrl != received.WikipediaUrl ||
			sent.Favorites != received.Favorites ||
			sent.Followers != received.Followers {
			return false
		}
		return true
	}

	return true
}
