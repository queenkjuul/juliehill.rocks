import { expect, test } from '@playwright/test'

test('nav menu opens', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel('Open main menu')).toBeVisible()
  await page.getByLabel('Open main menu').click()
  await expect(page.getByLabel('Sidebar')).toBeVisible()
  await page.getByLabel('Close', { exact: true }).click()
  await expect(page.getByLabel('Sidebar')).not.toBeVisible()
})
