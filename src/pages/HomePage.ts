import { expect, Page } from '@playwright/test';
import { HomeLocators } from '../locators/HomeLocators';

export class HomePage {
  private readonly locators: HomeLocators;

  constructor(private readonly page: Page) {
    this.locators = new HomeLocators(page);
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async openAccount(): Promise<void> {
    await this.locators.openAccountButton.click();
  }
}
