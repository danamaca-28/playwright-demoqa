import { test, expect, request } from '@playwright/test';

test('GET /BookStore/v1/Books returns a list of books', async ({ request }) => {
  const response = await request.get('https://demoqa.com/BookStore/v1/Books');
  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(Array.isArray(data.books)).toBeTruthy();
  expect(data.books.length).toBeGreaterThan(0);
});
