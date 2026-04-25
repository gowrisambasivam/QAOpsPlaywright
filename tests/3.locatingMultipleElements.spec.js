/*const {test, expect}=require('@playwright/test')
 const allelements =await page.$$('a')//locate multiple web elements using $$ function and store it in a variable
  for (const link of allelements)
  {const {test, expect}=require('@playwright/test')
test.skip('LocatorMultipleElements',async({page})=>{
  await page.goto("https://demoblaze.com/index.html")
 
    const linktext=await link.textContent();
    console.log(linktext);
  }

await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")

  const allProducts= await page.$$("//div[@id='tbodyid']//div/h4/a")
    console.log("middle one&&&&&&&&&&&&&&&&&&")
   for (const product of allProducts)
  {
    const productName=await product.textContent();
  
    console.log(productName);
  }


  await page.waitForSelector('id=tbodyid')
  const allPhones=await page.$$('a')
  console.log("last one.....................")
  for (const phone of allPhones)
  {
    const phoneName=await phone.textContent();//textContent is a method that is used to get the text content of the web element. It will return the text content of the web element as a string.
    

    console.log(phoneName);
  }

  })*/