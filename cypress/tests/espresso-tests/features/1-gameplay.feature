Feature: Gameplay

  Background:
    Given I am on the start page

  Scenario: Wait at cloud forest cafe until death
    When I have waited enough times to die
    Then the player should see the description "You health has deteriorated too much - you feel almost dead.Find a caffeine-detox clinic?"

  Scenario: Go north to empty street
    When I click on the "2" button
    Then the player should see the description "You are on an empty street. Not much action around here."

  Scenario: Go south to country-side
    When I click on the "3" button
    Then the player should see the description "You walk and walk. Now you're out in the contry-side. Just great. No coffee here..."

  Scenario: Wait at street cafe
    When I have waited enough times to see "You feel so tired. Why can't coffee be free and abundant? Where have all the 'spressos gone?"
    Then my health should be "45"

  Scenario: Enter and exit the cafe
    When I click on the "0" button
    When I click on the "0" button
    Then the player should see the description "You are standing outside the Cloud Forest Cafe. The sun is shining."

  Scenario: Buy an espresso
    When I click on the "0" button
    When I click on the "1" button
    Then I should have five dollars
    And I should have one espresso

  Scenario: Wait in the cafe
    When I click on the "0" button
    When I click the wait button until I lose health
    Then I should have lost three health

  Scenario: Help button
    When I click on the "4" button
    Then the player should see the description "You're a hipster. And you love iThings and your cool bag. But right now you're almost broke. And that's bad. Because you're an Espresso Addict too, a caffeine junkie. You need your fix - 5 cups of espresso. Otherwise you will start to feel really shaky... Really soon! So go get your fix... Lurk around and wait for opportunities!"

  Scenario: Multiple wait button clicks
    When I click on the "0" button
    When I click the Wait button enough times
    Then all sub scenarios should show eventually

  Scenario: Win the game
    When I have successfully won the game
    Then the player should see the description "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"

  Scenario: Play again after winning
    When I have successfully won the game
    And I click on the "0" button
    Then the player should see the description "You are standing outside the Cloud Forest Cafe. The sun is shining."

  Scenario: Play again after losing
    When I have successfully lost the game
    And I click on the "0" button
    Then the player should see the description "You are standing outside the Cloud Forest Cafe. The sun is shining."

