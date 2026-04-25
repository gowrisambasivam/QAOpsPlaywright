//describe.only runs only the ones specified as only
import { test, expect } from '@playwright/test';
test.beforeAll(async()=>{
   console.log("Run this before all test cases") 
})
test.afterAll(async()=>{
   console.log("Run this after all test cases") 
})
test.beforeEach(async()=>{
   console.log("Run this before each test cases") 
})
test.afterEach(async()=>{
   console.log("Run this after each test cases") 
})

test.describe('Group1',()=>{
test('testnumber1',async()=>{
console.log("This is test case 1")
})
test('testnumber2',async()=>{
console.log("This is test case 2")
})
})

test.describe('Group2',()=>{
test('testnumber3',async()=>{
console.log("This is test case 3")
})
test('testnumber4',async()=>{
console.log("This is test case 4")
})
})