
# 🧪 Playwright Tests for DemoQA Elements

This repository contains automated UI tests written in **TypeScript** using **Playwright**.  
The tests cover the **Elements** section of the (https://demoqa.com/) website, including form validation, links, and UI feedback messages.

My project uses Playwright with TypeScript to automate both UI and API tests for the DemoQA website. The tests focus on core user workflows such as login, form validation, navigation via links, and CRUD operations on items/books through API endpoints.

UI Tests: Cover scenarios like valid/invalid login, new account creation, button states, link validation, and UI feedback messages. These tests verify element presence, input validations, button enabling/disabling, and message displays to ensure the frontend behaves correctly.
API Tests: Use Playwright’s API testing capabilities to automate CRUD operations on backend endpoints, including creating users, adding books, editing, and deleting items. Both positive and negative cases are included to validate proper API behavior and error handling.
Test Organization: Tests are well-structured under separate folders (tests/ for UI, tests/api/ for API) for clarity and maintainability.
Execution & Reporting: Tests can be run selectively or fully across browsers via CLI commands, and test failures generate trace files for easier debugging. You also have plans or partial setup for CI integration via GitHub Actions.
Overall: Your approach balances comprehensive functional coverage with maintainable code, leveraging Playwright’s all-in-one framework for end-to-end automation in a simple and efficient way.---

## 📦 Technologies Used

- Playwright
- TypeScript
- GitHub Actions (CI/CD)

---

## 📁 Project Structure

 Run a Specific Test File

npx playwright test invalid-email.spec.ts
 Run Tests in a Specific Browser

npx playwright test --project=firefox
 Run a Single Test by Its Title

Copy the full test title from the list:

npx playwright test -g "Login Page - valid credentials"
Run All Tests with UI

npx playwright test --ui
 Playwright Test runner interface in your browser


📝 Additional Notes

API tests are located in the tests/api folder and cover REST endpoints such as login, adding/editing/deleting books or items.
Test reports and traces are generated automatically on failures for easier debugging.
GitHub Actions are configured to run tests automatically on push and pull requests.
Automated Tests Details

Most of the automated tests in this project are working correctly; however, there are a few tests that currently fail in some environments due to known issues:

The tests related to login and accessing the Book Store (tests/bookstore.spec.ts) occasionally experience stability issues, especially on certain browsers (Chromium, Firefox, Webkit). These failures are most likely caused by varying page load times or dynamic conditions during the test execution.
The test for registering a new user (tests/new.account.spec.ts), specifically the part involving the captcha checkbox validation, cannot be fully automated in real conditions because captcha is designed to prevent automation. For the testing environment, it is recommended to either disable captcha or use a special test mode that bypasses this validation.
Future Plans:
Improve UI test stability by optimizing waits and adding better synchronization mechanisms (waitFor).
Implement a mock or bypass solution for captcha in the test environment to allow full testing of the registration flow.
Currently, the failing tests do not affect core functionality and do not block project development.

📖 Test Plan 

What is being tested: UI functionality (login, form validation, UI elements) and API endpoints (CRUD operations on items/books).
Test coverage: Positive and negative scenarios, including valid/invalid inputs and API error handling.
Tools used: Playwright for UI automation and API testing due to its speed and all-in-one capabilities.
How to run: See instructions above.
Assumptions: Tests require an internet connection and stable access to demoqa.com.
Limitations: Tests are for demo purposes and do not cover every possible edge case or performance testing.
