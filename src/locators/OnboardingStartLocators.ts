import { Locator, Page } from '@playwright/test';

export class OnboardingStartLocators {
  constructor(private readonly page: Page) {}

  get emailInput(): Locator {
    return this.page.locator('[id*="email"]');
  }

  get submitButton(): Locator {
    return this.page.locator('form').getByRole('button', {
      name: /Open account|Konto eröffnen/i,
    });
  }
}
