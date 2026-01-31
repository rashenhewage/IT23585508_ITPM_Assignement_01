# IT23585508_ITPM_Assignement_01

Student details
- Name: Hewage D.H.D.R
- Student ID: IT23585508
- Repository: rashenhewage/IT23585508_ITPM_Assignement_01

## Project Overview
This repository contains automated tests implemented using Playwright (Node.js). The tests can be run locally to validate the behaviour of the target application under test.

## Prerequisites
- Node.js (v14+ recommended)
- npm (comes with Node.js)
- Internet access to install dependencies

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rashenhewage/IT23585508_ITPM_Assignement_01.git
   cd IT23585508_ITPM_Assignement_01
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

## Running Tests
Run the full Playwright test suite with:
```bash
npx playwright test
```

Common flags:
- Run tests in headed mode (see UI while tests run):
  ```bash
  npx playwright test --headed
  ```
- Run a single test file:
  ```bash
  npx playwright test tests/my-test.spec.ts
  ```
- Run tests with a specific reporter (e.g., list):
  ```bash
  npx playwright test --reporter=list
  ```

## Viewing Test Results / Reports
Playwright can generate HTML reports that you can view in your browser.

Generate a report (Playwright generates reports automatically to `playwright-report` after tests run):
```bash
npx playwright test
```

Open the HTML report in your browser:
```bash
npx playwright show-report
```

Note: your original note included `npx playwright show/result`. The standard command to open the Playwright HTML report is `npx playwright show-report`. If you have a custom report path, you can run:
```bash
npx playwright show-report ./playwright-report
```

## Project Structure (typical)
- package.json            - npm metadata and scripts
- playwright.config.*     - Playwright configuration
- tests/                  - test files (e.g., *.spec.ts or *.spec.js)
- playwright-report/      - generated HTML report (created after running tests)
- fixtures/, helpers/     - (optional) test helpers and fixtures

(Your repository may vary — inspect the repo for exact file and folder names.)

## Troubleshooting
- If Playwright browsers are missing, install them:
  ```bash
  npx playwright install
  ```
- If tests fail due to environment differences, try running with:
  ```bash
  npx playwright test --headed --debug
  ```
- Ensure Node.js and npm versions meet the project's requirements.

## Useful Links
- Playwright documentation: [Playwright](https://playwright.dev/)

## Contributing
- Create a branch for your changes.
- Add tests or fixes.
- Open a pull request describing your changes.

## License
Specify the license for your project here (e.g., MIT) or remove this section if not applicable.

## Contact
Student: Hewage D.H.D.R — Student ID IT23585508

Commands referenced in this README:
```bash
npm install
npx playwright test
npx playwright show-report
# (alternative noted by you:) npx playwright show/result  <-- see note above about correct command
```
