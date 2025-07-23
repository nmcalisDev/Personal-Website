// filepath: tests/nav.spec.ts
import { test, expect } from '@playwright/test';

test('navigation bar has all links on Home page', async ({ page }) => {
  await page.goto('http://localhost:3000/pages/index.html'); // adjust port/path as needed
  await expect(page.getByTestId('home-link')).toBeVisible();
  await expect(page.getByTestId('about-link')).toBeVisible();
  await expect(page.getByTestId('resume-link')).toBeVisible();
  await expect(page.getByTestId('projects-link')).toBeVisible();
  await expect(page.getByTestId('contact-link')).toBeVisible();
});

test('navigation bar has all links on About page', async ({ page }) => {
  await page.goto('http://localhost:3000/pages/about.html'); // adjust port/path as needed
  await expect(page.getByTestId('home-link')).toBeVisible();
  await expect(page.getByTestId('about-link')).toBeVisible();
  await expect(page.getByTestId('resume-link')).toBeVisible();
  await expect(page.getByTestId('projects-link')).toBeVisible();
  await expect(page.getByTestId('contact-link')).toBeVisible();
});

test('navigation bar has all links on Resume page', async ({ page }) => {
  await page.goto('http://localhost:3000/pages/resume.html'); // adjust port/path as needed
  await expect(page.getByTestId('home-link')).toBeVisible();
  await expect(page.getByTestId('about-link')).toBeVisible();
  await expect(page.getByTestId('resume-link')).toBeVisible();
  await expect(page.getByTestId('projects-link')).toBeVisible();
  await expect(page.getByTestId('contact-link')).toBeVisible();
});

test('navigation bar has all links on Projects page', async ({ page }) => {
  await page.goto('http://localhost:3000/pages/projects.html'); // adjust port/path as needed
  await expect(page.getByTestId('home-link')).toBeVisible();
  await expect(page.getByTestId('about-link')).toBeVisible();
  await expect(page.getByTestId('resume-link')).toBeVisible();
  await expect(page.getByTestId('projects-link')).toBeVisible();
  await expect(page.getByTestId('contact-link')).toBeVisible();
});

test('navigation bar has all links on Contact page', async ({ page }) => {
  await page.goto('http://localhost:3000/pages/contact.html'); // adjust port/path as needed
  await expect(page.getByTestId('home-link')).toBeVisible();
  await expect(page.getByTestId('about-link')).toBeVisible();
  await expect(page.getByTestId('resume-link')).toBeVisible();
  await expect(page.getByTestId('projects-link')).toBeVisible();
  await expect(page.getByTestId('contact-link')).toBeVisible();
});
