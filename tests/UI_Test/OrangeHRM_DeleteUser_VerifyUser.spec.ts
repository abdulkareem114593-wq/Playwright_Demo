import { test, expect } from '@playwright/test';

test('Create, Delete & Verify User in Orange HRM', async ({ page }) => {
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
  await page.waitForTimeout(2000)

 // await page.pause();

  await expect(page.getByText('Successfully Saved')).toBeVisible();
  await page.waitForTimeout(5000)

  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  
  //Verify user is added
  //await expect(page.getByRole('table')).toContainText('UserName');
  await page.waitForSelector(".orangehrm-container");
  await expect(page.locator("//div[text()='"+UserName+"']")).toHaveText(UserName);
  
  //await page.pause();

  //const userRow = page.locator("//div.oxd-table-card']").locator('text=${UserName}').first();
  //await userRow.locator('//i.bi-pencil-fill').click();
  
// Identify the User created and Click on Delete

  await page.locator("//div[text()='"+UserName+"']//parent::div/following-sibling::div/div/button/i[@class='oxd-icon bi-trash']").click();

  //await page.pause();
  await expect(page.locator('html').getByRole('document')).toContainText('The selected record will be permanently deleted. Are you sure you want to continue?');
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
  await page.waitForSelector(".orangehrm-container");
  await page.waitForTimeout(5000)

  //Verify User is Deleted
  await expect(page.locator("//div[@class='orangehrm-container']")).not.toHaveText(UserName);
  //await expect(page.locator("//div[text()='"+UserName+"']")).not.toContainText(UserName);
   // await expect(page.getByRole('heading', { name: 'Edit User' })).toBeVisible();
  // await page.locator('form').getByText('Admin').click();
  // await page.getByRole('listbox').getByText('ESS').click();
  // await page.getByText('Enabled').click();
  // await page.getByText('Disabled').click();
  //await page.getByRole('textbox').nth(2).click();
  //await page.getByRole('textbox').nth(2).press('ControlOrMeta+a');
  //await page.getByRole('textbox').nth(2).fill('Abdul163');
  // await page.getByRole('button', { name: 'Save' }).click();
  // await page.waitForSelector(".orangehrm-container");
  // await expect(page.locator("//div[text()='"+UserName+"']")).toHaveText(UserName);
  // await expect(page.locator("//div[text()='"+UserName+"']/parent::div/following-sibling::div/div").first()).toHaveText('ESS');


  //await page.pause();


  
  //await page.getByRole('listitem').filter({ hasText: 'Remya Raj' }).locator('i').click();
//Logout application
  await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});