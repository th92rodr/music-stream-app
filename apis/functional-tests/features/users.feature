@user
Feature: Users Service

  @sucess
  Scenario: Create, Authenticate, Consult, Update and Delete an User
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
    Given I want to consult this user
    When I send the request
    Then the response status code should be 200
    And validate user response body "get"
    Given I want to update this user with the following data:
      | username | "jane doe" |
    When I send the request
    Then the response status code should be 200
    And validate user response body "update"
    Given I want to consult this user
    When I send the request
    Then the response status code should be 200
    And validate user response body "get"
    Given I want to delete this user
    When I send the request
    Then the response status code should be 200
    Given I want to consult this user
    When I send the request
    Then the response status code should be 404
