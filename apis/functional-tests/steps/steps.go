package steps

import (
	"net/http"
	"time"

	"github.com/cucumber/godog"
)

const (
	baseURL = "http://localhost:8080"
)

type testFeature struct {
	mode                 string
	request              *http.Request
	requestBody          []byte
	response             *http.Response
	responseTimeDuration time.Duration

	entities
}

type entities struct {
	user   *user
	artist *artist
	album  *album
	music  *music
}

func InitializeScenario(ctx *godog.ScenarioContext, mode string) {
	test := testFeature{
		mode: mode,
	}

	test.user = &user{}
	test.artist = &artist{}
	test.album = &album{}
	test.music = &music{}

	ctx.Step(`^I want to create an user with the following data:$`, test.makeCreateUserRequest)
	ctx.Step(`^I want to consult this user`, test.makeGetUserRequest)
	ctx.Step(`^I want to update this user with the following data:$`, test.makeUpdateUserRequest)
	ctx.Step(`^I want to delete this user`, test.makeDeleteUserRequest)

	ctx.Step(`^I want to create an artist with the following data:$`, test.makeCreateArtistRequest)
	ctx.Step(`^I want to consult this artist`, test.makeGetArtistRequest)
	ctx.Step(`^I want to update this artist with the following data:$`, test.makeUpdateArtistRequest)
	ctx.Step(`^I want to delete this artist`, test.makeDeleteArtistRequest)

	ctx.Step(`^I want to create an album with the following data:$`, test.makeCreateAlbumRequest)
	ctx.Step(`^I want to consult this album`, test.makeGetAlbumRequest)
	ctx.Step(`^I want to update this album with the following data:$`, test.makeUpdateAlbumRequest)
	ctx.Step(`^I want to delete this album`, test.makeDeleteAlbumRequest)

	ctx.Step(`^I want to create a music with the following data:$`, test.makeCreateMusicRequest)
	ctx.Step(`^I want to consult this music`, test.makeGetMusicRequest)
	ctx.Step(`^I want to update this music with the following data:$`, test.makeUpdateMusicRequest)
	ctx.Step(`^I want to delete this music`, test.makeDeleteMusicRequest)

	ctx.Step(`^I send the request`, test.sendRequest)

	ctx.Step(`^the response status code should be (\d+)$`, test.validateResponseStatusCode)

	ctx.Step(`^validate user response body "([^"]*)"$`, test.validateUserResponseBody)
	ctx.Step(`^validate artist response body "([^"]*)"$`, test.validateArtistResponseBody)
	ctx.Step(`^validate album response body "([^"]*)"$`, test.validateAlbumResponseBody)
	ctx.Step(`^validate music response body "([^"]*)"$`, test.validateMusicResponseBody)
}
