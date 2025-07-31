import { test, expect, request } from '@playwright/test';

test('Delete a book from user library', async () => {
    const context = await request.newContext({
      baseURL: 'https://demoqa.com',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  
    const username = `user_${Date.now()}`;
    const password = 'StrongPass!123';
    const isbn = '9781449331818';
  
    // Create user
    const userRes = await context.post('/Account/v1/User', {
      data: { userName: username, password },
    });
    const userId = (await userRes.json()).userID;
  
    // Generate token
    const tokenRes = await context.post('/Account/v1/GenerateToken', {
      data: { userName: username, password },
    });
    const token = (await tokenRes.json()).token;
  
    // Add book
    await context.post('/BookStore/v1/Books', {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        userId,
        collectionOfIsbns: [{ isbn }],
      },
    });
  
    // Delete book
    const deleteRes = await context.delete('/BookStore/v1/Book', {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        userId,
        isbn,
      },
    });
  
    expect(deleteRes.status()).toBe(204);
  
    // Confirm it's gone
    const userInfo = await context.get(`/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  
    const books = (await userInfo.json()).books;
    expect(books.length).toBe(0);
  });
  