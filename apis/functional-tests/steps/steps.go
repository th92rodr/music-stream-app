package steps

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
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
	token  string
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
	ctx.Step(`^I want to authenticate this user using the password "([^"]*)"$`, test.makeAuthenticateUserRequest)
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
	ctx.Step(`^validate authenticate response body`, test.validateAuthenticateResponseBody)
	ctx.Step(`^validate artist response body "([^"]*)"$`, test.validateArtistResponseBody)
	ctx.Step(`^validate album response body "([^"]*)"$`, test.validateAlbumResponseBody)
	ctx.Step(`^validate music response body "([^"]*)"$`, test.validateMusicResponseBody)
}

// ------------------------------------ //

// Request

func (t *testFeature) sendRequest() error {
	client := &http.Client{}

	timeBefore := time.Now()

	var err error
	t.response, err = client.Do(t.request)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("RESPONSE: ", t.response)
	}

	t.responseTimeDuration = time.Now().Sub(timeBefore)

	return nil
}

// User

func (t *testFeature) makeCreateUserRequest(data *godog.Table) error {
	t.parseUserData(data)

	var err error
	t.requestBody, err = json.Marshal(t.user)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("CREATE USER BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/users", baseURL)

	t.request, err = http.NewRequest(http.MethodPost, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeAuthenticateUserRequest(password string) error {
	var err error
	t.requestBody, err = json.Marshal(struct {
		Email    string `json:"email,omitempty"`
		Password string `json:"password,omitempty"`
	}{
		Email:    t.user.Email,
		Password: password,
	})
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("AUTHENTICATE USER BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/tokens", baseURL)

	t.request, err = http.NewRequest(http.MethodPost, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeGetUserRequest() error {
	url := fmt.Sprintf("%s/api/users", baseURL)

	var err error
	t.request, err = http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return err
	}

	t.request.Header.Add("Authorization", fmt.Sprintf("Bearer %s", t.token))

	return nil
}

func (t *testFeature) makeUpdateUserRequest(data *godog.Table) error {
	t.parseUserData(data)

	var err error
	t.requestBody, err = json.Marshal(t.user)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		fmt.Println("UPDATE USER BODY: ", string(t.requestBody))
	}

	url := fmt.Sprintf("%s/api/users", baseURL)

	t.request, err = http.NewRequest(http.MethodPatch, url, bytes.NewBuffer(t.requestBody))
	if err != nil {
		return err
	}

	t.request.Header.Add("Authorization", fmt.Sprintf("Bearer %s", t.token))
	t.request.Header.Set("Content-Type", "application/json")

	return nil
}

func (t *testFeature) makeDeleteUserRequest() error {
	url := fmt.Sprintf("%s/api/users", baseURL)

	var err error
	t.request, err = http.NewRequest(http.MethodDelete, url, nil)
	if err != nil {
		return err
	}

	t.request.Header.Add("Authorization", fmt.Sprintf("Bearer %s", t.token))

	return nil
}

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

	t.artist = &artist{}

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

	t.album = &album{}

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

	t.music = &music{}

	return nil
}

// ------------------------------------ //

// Response

func (t *testFeature) validateResponseStatusCode(code int) error {
	if t.mode == "VERBOSE" {
		fmt.Println("RESPONSE STATUS ", t.response.StatusCode)
	}

	if code != t.response.StatusCode {
		if t.response.StatusCode >= 400 {
			defer t.response.Body.Close()
			body, _ := ioutil.ReadAll(t.response.Body)
			return fmt.Errorf("Expected response code to be: %d, but actual is: %d, response message: %s", code, t.response.StatusCode, body)
		}

		return fmt.Errorf("Expected response code to be: %d, but actual is: %d", code, t.response.StatusCode)
	}

	return nil
}

func (t *testFeature) validateUserResponseBody(method string) error {
	defer t.response.Body.Close()
	responseBody, err := ioutil.ReadAll(t.response.Body)
	if err != nil {
		return err
	}

	receivedUser := &user{}
	err = json.Unmarshal(responseBody, receivedUser)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		prettyPrint(t.user)
		prettyPrint(receivedUser)
	}

	if !validateUser(*t.user, *receivedUser, method) {
		return fmt.Errorf("Response body validation failed.")
	}

	t.user = receivedUser

	return nil
}

func (t *testFeature) validateAuthenticateResponseBody() error {
	defer t.response.Body.Close()
	responseBody, err := ioutil.ReadAll(t.response.Body)
	if err != nil {
		return err
	}

	receivedAuth := &struct {
		Token string `json:"token,omitempty"`
	}{
		Token: "",
	}
	err = json.Unmarshal(responseBody, receivedAuth)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		prettyPrint(receivedAuth)
	}

	t.token = receivedAuth.Token

	return nil
}

func (t *testFeature) validateArtistResponseBody(method string) error {
	defer t.response.Body.Close()
	responseBody, err := ioutil.ReadAll(t.response.Body)
	if err != nil {
		return err
	}

	receivedArtist := &artist{}
	err = json.Unmarshal(responseBody, receivedArtist)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		prettyPrint(t.artist)
		prettyPrint(receivedArtist)
	}

	if !validateArtist(*t.artist, *receivedArtist, method) {
		return fmt.Errorf("Response body validation failed.")
	}

	t.artist = receivedArtist

	return nil
}

func (t *testFeature) validateAlbumResponseBody(method string) error {
	defer t.response.Body.Close()
	responseBody, err := ioutil.ReadAll(t.response.Body)
	if err != nil {
		return err
	}

	receivedAlbum := &album{}
	err = json.Unmarshal(responseBody, receivedAlbum)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		prettyPrint(t.album)
		prettyPrint(receivedAlbum)
	}

	if !validateAlbum(*t.album, *receivedAlbum, method) {
		return fmt.Errorf("Response body validation failed.")
	}

	t.album = receivedAlbum

	return nil
}

func (t *testFeature) validateMusicResponseBody(method string) error {
	defer t.response.Body.Close()
	responseBody, err := ioutil.ReadAll(t.response.Body)
	if err != nil {
		return err
	}

	receivedMusic := &music{}
	err = json.Unmarshal(responseBody, receivedMusic)
	if err != nil {
		return err
	}

	if t.mode == "VERBOSE" {
		prettyPrint(t.music)
		prettyPrint(receivedMusic)
	}

	if !validateMusic(*t.music, *receivedMusic, method) {
		return fmt.Errorf("Response body validation failed.")
	}

	t.music = receivedMusic

	return nil
}
