
# 🧪 Playwright Tests for DemoQA Elements

This repository contains automated UI tests written in **TypeScript** using **Playwright**.  
The tests cover the **Elements** section of the [demoqa.com](https://demoqa.com/) website, including form validation, links, and UI feedback messages.

---

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
📖 Test Plan / Strategy (Summary)

What is being tested: UI functionality (login, form validation, UI elements) and API endpoints (CRUD operations on items/books).
Test coverage: Positive and negative scenarios, including valid/invalid inputs and API error handling.
Tools used: Playwright for UI automation and API testing due to its speed and all-in-one capabilities.
How to run: See instructions above.
Assumptions: Tests require an internet connection and stable access to demoqa.com.
Limitations: Tests are for demo purposes and do not cover every possible edge case or performance testing.
