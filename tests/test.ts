import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Julie Hill' })).toBeVisible()
  await expect(page.getByText('Frontend Engineer')).toBeVisible()
})
