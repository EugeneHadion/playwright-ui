# Playwright Template

This repository contains the Playwright framework test project

## Tech stack

-   [NodeJS](https://nodejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Playwright](https://playwright.dev/);

## Install

Before working with this project, complete the following steps:

-   Clone this repo:

```bash
git clone https://github.com/EugeneHadion/playwright-ui.git
```

-   Install dependencies:

```bash
npm i
```

-   Install playwright browsers:

```bash
npm playwright install
```

## Steps to run

To run all tests use the following commands:

-   In headless mode (without showing the browser):

```bash
npm run tests
```

-   In headed mode (with showing the browser):

```bash
npm run tests:headed
```

## Reports

When the tests are completed, an HTML report is generated. To open it, run the following command:

```bash
npm run report:html:show
```

