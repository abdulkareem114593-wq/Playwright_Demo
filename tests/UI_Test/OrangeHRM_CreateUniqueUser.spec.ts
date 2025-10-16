import { test, expect } from '@playwright/test';

test('Create User in Orange HRM @smoke', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('banner')).toContainText('User Management');
  await expect(page.getByRole('button', { name: ' Add' })).toBeVisible();
  await page.getByRole('button', { name: ' Add' }).click();

  await expect(page.locator('#app')).toContainText('Add User');
  await page.getByText('-- Select --').first().click();
  await page.getByRole('listbox').getByText('Admin').click();
  await page.getByText('-- Select --').click();
  await page.getByText('Enabled').click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('A');
  await page.waitForTimeout(5000)
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();

 //await page.pause();

  await page.getByRole('textbox', { name: 'Type for hints...' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('Enter');
  //await page.getByText('Ranga Akunuri').click();
  //await page.getByText('A').click();
  await page.getByRole('textbox').nth(2).click();
//Give unique UserName
  const d = new Date();
  let ms = d.getMilliseconds();
  const UserName = 'Abdul' + ms;
  await page.getByRole('textbox').nth(2).fill(UserName);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000)

 // await page.pause();

  //await expect(page.getByText('Successfully Saved')).toBeVisible();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  
  //Verify user is added
  //await expect(page.getByRole('table')).toContainText('UserName');
  await expect(page.locator("//div[text()='"+UserName+"']")).toHaveText(UserName);
  
  //await page.getByRole('listitem').filter({ hasText: 'Remya Raj' }).locator('i').click();

  await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});