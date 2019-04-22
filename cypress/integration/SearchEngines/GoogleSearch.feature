Feature: The Google Search Engine

  I want to open Google Search page

  Scenario: Opening a Google Search page
    Given I open Google Search page
    Then I see "Google" in the title

  Scenario: Open a seach by word in Google search Engine
    Given I look for a specific keyword in google search engine
    Then I see the results of my search on the engine