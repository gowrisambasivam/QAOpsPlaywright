# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 17.handleFrames.spec.js >> HandleFrames@failed1
- Location: tests\17.handleFrames.spec.js:5:1

# Error details

```
Error: frame.fill: Unknown engine "name" while parsing selector name="mytext1"
Call log:
  - waiting for locator('name="mytext1"')

```

# Test source

```ts
  1  | //Frames are nothing but a page containing multiple pages inside it, and each page is called a frame.
  2  | //Frames can be handles by 1) frame object with frame name or frame url  2) frame locators
  3  | //Inner frames are frames inside another frame
  4  | const {test, expect}=require('@playwright/test')
  5  | test('HandleFrames@failed1', async({page})=>
  6  | {
  7  | await page.goto('https://ui.vision/demo/webtest/frames/')
  8  | 
  9  | //total number of frames in a page
  10 | const allFrames=await page.frames()
  11 | console.log("Total number of frames:",allFrames.length)
  12 | 
  13 | //appraoch 1: using name of the frame or url of the frame
  14 | 
  15 | const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
> 16 | await frame1.fill('name="mytext1"', 'Hello Frame1')
     |              ^ Error: frame.fill: Unknown engine "name" while parsing selector name="mytext1"
  17 | }
  18 | )
```