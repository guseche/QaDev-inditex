Feature: Create your user

  Background:
    * url urlPetStore
    * def generateUser =
  """
    function(){
    return 'user' + Date.now()
    }
  """
    * def userName = generateUser().replaceAll(':', '')
    * print userName

  Scenario: Create user and retrieve their data

    #Create user
    Given path 'v2/user'
    And request
    """
    {
      id: 0,
      username: '#(userName)',
      firstName: 'gabriel',
      lastName: 'useche',
      email: 'gjusecheo@gmail.com',
      password: 'Pass1234',
      phone: '3166264244',
      userStatus: 0
    }
    """
    When method POST
    Then status 200
    * def idCreateUser = Number(response.message)
    * print 'id user is',idCreateUser

    #Created user validation
    Given path 'v2/user/' + userName
    When method GET
    Then status 200
    And match $.id == idCreateUser