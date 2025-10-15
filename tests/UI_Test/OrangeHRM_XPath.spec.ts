import { test, expect } from '@playwright/test';

test('Verify Login Orange HRM ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // await expect(page.locator("//div[@class='orangehrm-login-branding']")).toBeVisible();
  // await page.locator("//input[@placeholder='Username']").fill("Tester");
  // await page.locator("//input[@type='password']").fill("test");
  // await page.locator("//button[@type='submit']").click();

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

});