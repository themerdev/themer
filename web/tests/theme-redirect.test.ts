import { expect, test } from '@playwright/test';

test('theme slug redirects', async ({ page }) => {
	await page.goto('/concert');
	await expect(page.locator('#themer-concert-dark-wrapper')).toHaveClass(/selected/);

	await page.goto('/future-pro');
	await expect(page.locator('#themer-future-pro-dark-wrapper')).toHaveClass(/selected/);

	await page.goto('/victor-mono');
	await expect(page.locator('#themer-victor-mono-dark-wrapper')).toHaveClass(/selected/);

	await page.goto('/jamstacker');
	expect(new URL(page.url()).pathname).toBe('/');
});
