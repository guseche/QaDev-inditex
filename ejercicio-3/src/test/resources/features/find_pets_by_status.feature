Feature: Find pets by status

  Scenario: search pets by status sold
    Given url urlPetStore
    And path 'v2/pet/findByStatus'
    And param status = 'sold'
    When method GET
    Then status 200
    * def before = response
    * def fun = function(x){ return {id:x.id, name:x.name} }
    * def listPets = karate.map(before, fun)
    * print listPets
