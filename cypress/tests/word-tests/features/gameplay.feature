Feature: Gameplay

  Test gameplay features of the game.

  Background: Go to game page
    Given that I am on the game page

  Scenario: Get points from green corner
    Given that I am playing the game
    When I spell a word
    And I click Klar button
    Then I get points

  Scenario: Get help from red corner
    When I click Lås upp & få hjälp button
    Then the red corner is unlocked
    And I get help

  Scenario: Start and play again after gameover
    When I lose
    And I see gameover text
    And I click Spela igen button
    Then the game resets