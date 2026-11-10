# Scalable Capital BDD

Playwright + Cucumber E2E tests for https://de.scalable.capital/en

## Setup

```bash
npm install
npx playwright install
cp .env.example .env
```

## Run

```bash
npm test
npm run test:headed
npm run test:ui
npm run test:smoke
npm run report
```

Filter by tag:

```bash
npx bddgen && npx playwright test --grep @onboarding
```

Reports land in `playwright-report/` and `cucumber-report/`.

## Coverage

Onboarding start (register modal after "Open account"):

- modal opens with email field
- invalid email stays invalid / submit disabled
- empty email keeps submit disabled

Notes:

- Tests run against production. Full signup (email verify, IDV, bank) is not covered.
- Register submit stays behind Friendly Captcha, so we assert UI validation, not a completed signup.
- Locators match EN and DE labels.

## Layout

```
features/onboarding/   # Gherkin
src/locators/          # selectors
src/pages/             # page objects
src/steps/             # step defs
playwright.config.ts
```
