const { test, expect } = require('@playwright/test');

test('Portfolio typing and sequence', async ({ page }) => {
  await page.goto('/');

  const h1 = page.locator('#text1');
  await expect(h1).toHaveText(/Maria Sol Gosende/, { timeout: 15000 });

  await expect(page.locator('#cursor1')).toBeHidden();

  const h2 = page.locator('#text2');
  await expect(h2).toHaveText(/Software Engineer/, { timeout: 15000 });

  await expect(page.locator('#cursor2')).toBeVisible();
});