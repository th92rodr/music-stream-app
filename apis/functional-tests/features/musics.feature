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
