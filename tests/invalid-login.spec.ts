import { test, expect } from '@playwright/test';

test('Login Page - invalid credentials', async ({ page }) => {
  await page.goto('https://demoqa.com');
  //Click on Elements 

  await page.click('text=Elements');

  // Click pe Book Store Application
  await page.locator('text=Book Store Application').scrollIntoViewIfNeeded();
  await page.click('text=Book Store Application');

  // Click pe Login
  await page.click('text=Login');

  // Introduce user greșit
  await page.fill('#userName', 'wronguser');
  await page.fill('#password', 'WrongPass123');

  // Click pe Login
  await page.click('#login');

  // Așteaptă mesajul de eroare
  await expect(page.locator('#name')).toHaveText('Invalid username or password!');
});
