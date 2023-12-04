Feature: Menu Navigation

  Test navigation through the menu

  Background:
    // Use custom dictionary for faster tests
    Given that the original dictionary is replaced by the custom dictionary
    And that I am on the "/" page

  Scenario: Go to the game page through the menu
    When I click the "Spela" button in the navbar
    Then I should be on the "https://word-corners.nodehill.se/game" page

  Scenario: Go to the dictionary page
    When I click the "Ordlistan" button in the navbar
    Then I should be on the "https://word-corners.nodehill.se/dictionary" page

  Scenario: Go to the game page through the play button
    When I click the ".start-btn" button
    Then I should be on the "https://word-corners.nodehill.se/game" page

  Scenario: Go back to the home page
    Given that I am on the "/dictionary" page
    When I click the "Start" button in the navbar
    Then I should be on the "https://word-corners.nodehill.se/" page