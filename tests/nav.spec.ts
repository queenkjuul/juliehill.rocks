import { expect, test } from '@playwright/test'

const navButtonLabel = 'Open main menu'

test('nav menu opens', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel(navButtonLabel)).toBeVisible()
  await page.getByLabel(navButtonLabel).click()
  await expect(page.getByLabel('Sidebar')).toBeVisible()
  await page.getByLabel('Close', { exact: true }).click()
  await expect(page.getByLabel('Sidebar')).not.toBeVisible()
})

test('navigates to other pages', async ({ page }) => {
  await page.goto('/')
  await page.getByLabel(navButtonLabel).click()
  await expect(page.getByText('About This Site')).toBeVisible()
  await page.getByText('About This Site').click()
  await page.waitForURL('/pages/siteinfo')
})
