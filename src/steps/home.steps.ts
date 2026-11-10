import { Given, When, Then } from './fixtures';
import { HomePage } from '../pages/HomePage';
import { CookieBanner } from '../pages/CookieBanner';

Given('I open the home page', async ({ page }) => {
  await new HomePage(page).open();
});

When('I accept all cookies', async ({ page }) => {
  await new CookieBanner(page).acceptAll();
});
