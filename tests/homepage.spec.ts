import { test, expect } from '@playwright/test';

test.describe('Next.js homepage', () => {
  // Basic Navigation Test
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Resumeister/); // Adjust the title as per your site
  });
});