import { test, expect } from '@playwright/test';

test('Login Page - valid credentials', async ({ page }) => {
  // Navighează la pagina de login
  await page.goto('https://demoqa.com');

  //Click on Elements 

  await page.click('text=Elements');
 // 2. Click pe Book Store Application 
 await page.locator('text=Book Store Application').scrollIntoViewIfNeeded();
 await page.click('text=Book Store Application');

 // 3. Click pe Login 
 await page.click('text=Login');

 // 4. Completează username și parolă
 await page.fill('#userName', 'danamaca');
 await page.fill('#password', 'Test12345@?');

 // 5. Click pe butonul de Login
 await page.click('#login');

 // 6. Așteaptă confirmarea login-ului 
 await page.locator('#submit');
});
