const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com');
  await page.locator('div:nth-child(2) > div > .card-up').click();
  await page.locator('span').filter({ hasText: 'Elements' }).locator('div').first().click();
  await page.locator('li').filter({ hasText: 'Text Box' }).click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('infas');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('minfasahamed@gmail.com');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('test');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();
});