import { test, expect, request } from '@playwright/test';

test('Add a book to a newly created user via API', async () => {
  const context = await request.newContext({
    baseURL: 'https://demoqa.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  });
  

  const username = `user_${Date.now()}`;
  const password = 'StrongPass!123';
  const isbn = '9781449331818';

  // 1. Create user
  const userRes = await context.post('/Account/v1/User', {
    data: { userName: username, password },
  });

  expect(userRes.status()).toBe(201);
  const userData = await userRes.json();
  const userId = userData.userID;

  // 2. Generate token
  const tokenRes = await context.post('/Account/v1/GenerateToken', {
    data: { userName: username, password },
  });

  expect(tokenRes.status()).toBe(200);
  const tokenData = await tokenRes.json();
  const token = tokenData.token;

  // 2.5 Validate token (authorize)
const authRes = await context.post('/Account/v1/Authorized', {
  data: { token },  // token în body, nu în header
});

expect(authRes.status()).toBe(200);


  // 3. Add book
  const bookRes = await context.post('/BookStore/v1/Books', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      userId: userId,
      collectionOfIsbns: [{ isbn }],
    },
  });

  expect(bookRes.status()).toBe(201);

  // 4. Get user info to confirm book was added
  const userInfo = await context.get(`/Account/v1/User/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  expect(userInfo.status()).toBe(200);
  const userDetails = await userInfo.json();
  const books = userDetails.books;

  expect(books.length).toBeGreaterThan(0);
  expect(books[0].isbn).toBe(isbn);
});
