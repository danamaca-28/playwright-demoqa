import { test, expect } from '@playwright/test';

test('Register new user up to captcha checkbox', async ({ page }) => {
  await page.goto('https://demoqa.com/register');

  await page.fill('#firstname', 'Andreea');
  await page.fill('#lastname', 'Nasa');
  await page.fill('#userName', 'andreea.nasa12345'); // schimbă numele pentru a evita duplicate
  await page.fill('#password', 'SecurePass!123');

  // Dacă checkbox-ul nu are restricții severe, îl putem bifa
  //const captchaCheckbox = page.locator('.recaptcha-checkbox-border'); // selector pentru checkbox reCaptcha
  //await captchaCheckbox.click();

  // Aici nu putem trimite formularul automat, pentru că ar fi nevoie să rezolvăm captcha real

  // Dacă vrei, poți opri aici testul și să faci un assert că formularul e completat corect
  await expect(page.locator('#userName')).toHaveValue('andreea.nasa12345');
});
