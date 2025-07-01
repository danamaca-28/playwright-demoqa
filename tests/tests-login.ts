import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await expect(page).toHaveTitle(/ToolsQA/);
});

test('click on Elements card', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: /^Elements$/ }).nth(1).click();
  await expect(page).toHaveURL(/elements/);
});
