import { When, Then } from './fixtures';
import { HomePage } from '../pages/HomePage';
import { OnboardingStartPage } from '../pages/OnboardingStartPage';

When('I click Open account', async ({ page }) => {
  await new HomePage(page).openAccount();
});

When('I enter email {string}', async ({ page }, email: string) => {
  await new OnboardingStartPage(page).enterEmail(email);
});

When('I clear the email field', async ({ page }) => {
  await new OnboardingStartPage(page).clearEmail();
});

Then('the onboarding start step is shown', async ({ page }) => {
  await new OnboardingStartPage(page).assertLoaded();
});

Then('the email field is marked invalid', async ({ page }) => {
  await new OnboardingStartPage(page).assertEmailInvalid();
});

Then('the Open account submit button is disabled', async ({ page }) => {
  await new OnboardingStartPage(page).assertSubmitDisabled();
});
