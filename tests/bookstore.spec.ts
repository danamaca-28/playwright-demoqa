import { test, expect } from '@playwright/test';

test.describe.configure({ retries: 0 });

test('Login și accesare Book Store', async ({ page }) => {
  await page.goto('https://demoqa.com/login'); test.setTimeout(60000);
  await page.fill('#userName', 'danamaca');
  await page.fill('#password', 'Test12345@?');
  await page.click('#login');

  await page.click('#submit');

  await page.click('#gotoStore');

  //The list books is displayed 
});
