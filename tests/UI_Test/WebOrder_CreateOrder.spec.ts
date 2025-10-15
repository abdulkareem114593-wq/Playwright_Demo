import { test, expect } from '@playwright/test';

test('Create an Order', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'List of All Orders' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Order', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Order', exact: true }).click();
  await page.getByLabel('Product:*').selectOption('FamilyAlbum');
  await page.getByRole('textbox', { name: 'Quantity:*' }).click();
  await page.getByRole('textbox', { name: 'Quantity:*' }).fill('10');
  await page.getByRole('textbox', { name: 'Discount:' }).click();
  await page.getByRole('textbox', { name: 'Discount:' }).fill('20');
  await page.getByRole('textbox', { name: 'Customer name:*' }).click();
  await page.getByRole('textbox', { name: 'Customer name:*' }).fill('Abdul');
  await page.getByRole('textbox', { name: 'Street:*' }).click();
  await page.getByRole('textbox', { name: 'Street:*' }).fill('Brigade Road');
  await page.getByRole('textbox', { name: 'City:*' }).click();
  await page.getByRole('textbox', { name: 'City:*' }).fill('Bangalore');
  await page.getByRole('textbox', { name: 'State:' }).click();
  await page.getByRole('textbox', { name: 'State:' }).fill('KA');
  await page.getByRole('textbox', { name: 'Zip:*' }).click();
  await page.getByRole('textbox', { name: 'Zip:*' }).fill('562110');
  await page.getByRole('radio', { name: 'Visa' }).check();
  await page.getByRole('textbox', { name: 'Card Nr:*' }).click();
  await page.getByRole('textbox', { name: 'Card Nr:*' }).press('End');
  await page.getByRole('textbox', { name: 'Card Nr:*' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Card Nr:*' }).press('ArrowUp');
  await page.getByRole('textbox', { name: 'Card Nr:*' }).press('Home');
  await page.getByRole('textbox', { name: 'Card Nr:*' }).press('PageUp');
  await page.getByRole('textbox', { name: 'Card Nr:*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Card Nr:*' }).press('PageDown');
  await page.getByRole('textbox', { name: 'Card Nr:*' }).fill('12673498');
  await page.getByRole('textbox', { name: 'Expire date (mm/yy):*' }).click();
  await page.getByRole('textbox', { name: 'Expire date (mm/yy):*' }).fill('13/10');
  await page.getByRole('link', { name: 'Process' }).click();
  await expect(page.getByRole('strong')).toHaveText('New order has been successfully added.');
  await page.getByRole('link', { name: 'View all orders' }).click()
  await expect(page.locator("//td[text()='Abdul']")).toHaveText('Abdul')
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
   await expect(page).toHaveURL("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx")
});