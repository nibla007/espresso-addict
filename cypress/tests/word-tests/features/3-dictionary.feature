Feature: Dictionary

  Test the dictionary search function

  Scenario: Search for a word in the custom dictionary
    Given that the original dictionary is replaced by the custom dictionary
    And that I am on the "/dictionary" page
    When I enter "a" in the searchbar
    Then there should be 29 results
    And the first result should be "aa"
    And the last result should be "AÖ"