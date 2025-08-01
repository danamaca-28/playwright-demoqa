
# 🧪 Playwright Tests for DemoQA Elements

This repository contains automated UI tests written in **TypeScript** using **Playwright**.  
The tests cover the **Elements** section of the (https://demoqa.com/) website, including form validation, links, and UI feedback messages.

My project uses Playwright with TypeScript to automate both UI and API tests for the DemoQA website. The tests focus on core user workflows such as login, form validation, navigation via links, and CRUD operations on items/books through API endpoints.

UI Tests: Cover scenarios like valid/invalid login, new account creation, button states, link validation, and UI feedback messages. These tests verify element presence, input validations, button enabling/disabling, and message displays to ensure the frontend behaves correctly.
API Tests: Use Playwright’s API testing capabilities to automate CRUD operations on backend endpoints, including creating users, adding books, editing, and deleting items. Both positive and negative cases are included to validate proper API behavior and error handling.
Test Organization: Tests are well-structured under separate folders (tests/ for UI, tests/api/ for API) for clarity and maintainability.
Execution & Reporting: Tests can be run selectively or fully across browsers via CLI commands, and test failures generate trace files for easier debugging.

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

 Run all tests 

 npx playwright test


📝 Additional Notes

API tests are located in the tests/api folder and cover REST endpoints such as login, adding/editing/deleting books or items.
Test reports and traces are generated automatically on failures for easier debugging.
GitHub Actions are configured to run tests automatically on push and pull requests.

Automated Tests Details

Most of the automated tests in this project are working correctly; however, there are a few tests that currently fail in some environments due to known issues:

## Known Issues / API Limitations

### ❌ Edit book via PUT not supported

The DemoQA BookStore API does **not support editing a book** in a user's collection using the `PUT /BookStore/v1/Books` endpoint.

#### What happens:
When attempting to update a book with a `PUT` request, the API responds with:

or a `404 Not Found` error.

#### Workaround:
To simulate updating a book:
1. Delete the existing book using `DELETE /BookStore/v1/Book`
2. Add the new book using `POST /BookStore/v1/Books`

This approach achieves the same outcome.

#### Related test:
- `tests/api/edit-book.spec.ts`: this test fails if `PUT` is used directly and should be rewritten using the workaround.

During automated API testing for the DemoQA BookStore, the test that tries to replace an existing book with another (using the PUT /BookStore/v1/Books endpoint) fails. Specifically, the test expects that after the update, the user’s book list contains the new ISBN (isbn2), but the API response still shows the original ISBN (isbn).

What was manually tested in Postman
The following steps were tested manually in Postman:

Create a new user (POST /Account/v1/User) — received correct response with status 201 and a userID.
Generate an authentication token (POST /Account/v1/GenerateToken) — received correct response with status 200 and a valid token.
Add a book to the user (POST /BookStore/v1/Books) — book was successfully added.
Attempt to replace the book (PUT /BookStore/v1/Books) — response status was 200, but checking the user’s book collection afterward showed the original book, not the new one.

The PUT /BookStore/v1/Books endpoint does not actually update the user’s book collection in the backend, even though it returns a 200 status.
Most likely, the DemoQA API does not support replacing a book via this endpoint or has incomplete implementation for this functionality.
The API response after the supposed update does not reflect the expected change, so the test fails when verifying that the user’s books contain the new ISBN.
Conclusion
The automated test for editing (replacing) a book fails because the DemoQA API does not persist the update, despite returning a success status. This is a limitation of the tested API, not an issue with the test script itself.
## Known Issues and Bug Reports

During testing, several unexpected behaviors and inconsistencies were observed in the DemoQA BookStore API. These include:

- Lack of support for updating books via PUT requests.
- Inconsistent response codes on authentication and book operations.
- Validation errors related to userId and token usage.

Detailed bug reports and observations have been documented throughout the project to help better understand these issues and suggest possible workarounds (Please consult the bug reports for more information and context about these issues)

🧪 Edit Book API Test – Debugging and Fix Explanation
During the development of the edit-book.spec.ts test, we encountered consistent failures when attempting to replace a book via the /BookStore/v1/Books PUT endpoint.

🔍 Initial Issue

Although the API call to replace the book returned a 200 OK status, the response from GET /Account/v1/User/{userId} still showed the original book (isbn: 9781449331818) instead of the expected updated one (isbn: 9781449325862). This indicated that the book had not actually been replaced.

In Postman, the same behavior was observed: the PUT request appeared successful, but the replacement didn't reflect in the user’s book list. The response message was misleading and did not indicate a failure.

🛠️ Root Cause & Fix

Through testing and observation, we discovered that the API does not fully replace an existing book unless the current book is first deleted. This behavior is not clearly documented in the Swagger/OpenAPI spec, but it appears to be a limitation of the backend implementation.

To fix the test and align with this behavior:

I first deleted the existing book using the DELETE /BookStore/v1/Book endpoint.
Then, I added the new book (isbn2) via the POST /BookStore/v1/Books endpoint.
This sequence guarantees that the expected book is added and verified consistently across all browsers (Chromium, Firefox, WebKit).

✅ Final Result

After implementing this logic, all tests passed successfully across all environments. This workaround ensures the reliability of the Edit Book API flow until the backend supports proper book replacement in a single operation.




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
