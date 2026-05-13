import { test, Page, expect } from '@playwright/test';

test.describe.serial('Create/Define National Tracker', async () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('test', () => {
    expect(true).toBe(true);
  });
});
