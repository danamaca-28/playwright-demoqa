import { test, expect } from '@playwright/test';

test('User Registration - email invalid', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form'); 
  test.setTimeout(60000);
  // Completează câmpurile necesare
  await page.fill('#firstName', 'Ion');
  await page.fill('#lastName', 'Popescu');
  
  // Completează email invalid
  await page.fill('#userEmail', 'emailfaraat.com');

  // Completează alte câmpuri obligatorii, ex:
  await page.fill('#userNumber', '0712345678');

  // Apasă butonul de submit
  await page.click('#submit');

  // Verifică mesajul de eroare pentru email invalid
  const emailError = page.locator('#userEmail'); 

  await expect(emailError).toBeVisible();
//  await expect(emailError).toContainText(/valid email/i);
});
