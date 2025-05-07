// const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");

// async function testRun() {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.manage().window().maximize();
//   await driver.get("https://demo.evershop.io/");
//   // element a // click
//   // element b // input
//   await driver.quit();
// }

// testRun();



// const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
// // const chrome = require("selenium-webdriver/chrome");
// const productName = "Nike air zoom pegasus 35";

// async function testRun() {
//   let driver = await new Builder().forBrowser(Browser.CHROME).build();
//   await driver.manage().window().maximize();
//   await driver.get("https://demo.evershop.io/");
//   await driver.findElement(By.xpath('//a[@class="search-icon"]')).click();
//   await driver.findElement(By.xpath('//input[@placeholder="Search"]')).sendKeys("Nike", Key.ENTER);
//   await driver.findElement(By.xpath('//input[@placeholder="Search"]')).sendKeys(Key.ENTER);
//   await driver.findElement(By.xpath(`//a[contains(@href, '182')]/span[contains(text(), '${productName}')]`)).click();
//   // Handle potential color and size selections (assuming these are common)
//   await driver.findElement(By.xpath("//a[@href='#' and contains(text(), 'S')]")).click();
//   await driver.sleep(3000);
//   await driver.findElement(By.xpath("//a[@href='#' and contains(text(), 'Black')]")).click();
//   // Find the quantity input field, clear it, and send "2"
//   await driver.sleep(3000);
//   await driver.findElement(By.xpath('//input[@name="qty"]')).clear();
//   await driver.findElement(By.xpath('//input[@name="qty"]')).sendKeys("2");
//   await driver.findElement(By.xpath('//button[contains(@class, "ADD TO CART")]')).click();
//   await driver.sleep(4000);
//   // Optionally click on a "view cart" or "checkout" button if present
//   await driver.findElement(By.xpath('//a[@class="add-cart-popup-button"]')).click(); // Or a different class name if applicable
//   await driver.sleep(5000); // Give time for the cart/checkout page to load

//   await driver.quit();
// }

// testRun();



const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome'); // Optional: for customizing Chrome options

const productName = "Nike air zoom pegasus 35";

async function testRun() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");

    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike");
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);

    await driver.findElement(By.xpath(`//a[contains(@href,'146')]/span[contains(text(),'${productName}')]`)).click();
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(), 'M')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(), 'Black')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//input[@name='qty']")).clear();
    await driver.findElement(By.xpath("//input[@name='qty']")).sendKeys(2);
    await driver.findElement(By.xpath("//button[@class='button primary outline']")).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath("//a[@class='add-cart-popup-button']")).click();
    await driver.sleep(5000);

    await driver.quit();
}

testRun();
