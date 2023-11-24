Feature: Cafe Interaction

  Background:
    Given that I am on start page

  Scenario: Enter and Exit the Cafe
    When I click the Enter the cafe button
    Then I should see the exit the cafe button

  Scenario: Buy an Espresso
    When I click the buy an espresso button
    Then I should have five dollars
    And I should have one espresso

  Scenario: Wait in the Cafe
    Given that I am in the cafe
    When I click the wait button until I lose health
    Then I should have lost three health

  Scenario: Help Button
    When I click the help button
    Then I should see the "You're a hipster. And you love iThings and your cool bag. But right now you're almost broke. And that's bad. Because you're an Espresso Addict too, a caffeine junkie. You need your fix - 5 cups of espresso. Otherwise you will start to feel really shaky... Really soon! So go get your fix... Lurk around and wait for opportunities!"

  Scenario: Multiple Wait Button Clicks
    When I click the Enter the cafe button
    When I click the Wait button enough times
    Then all sub scenarios should show eventually

