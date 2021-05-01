package steps

import (
	"bytes"
	"encoding/json"
	"fmt"
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

// Request

// Artist

func (t *testFeature) makeCreateArtistRequest(data *godog.Table) error {
	t.parseArtistData(data)

	var err error
	t.requestBody, err = json.Marshal(t.artist)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("CREATE ARTIST BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/artists", baseURL)

	t.request, err = http.NewRequest(http.MethodPost, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeGetArtistRequest() error {
	url := fmt.Sprintf("%s/api/artists/%s", baseURL, t.artist.Id)

	var err error
	t.request, err = http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return err
	}

	return nil
}

func (t *testFeature) makeUpdateArtistRequest(data *godog.Table) error {
	t.parseArtistData(data)

	var err error
	t.requestBody, err = json.Marshal(t.artist)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("UPDATE ARTIST BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/artists/%s", baseURL, t.artist.Id)

	t.request, err = http.NewRequest(http.MethodPatch, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeDeleteArtistRequest() error {
	url := fmt.Sprintf("%s/api/artists/%s", baseURL, t.artist.Id)

	var err error
	t.request, err = http.NewRequest(http.MethodDelete, url, nil)
	if err != nil {
		return err
	}

	return nil
}

// Album

func (t *testFeature) makeCreateAlbumRequest(data *godog.Table) error {
	t.parseAlbumData(data)

	var err error
	t.requestBody, err = json.Marshal(t.album)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("CREATE ALBUM BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/albums", baseURL)

	t.request, err = http.NewRequest(http.MethodPost, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeGetAlbumRequest() error {
	url := fmt.Sprintf("%s/api/albums/%s", baseURL, t.album.Id)

	var err error
	t.request, err = http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return err
	}

	return nil
}

func (t *testFeature) makeUpdateAlbumRequest(data *godog.Table) error {
	t.parseAlbumData(data)

	var err error
	t.requestBody, err = json.Marshal(t.album)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("UPDATE ALBUM BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/albums/%s", baseURL, t.album.Id)

	t.request, err = http.NewRequest(http.MethodPatch, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeDeleteAlbumRequest() error {
	url := fmt.Sprintf("%s/api/albums/%s", baseURL, t.album.Id)

	var err error
	t.request, err = http.NewRequest(http.MethodDelete, url, nil)
	if err != nil {
		return err
	}

	return nil
}

// Music

func (t *testFeature) makeCreateMusicRequest(data *godog.Table) error {
	t.parseMusicData(data)

	var err error
	t.requestBody, err = json.Marshal(t.music)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("CREATE MUSIC BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/musics", baseURL)

	t.request, err = http.NewRequest(http.MethodPost, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeGetMusicRequest() error {
	url := fmt.Sprintf("%s/api/musics/%s", baseURL, t.music.Id)

	var err error
	t.request, err = http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return err
	}

	return nil
}

func (t *testFeature) makeUpdateMusicRequest(data *godog.Table) error {
	t.parseMusicData(data)

	var err error
	t.requestBody, err = json.Marshal(t.music)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("UPDATE MUSIC BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/musics/%s", baseURL, t.music.Id)

	t.request, err = http.NewRequest(http.MethodPatch, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeDeleteMusicRequest() error {
	url := fmt.Sprintf("%s/api/musics/%s", baseURL, t.music.Id)

	var err error
	t.request, err = http.NewRequest(http.MethodDelete, url, nil)
	if err != nil {
		return err
	}

	return nil
}
