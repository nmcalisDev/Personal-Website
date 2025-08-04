import { test, expect } from '@playwright/test';

test('contact info and social links are visible', async ({ page }) => {
  await page.goto('http://localhost:3000/docs/contact.html');
  await expect(page.getByRole('link', { name: /nmcalis.dev@gmail.com/i })).toBeVisible();
  await expect(page.locator('.fa-github')).toBeVisible();
  await expect(page.locator('.fa-codepen')).toBeVisible();
  await expect(page.locator('.fa-twitter')).toBeVisible();
  await expect(page.locator('.fa-instagram')).toBeVisible();
});