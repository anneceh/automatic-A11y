import { test, expect } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
})

test.describe('Todo app', () => {
    test('should be accessible', async ({ page }) => {
        const results = await new AxeBuilder({ page }).analyze()
        expect(results.violations).toStrictEqual([])
    })
})