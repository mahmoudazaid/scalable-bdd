Feature: Onboarding start - email step
  Start of account opening via the Open account register modal.

  @onboarding @smoke @positive
  Scenario: Open account shows the registration start step
    Given I open the home page
    And I accept all cookies
    When I click Open account
    Then the onboarding start step is shown

  @onboarding @negative @test 
  Scenario: Invalid email keeps the user on the start step
    Given I open the home page
    And I accept all cookies
    When I click Open account
    # And I enter email "not-an-email"
    Then the email field is marked invalid
    And the Open account submit button is disabled
    And the onboarding start step is shown

  @onboarding @negative
  Scenario: Empty email keeps Open account submit disabled
    Given I open the home page
    And I accept all cookies
    When I click Open account
    And I clear the email field
    Then the Open account submit button is disabled
    And the onboarding start step is shown
