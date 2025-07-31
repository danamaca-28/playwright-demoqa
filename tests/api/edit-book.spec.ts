import { test, expect, request } from '@playwright/test';

test('Edit book by replacing it with another one', async () => {
    const context = await request.newContext({
      baseURL: 'https://demoqa.com',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  
    const username = `user_${Date.now()}`;
    const password = 'StrongPass!123';
    const isbn1 = '9781449331818';
    const isbn2 = '9781449325862'; // carte nouă
  
    // Create user
    const userRes = await context.post('/Account/v1/User', {
      data: { userName: username, password },
    });
    expect(userRes.status()).toBe(201);
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
        collectionOfIsbns: [{ isbn: isbn1 }],
      },
    });
  
    // Replace book (edit)
    const editRes = await context.put('/BookStore/v1/Books', {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        userId,
        isbn: isbn1,
        newIsbn: isbn2,
      },
    });
  
    expect(userRes.status()).toBe(201); 

    // Confirm replacement
   const userInfo = await context.get(`/Account/v1/User/${userId}`, {
     headers: { Authorization: `Bearer ${token}` },
   });
  
   const books = (await userInfo.json()).books;
   expect(books.length).toBe(1);
    expect(books[0].isbn).toBe(isbn2);
 });
  