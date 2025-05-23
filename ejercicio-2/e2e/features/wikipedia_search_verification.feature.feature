Feature: wikipedia results in google search engine
 
    Scenario: Search Wikipedia for automation history 
        When I do a google search on "automatización"
        And I click on the Wikipedia result
        Then I should verify the first automatic process was in "primer proceso industrial completamente automatizado"

    Scenario: Search Wikipedia for automation using Im Feeling Lucky button
        When I do a google search on "automatización+wikipedia" using Im Feeling Lucky
        Then I should verify I am on the Wikipedia page
        And I should verify the first automatic process was in "primer proceso industrial completamente automatizado"
