
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

npx playwright test demo-todo-app.spec.ts
 Run Tests in a Specific Browser

npx playwright test --project=firefox
 Run a Single Test by Its Title

Copy the full test title from the list:

npx playwright test -g "Login Page - valid credentials"
Run All Tests with UI

npx playwright test --ui
 Playwright Test runner interface in your browser

