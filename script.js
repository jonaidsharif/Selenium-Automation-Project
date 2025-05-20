const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome")
const productName = 'Nike Floral Roshe Customized Running Shoes';

async function testRun() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();
  await driver.get("https://demo.nopcommerce.com/");

  await driver.findElement(By.xpath("//input[@class='search-box-text ui-autocomplete-input']")).click();
  await driver.findElement(By.xpath("//input[@class='search-text valid ext-highlight']")).sendKeys("Nike");
  await driver.findElement(By.xpath("//input[@class='search-text valid ext-highlight']")).sendKeys("key.ENTER");
  await driver.findElement(By.xpath("(//h2/a[contains(@href, '/nike-floral-roshe-customized-running-shoes')])).sendKeys("key.ENTER");

  await driver.findElement(By.xpath("")).sendKeys("key.ENTER");
  await driver.sleep(5000);
  await driver.quit();
}

testRun();