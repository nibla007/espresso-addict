Feature: Cloud forest cafe

  Background:
    Given I am on the start page

  Scenario: Wait at cloud forest cafe until death
    When I have waited enough times to die
    Then I should see description "You health has deteriorated too much - you feel almost dead.Find a caffeine-detox clinic?"

  Scenario: Go north
    When I click Go north button
    Then I should see empty street "You are on an empty street. Not much action around here." text

  Scenario: Go south
    When I click Go south
    Then I should see country-side "You walk and walk. Now you're out in the contry-side. Just great. No coffee here..." text
