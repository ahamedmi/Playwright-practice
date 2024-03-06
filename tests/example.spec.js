const { test, expect } = require("@playwright/test");
test("first test",async ({page})=>{
    await page.goto("https://playwright.dev");
    await page.pause();
}) 

 test("Click element",async ({page})=>{
   await page.goto("https://the-internet.herokuapp.com")
   await page.locator("text=Add/Remove Elements").click() //create locator using text based
   await page.locator("text=Add Element").click()
}) 

test("click a element",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com")
    await page.click("text=Add/Remove Elements")
    await page.click("text=Add Element")
    await page.pause();
}) 

//group tests 

test.describe.parallel("smoke test", () => {

    test.beforeEach(async ({page})=>{
        await page.goto("/");
    })
    test.afterEach(async ()=>{
        console.log("this test is finished")
    })

 test("click a element test_1 @smoke-regression", async ({ page }) => {
    
  })

test("click a element test_2 @smoke", async ({ page }) => {
     const addRemoveElements = page.locator("text=Add/Remove Elements");
     const addElement = page.locator("text=Add Element");
     await addRemoveElements.click();
     await addElement.click();
     await page.pause();
 })

 test("Click element test_3 @regression-smoke", async ({ page }) => {
     await page.locator("text=Add/Remove Elements").click() //create locator using text based
     await page.locator("text=Add Element").click()
 })

 test("click a element test_4 @regression", async ({ page }) => {
     await page.click("text=Add/Remove Elements")
     await page.click("text=Add Element")
     await page.goto("/checkboxes")
     await page.pause();
 }) 
})

test("click a element test_1 @smoke-regression",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    await page.pause();
})

test("click a element test_2 @smoke",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    const addRemoveElements = page.locator("text=Add/Remove Elements");
    const addElement = page.locator("text=Add Element");
    await addRemoveElements.click();
    await addElement.click();
    //await page.pause();
})

test("Click element test_3 @regression-smoke",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com")
    await page.locator("text=Add/Remove Elements").click() //create locator using text based
    //await page.locator("text=Add Element").click()
 })

 test("click a element test_4 @regression",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com")
    await page.click("text=Add/Remove Elements")
    await page.click("text=Add Element")
    //await page.pause();
}) 

test.describe.parallel("Hovering Element", () => {

    test.use({
         storageState :'authentication.json',
         viewport : {width:600,height:800}
     })

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/key_presses?');
    })

    test("Hovers", async ({ page }) => {
        await page.press("#target","Delete")
        await page.pause();

    })

    test("dropdown with label",async ({page})=>{
         //test.setTimeout(10000);
         await page.locator('#dropdown').selectOption({label : 'Option 1'})
         await expect(page.locator('#dropdown')).toHaveValue('1')
 
         await page.locator('#dropdown').selectOption({label : 'Option 2'})
         await expect(page.locator('#dropdown')).toHaveValue('2')
 
         await page.pause();
 
     }) 

 test.skip("test 2",async ({page})=>{
         
         await page.locator('#leftPanel').getByRole('link', { name: 'Transfer Funds' }).click();
         await page.locator('#amount').click();
         await page.locator('#amount').fill('8596');
         await page.getByRole('button', { name: 'Transfer' }).click();
     })
 
     test.skip("test 3",async ({page})=>{
        
         await page.locator('#leftPanel').getByRole('link', { name: 'Bill Pay' }).click();
         await page.locator('input[name="payee\\.name"]').click();
         await page.locator('input[name="payee\\.name"]').fill('gfghhj');
         await page.locator('input[name="payee\\.address\\.street"]').click();
         await page.locator('input[name="payee\\.address\\.street"]').fill('ju');
         await page.locator('input[name="payee\\.address\\.city"]').click();
         await page.locator('input[name="payee\\.address\\.city"]').fill('jio');
         await page.locator('input[name="payee\\.address\\.state"]').click();
         await page.locator('input[name="payee\\.address\\.state"]').fill('njk');
         await page.locator('input[name="payee\\.address\\.zipCode"]').click();
         await page.locator('input[name="payee\\.address\\.zipCode"]').fill('123');
         await page.locator('input[name="payee\\.phoneNumber"]').click();
         await page.locator('input[name="payee\\.phoneNumber"]').fill('458966');
         await page.locator('input[name="payee\\.accountNumber"]').click();
         await page.locator('input[name="payee\\.accountNumber"]').fill('1526');
         await page.locator('input[name="verifyAccount"]').click();
         await page.locator('input[name="verifyAccount"]').fill('1256');
         await page.locator('input[name="amount"]').click();
         await page.locator('input[name="amount"]').fill('14589');
         await page.getByRole('button', { name: 'Send Payment' }).click();  
     })

})

