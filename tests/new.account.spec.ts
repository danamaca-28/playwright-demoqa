import { test, expect } from '@playwright/test';

test('Register new user up to captcha checkbox', async ({ page }) => {
  await page.goto('https://demoqa.com/register');
  test.setTimeout(60000);


  await page.fill('#firstname', 'Andreea');
  await page.fill('#lastname', 'Nasa');
  await page.fill('#userName', 'andreea.nasa12345'); // schimbă numele pentru a evita duplicate
  await page.fill('#password', 'SecurePass!123');

  //const captchaCheckbox = page.locator('.recaptcha-checkbox-border'); // selector pentru checkbox reCaptcha
  //await captchaCheckbox.click();


  await expect(page.locator('#userName')).toHaveValue('andreea.nasa12345');
});
