Feature: Gameplay

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
    And I claim points in one corner
    Then I should have 2 points
    And the "top left" corner should be empty

  Scenario: Claim points and unlock corner and get a hint
    When I place 2 letters in the "top left" corner
    And I place 3 letters in the "top right" corner
    And I claim points in one corner
    And I click on unlock
    Then there should be no invalid corners

  Scenario: Claim points and unlock corner that is invalid by timeout
    When I place 2 letters in the "top left" corner
    And I wait until a corner is invalid by timeout
    And I claim points in one corner
    And I click on unlock
    Then there should be no invalid corners