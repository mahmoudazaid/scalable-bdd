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
    await this.locators.emailInput.fill(email);
  }

  async clearEmail(): Promise<void> {
    await this.locators.emailInput.fill('');
  }

  async assertSubmitDisabled(): Promise<void> {
    await expect(this.locators.submitButton).toBeDisabled();
  }

  async assertEmailInvalid(): Promise<void> {
    await expect(this.locators.emailInput).toHaveJSProperty('validity.valid', false);
  }
}
