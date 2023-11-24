Feature: Start the game

  Scenario: Start the game
    Given that I am on the first page
    When wait for the splash screen to disappear
    And "Välkommen" to show
    And I press on the button
    Then the game should start