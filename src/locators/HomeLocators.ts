import { Locator, Page } from '@playwright/test';

export class HomeLocators {
  constructor(private readonly page: Page) {}

  get openAccountButton(): Locator {
    return this.page.getByRole('button', { name: /Open account|Konto eröffnen/i }).first();
  }
}
