import { Locator, Page } from '@playwright/test';

export class CookieBannerLocators {
  constructor(private readonly page: Page) {}

  get acceptAllButton(): Locator {
    return this.page.getByTestId('uc-accept-all-button');
  }
}
