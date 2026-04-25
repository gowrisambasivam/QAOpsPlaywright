import { test, expect } from '@playwright/test';
//test.skip), test.fail(), test.fixme(), test.slow()
//test.skip()--skips the test
//test.fail()--playwright does run this test case and make sure it's failed test
//test.fixme() playwright does not run this test unlike test.fail()
//test.slow() triples the timeout by thrice
//only annotation
/*test.only('annotation', async ({ page }) => {
  console.log('This is my annonation for only')
}
)
//skip annotation
test.skip('annotation1', async ({ page }) => {
  console.log('This is my  annonation for skip')
}
)
//only annotation
test.only('annotation2', async ({ page }) => {
  console.log('This is my annotation for only')
}
)*/
//skip based on condition
test('annotation3', async ({ page, browserName }) => {
  if(browserName=='chromium')
  {
    test.fixme()
  }
    console.log('Skip this test based on condition for browser ')

}
)
//Fixme used when there is a known issue in the system and you want to skip this test
test('FixmeSkip_AsThereIsKnownIssue', async ({ page }) => {
    test.fixme()
  console.log('Skip as there is existing known issue')
}
)

//Fail Annotation
test('FailTestCase', async ({ page }) => {
   test.fail()//expected
  console.log('this is my test that I want to fail')
  expect(1).toBe(3);//actual if both expected and actual are failed then test case will pass
}
)
//slow
test('slowAnnotation', async ({ page }) => {
test.slow();//increases timeout by thrice from config file
test.setTimeout(5000);//increases timeout by 5000. 30,000+5000=35,000
 await page.goto('https://demoblaze.com/index.html')
  console.log('this is slow annotation test')
}
)
