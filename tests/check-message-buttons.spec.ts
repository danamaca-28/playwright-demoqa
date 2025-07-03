import { test, expect } from '@playwright/test';

test('Interacțiuni cu toate butoanele + validare mesaje', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  // Double click
  await page.dblclick('#doubleClickBtn');
  await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');

  // Right click
  await page.click('#rightClickBtn', { button: 'right' });
  await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');

  // Click normal
  
  const dynamicClickBtn = page.locator('button.btn-primary').nth(2); 
  await dynamicClickBtn.click();
  await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');
});