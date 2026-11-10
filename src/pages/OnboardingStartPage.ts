import { expect, Page } from '@playwright/test';
import { OnboardingStartLocators } from '../locators/OnboardingStartLocators';

export class OnboardingStartPage {
  private readonly locators: OnboardingStartLocators;

  constructor(private readonly page: Page) {
    this.locators = new OnboardingStartLocators(page);
  }

  async assertLoaded(): Promise<void> {
    await expect(this.locators.emailInput).toBeVisible();
  }

  async enterEmail(email: string): Promise<void> {
    await expect(this.locators.emailInput).toBeVisible();
    await this.locators.emailInput.fill(email);
    await expect(this.locators.emailInput).toHaveValue(email);
  }

  async clearEmail(): Promise<void> {
    await expect(this.locators.emailInput).toBeVisible();
    await this.locators.emailInput.fill('');
    await expect(this.locators.emailInput).toHaveValue('');
  }

  async assertSubmitDisabled(): Promise<void> {
    await expect(this.locators.submitButton).toBeDisabled();
  }

  async assertEmailInvalid(): Promise<void> {
    await this.locators.emailInput.blur();
    await expect(this.locators.emailInput).toHaveJSProperty('validity.valid', false);
  }
}
