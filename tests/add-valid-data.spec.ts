import { test, expect } from '@playwright/test';


test('Add valid data - cu selectori mai robusti', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

 // Butonul - dacă nu găsești după id, caută după text
 await page.click('#addNewRecordButton');

  await page.fill("#firstName", 'Ion ');

  await page.fill("#lastName", 'Popescu');
  await page.fill('#age', '35');


  await page.fill("#userEmail", 'ion.popescu@example.com');
  await page.fill("#salary", "5000000");
 await page.fill("#department", 'IT');

//Click on submit 

await page.click('#submit');
});