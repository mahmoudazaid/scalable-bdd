import { Page } from '@playwright/test';
import { CookieBannerLocators } from '../locators/CookieBannerLocators';

export class CookieBanner {
  private readonly locators: CookieBannerLocators;

  constructor(page: Page) {
    this.locators = new CookieBannerLocators(page);
  }

  async acceptAll(): Promise<void> {
    await this.locators.acceptAllButton.click();
  }
}
