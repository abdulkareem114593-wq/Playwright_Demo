import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByText('Abdul334').click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByText('Disabled').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).press('ControlOrMeta+a');
  await page.getByRole('textbox').nth(2).fill('Abdul_Updated');
  await page.getByRole('button', { name: 'Save' }).click();


  await page.waitForSelector(".orangehrm-container");
  await expect(page.locator("//div[text()='UserName']")).toBeDisabled();

  await page.locator('form').getByText('ESS').click();
  await page.getByRole('listbox').getByText('ESS').click();
  await page.getByText('Enabled').click();
  await page.getByText('Disabled').click();
  await expect(page.getByRole('heading', { name: 'Edit User' })).toBeVisible();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).press('ControlOrMeta+a');
  await page.getByRole('textbox').nth(2).fill('Abdul163');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Abdul163')).toBeVisible();
  await expect(page.locator("//div[text()='Abdul163']/parent::div/following-sibling::div/div").first()).toHaveText('ESS');
});