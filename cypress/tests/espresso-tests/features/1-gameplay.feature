Feature: Gameplay

  Background:
    Given I am on the start page

  Scenario: Initial player values are correct
    Then I should have 50 "health"
    And I should have 10 "money"
    And I should have 0 "espressocups"

  Scenario: Wait at cloud forest cafe until death
    When I click the "Wait" button until I see "You health has deteriorated too much - you feel almost dead.Find a caffeine-detox clinic?"
    Then I should have 0 "health"

  Scenario: Wait on empty street
    When I click on the "Go north" button
    When I click the "Wait" button until I see "You feel so tired. Why can't coffee be free and abundant? Where have all the 'spressos gone?"
    Then I should have 45 "health"

  Scenario: Enter and exit the cafe
    When I click on the "Enter the cafe" button
    When I click on the "Exit the cafe" button
    Then the player should see the description "You are standing outside the Cloud Forest Cafe. The sun is shining."

  Scenario: Buy an espresso
    When I click on the "Enter the cafe" button
    When I click on the "Buy an espresso" button
    Then I should have 5 "money"
    And I should have 1 "espressocups"

  Scenario: Wait in the cafe
    When I click on the "Enter the cafe" button
    When I click the "Wait" button until I see "You wait. The barista looks at you."
    Then I should have 47 "health"

  Scenario: Help button
    When I click on the "Help" button
    Then the player should see the description "You're a hipster. And you love iThings and your cool bag. But right now you're almost broke. And that's bad. Because you're an Espresso Addict too, a caffeine junkie. You need your fix - 5 cups of espresso. Otherwise you will start to feel really shaky... Really soon! So go get your fix... Lurk around and wait for opportunities!"

  Scenario: Multiple wait button clicks
    When I click on the "Enter the cafe" button
    Then I wait until all sub scenarios are shown

  Scenario: Win the game
    Given that I have successfully won the game
    Then the player should see the description "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"
    And I should have 5 "espressocups"

  Scenario: Play again after winning
    Given that I have successfully won the game
    Then I should have 5 "espressocups"
    When I click on the "Play again" button
    Then the player should see the description "You are standing outside the Cloud Forest Cafe. The sun is shining."
    And I should have 50 "health"
    And I should have 10 "money"
    And I should have 0 "espressocups"

  Scenario: Play again after losing
    Given that I have successfully lost the game
    And I click on the "Play again" button
    Then the player should see the description "You are standing outside the Cloud Forest Cafe. The sun is shining."
    And I should have 50 "health"
    And I should have 10 "money"
    And I should have 0 "espressocups"
