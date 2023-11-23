Feature: Gameplay

  Scenario: See "Välkommen" on the first page
    Given that I am on the first page
    Then wait for the splash screen to disappear
    And "Välkommen" to show
    And I press on the button
    And the game should start