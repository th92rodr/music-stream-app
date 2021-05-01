@music
Feature: Musics Service

  @sucess
  Scenario: Create, Consult, Update and Delete an Artist
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
    When I send the request
    Then the response status code should be 201
    And validate artist response body "create"
    Given I want to consult this artist
    When I send the request
    Then the response status code should be 200
    And validate artist response body "get"
    Given I want to update this artist with the following data:
      | name | "name_test_2" |
      | country | "country_test_2" |
      | members | ["members_test_2"] |
      | description | "description_test_2" |
      | genre | "Folk Metal" |
    When I send the request
    Then the response status code should be 200
    And validate artist response body "update"
    Given I want to consult this artist
    When I send the request
    Then the response status code should be 200
    And validate artist response body "get"
    Given I want to delete this artist
    When I send the request
    Then the response status code should be 200
    Given I want to consult this artist
    When I send the request
    Then the response status code should be 404

  @sucess
  Scenario: Create, Consult, Update and Delete an Album
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
    Given I want to consult this album
    When I send the request
    Then the response status code should be 200
    And validate album response body "get"
    Given I want to update this album with the following data:
      | name | "name_test_2" |
      | cover | "cover_test_2" |
      | studio | "studio_test_2" |
      | producers | ["producers_test_2"] |
    When I send the request
    Then the response status code should be 200
    And validate album response body "update"
    Given I want to consult this album
    When I send the request
    Then the response status code should be 200
    And validate album response body "get"
    Given I want to delete this album
    When I send the request
    Then the response status code should be 200
    Given I want to delete this artist
    When I send the request
    Then the response status code should be 200
    Given I want to consult this album
    When I send the request
    Then the response status code should be 404

  @sucess
  Scenario: Create, Consult, Update and Delete a Music
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
    When I send the request
    Then the response status code should be 201
    And validate music response body "create"
    Given I want to consult this music
    When I send the request
    Then the response status code should be 200
    And validate music response body "get"
    Given I want to update this music with the following data:
      | title | "music_test_2" |
      | file | "file_test_2" |
      | composers | ["composers_test_3"] |
      | lyrics |  "lyrics_test_2" |
    When I send the request
    Then the response status code should be 200
    And validate music response body "update"
    Given I want to consult this music
    When I send the request
    Then the response status code should be 200
    And validate music response body "get"
    Given I want to delete this music
    When I send the request
    Then the response status code should be 200
    Given I want to delete this album
    When I send the request
    Then the response status code should be 200
    Given I want to delete this artist
    When I send the request
    Then the response status code should be 200
    Given I want to consult this music
    When I send the request
    Then the response status code should be 404
