import { test, expect } from '@playwright/test';

const links = [
  { label: 'Created', expected: 'Link has responded with status 201 and status text Created' },
  { label: 'No Content', expected: 'Link has responded with status 204 and status text No Content' },
  { label: 'Moved', expected: 'Link has responded with status 301 and status text Moved Permanently' },
  { label: 'Bad Request', expected: 'Link has responded with status 400 and status text Bad Request' },
  { label: 'Unauthorized', expected: 'Link has responded with status 401 and status text Unauthorized' },
  { label: 'Forbidden', expected: 'Link has responded with status 403 and status text Forbidden' },
  { label: 'Not Found', expected: 'Link has responded with status 404 and status text Not Found' },
];

test.describe('DemoQA Links API messages', () => {
  links.forEach(({ label, expected }) => {
    test(`should show correct response for "${label}"`, async ({ page }) => {
      await page.goto('https://demoqa.com/links');
      await page.getByRole('link', { name: label }).click();

      const messageLocator = page.locator('#linkResponse');
      await expect(messageLocator).toBeVisible();

      const text = await messageLocator.textContent();
      expect(text?.trim());
    });
  });
});
