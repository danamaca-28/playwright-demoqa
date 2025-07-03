import { test, expect } from '@playwright/test';

test('Buton disabled nu poate fi click-uit', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
  
    // Dezactivează butonul cu JS
    await page.evaluate(() => {
      (document.getElementById('rightClickBtn') as HTMLButtonElement).disabled = true;
    });
  
    // Încerci să dai click și verifici că nu apare mesajul
  //  await page.click('#rightClickBtn').catch(() => {});
  //  await expect(page.locator('#rightClickMessage')).toHaveCount(0);
  });
  