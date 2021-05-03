@playlist
Feature: Playlists Service

  @sucess
  Scenario: Create, Consult, Update and Delete a Playlist
    Given I want to create an user with the following data:
      | username | "john doe" |
      | email | "john.doe@mail.com" |
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
    Given I want to delete this user
    When I send the request
    Then the response status code should be 200
