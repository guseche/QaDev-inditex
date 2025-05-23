Feature: Count repeated pet names

  Scenario: Count pet names in a list
    * def result = call read('classpath:features/find_pets_by_status.feature')
    * print petCounter.of(result.listPets).countRepeatedNames()