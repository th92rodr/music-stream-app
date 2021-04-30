package steps

import (
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
