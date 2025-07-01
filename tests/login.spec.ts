import { test, expect } from '@playwright/test';

test('Login Page - valid credentials', async ({ page }) => {
  // Navighează la pagina de login
  await page.goto('https://demoqa.com');

  //Click on Elements 

  await page.click('text=Elements');
})