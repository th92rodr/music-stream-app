@playlist
Feature: Playlists Service

  @successful_case
  Scenario: Create, Consult, Update and Delete a Playlist
    Given I want to create an user with the following data:
      | username | "john doe 2" |
      | email | "john.doe2@mail.com" |
      | password | "12345" |
    When I send the request
    Then the response status code should be 201
    And validate user response body "create"
    Given I want to authenticate this user using the password "12345"
    When I send the request
    Then the response status code should be 200
    And validate authenticate response body
    Given I want to create a playlist with the following data:
      | name | "name_test" |
    When I send the request
    Then the response status code should be 201
    And validate playlist response body "create"
    Given I want to consult this playlist
    When I send the request
    Then the response status code should be 200
    And validate playlist response body "get"
    Given I want to update this playlist with the following data:
      | name | "name_test_2" |
    When I send the request
    Then the response status code should be 200
    And validate playlist response body "update"
    Given I want to consult this playlist
    When I send the request
    Then the response status code should be 200
    And validate playlist response body "get"
    Given I want to delete this playlist
    When I send the request
    Then the response status code should be 200
    Given I want to consult this playlist
    When I send the request
    Then the response status code should be 404
    Given I want to delete this user
    When I send the request
    Then the response status code should be 200

  @successful_case
  Scenario: Add, Update and Remove Playlist Tracks
    Given I want to create an user with the following data:
      | username | "john doe 3" |
      | email | "john.doe3@mail.com" |
      | password | "12345" |
    When I send the request
    Then the response status code should be 201
    And validate user response body "create"
    Given I want to authenticate this user using the password "12345"
    When I send the request
    Then the response status code should be 200
    And validate authenticate response body
    Given I want to create a playlist with the following data:
      | name | "name_test" |
    When I send the request
    Then the response status code should be 201
    And validate playlist response body "create"
    Given I want to create an artist with the following data:
      | name | "name_test" |
      | country | "country_test" |
      | foundationDate | "2020-02-01" |
      | members | ["members_test"] |
      | description | "description_test" |
      | genre | "Heavy Metal" |
      | photos | ["photos_test"] |
      | facebookUrl | "http://test.com" |
      | twitterUrl | "http://test.com" |
      | instagramUrl | "http://test.com" |
      | wikipediaUrl | "http://test.com" |
      | font | "font_test" |
    When I send the request
    Then the response status code should be 201
    And validate artist response body "create"
    Given I want to create an album with the following data:
      | name | "name_test" |
      | releaseDate | "2008-07-01" |
      | cover | "cover_test" |
      | studio | "studio_test" |
      | producers | ["producers_test"] |
      | artistId |  |
    When I send the request
    Then the response status code should be 201
    And validate album response body "create"
    Given I want to create a music with the following data:
      | title | "music_test" |
      | durationInSeconds | 355 |
      | file | "file_test" |
      | composers | ["composers_test_1", "composers_test_2"] |
      | lyrics |  "lyrics_test" |
      | albumId |  |
      | artistId |  |
    When I send the request
    Then the response status code should be 201
    And validate music response body "create"
    Given I want to add this music to this playlist
    When I send the request
    Then the response status code should be 201
    And validate playlist track response body "create"
    Given I want to update this track from this playlist
    When I send the request
    Then the response status code should be 200
    And validate playlist track response body "update"
    Given I want to remove this track from this playlist
    When I send the request
    Then the response status code should be 200
    Given I want to delete this music
    When I send the request
    Then the response status code should be 200
    Given I want to delete this album
    When I send the request
    Then the response status code should be 200
    Given I want to delete this artist
    When I send the request
    Then the response status code should be 200
    Given I want to delete this playlist
    When I send the request
    Then the response status code should be 200
    Given I want to delete this user
    When I send the request
    Then the response status code should be 200

  @error_case
  Scenario: Create a Playlist With Invalid Fields
    Given I want to create an user with the following data:
      | username | "john doe 3" |
      | email | "john.doe3@mail.com" |
      | password | "12345" |
    When I send the request
    Then the response status code should be 201
    And validate user response body "create"
    Given I want to authenticate this user using the password "12345"
    When I send the request
    Then the response status code should be 200
    And validate authenticate response body
    Given I want to create a playlist with the following data:
      | name | "" |
    When I send the request
    Then the response status code should be 400
    And validate error response body:
      | fields_to_validate | ["name"] |
    Given I want to delete this user
    When I send the request
    Then the response status code should be 200
