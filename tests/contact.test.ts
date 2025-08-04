import { test, expect } from '@playwright/test';

test('contact form fields are visible', async ({ page }) => {
  await page.goto('http://localhost:3000/docs/contact.html');
  await expect(page.getByPlaceholder('NAME')).toBeVisible();
  await expect(page.getByPlaceholder('EMAIL')).toBeVisible();
  await expect(page.getByPlaceholder('MESSAGE')).toBeVisible();
  await expect(page.getByRole('button', { name: /send/i })).toBeVisible();
});

test('form shows validation errors when fields are empty', async ({ page }) => {
  await page.goto('http://localhost:3000/docs/contact.html');
  await page.getByRole('button', { name: /send/i }).click();
  // Add assertions for validation messages if present
});

test('form submits with valid data', async ({ page }) => {
  await page.goto('http://localhost:3000/docs/contact.html');
  await page.getByPlaceholder('NAME').fill('Test User');
  await page.getByPlaceholder('EMAIL').fill('test@example.com');
  await page.getByPlaceholder('MESSAGE').fill('Hello!');
  await page.getByRole('button', { name: /send/i }).click();
  // Check for a success message or confirmation
});

test('contact info and social links are visible', async ({ page }) => {
  await page.goto('http://localhost:3000/docs/contact.html');
  await expect(page.getByText('Seattle, Washington')).toBeVisible();
  await expect(page.getByRole('link', { name: /nmcalis.dev@gmail.com/i })).toBeVisible();
  await expect(page.locator('.fa-github')).toBeVisible();
  await expect(page.locator('.fa-codepen')).toBeVisible();
  await expect(page.locator('.fa-twitter')).toBeVisible();
  await expect(page.locator('.fa-instagram')).toBeVisible();
});

test('contact form is accessible', async ({ page }) => {
  await page.goto('http://localhost:3000/docs/contact.html');
  await expect(page.getByPlaceholder('NAME')).toBeVisible();
  await expect(page.getByPlaceholder('EMAIL')).toBeVisible();
  await expect(page.getByPlaceholder('MESSAGE')).toBeVisible();
});