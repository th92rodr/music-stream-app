@user
Feature: Users Service

  @successful_case
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
      | username | "jack doe" |
      | email | "jack.doe@mail.com" |
    When I send the request
    Then the response status code should be 200
    And validate user response body "update"
    Given I want to consult this user
    When I send the request
    Then the response status code should be 200
    And validate user response body "get"
    Given I want to update this user with the following data:
      | password | "6789" |
    When I send the request
    Then the response status code should be 200
    And validate user response body "update"
    Given I want to consult this user
    When I send the request
    Then the response status code should be 200
    And validate user response body "get"
    Given I want to authenticate this user using the password "6789"
    When I send the request
    Then the response status code should be 200
    And validate authenticate response body
    Given I want to delete this user
    When I send the request
    Then the response status code should be 200
    Given I want to consult this user
    When I send the request
    Then the response status code should be 404

  @error_case
  Scenario: Create an User With Invalid Fields
    Given I want to create an user with the following data:
      | username | "john doe" |
      | email | "john.doe" |
      | password | "12345" |
    When I send the request
    Then the response status code should be 400
    And validate error response body:
      | fields_to_validate | ["email"] |
    Given I want to create an user with the following data:
      | username | "" |
      | email | "john.doe@mail.com" |
      | password | "" |
    When I send the request
    Then the response status code should be 400
    And validate error response body:
      | fields_to_validate | ["username", "password"] |

  @error_case
  Scenario: Authenticate an User With Invalid Credentials
    Given I want to create an user with the following data:
      | username | "john doe2" |
      | email | "john.doe2@mail.com" |
      | password | "12345" |
    When I send the request
    Then the response status code should be 201
    And validate user response body "create"
    Given I want to authenticate this user using the password ""
    When I send the request
    Then the response status code should be 400
    And validate error response body:
      | fields_to_validate | ["password"] |
    Given I want to authenticate this user using the password "6789"
    When I send the request
    Then the response status code should be 400
    Given I want to authenticate this user using the password "12345"
    When I send the request
    Then the response status code should be 200
    And validate authenticate response body
    Given I want to delete this user
    When I send the request
    Then the response status code should be 200
