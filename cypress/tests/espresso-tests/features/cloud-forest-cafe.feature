Feature: Cloud forest cafe

  Scenario: Wait at cloud forest cafe until death
    When I have waited enough times to die
    Then I should see description "You health has deteriorated too much - you feel almost dead.Find a caffeine-detox clinic?"

  Scenario: Go north
    When I click Go north button
    Then I should see the "You are on an empty street. Not much action around here." text

  Scenario: Go south
    When I click Go south
