const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome")

async function testRun() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();
  await driver.get("https://demo.nopcommerce.com/");

  await driver.findElement(By.className("//input[@class= 'search-box-text ui-autocomplete-input']")).click();
  await driver.findElement(By.className("//input[@class='search-text']")).click();

  await driver.sleep(5000);
  await driver.quit();
}

testRun();