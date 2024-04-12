Feature: Gameplay

  Test Gameplay with custom dictionary

  Background:
    Given that the original dictionary is replaced by the custom dictionary
    And I am on the game page past the loading screen

  Scenario: Placing letters in all corners
    When I place 2 letters in the "top left" corner
    And I place 2 letters in the "bottom left" corner
    And I place 2 letters in the "top right" corner
    And I place 2 letters in the "bottom right" corner
    Then the letters should be in the correct order

  Scenario: Scoring points
    When I place 2 letters in the "top left" corner
    And I click the ".valid > .take-points" button
    Then I should have 2 points
    And all corners should be open

  Scenario: Claim points and unlock corner and get a hint
    When I place 2 letters in the "top left" corner
    And I place 3 letters in the "top right" corner
    And I click the ".valid > .take-points" button
    And I click the ".unlock" button
    Then all corners should be open

  Scenario: Claim points and unlock corner that is invalid by timeout
    When I place 2 letters in the "top left" corner
    And I wait until a corner is invalid by timeout
    And I click the ".valid > .take-points" button
    And I click the ".unlock" button
    Then all corners should be open

  Scenario: Lose and play again
    When I place 2 letters in the "top left" corner
    And I click the ".valid > .take-points" button
    Then I should have 2 points
    When I place 3 letters in each corner
    And I click the ".play-again-btn" button
    Then the game should be reset
    And all corners should be open

  Scenario: Lose and go to start page
    When I place 2 letters in the "top left" corner
    And I click the ".valid > .take-points" button
    Then I should have 2 points
    When I place 3 letters in each corner
    And I click the ".start-page-btn" button
    Then I should be on the "https://word-corners.nodehill.se/" page