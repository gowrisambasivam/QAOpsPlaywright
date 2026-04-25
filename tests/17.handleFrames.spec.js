//Frames are nothing but a page containing multiple pages inside it, and each page is called a frame.
//Frames can be handles by 1) frame object with frame name or frame url  2) frame locators
//Inner frames are frames inside another frame
const {test, expect}=require('@playwright/test')
test('HandleFrames@failed1', async({page})=>
{
await page.goto('https://ui.vision/demo/webtest/frames/')

//total number of frames in a page
const allFrames=await page.frames()
console.log("Total number of frames:",allFrames.length)

//appraoch 1: using name of the frame or url of the frame

const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
await frame1.fill('name="mytext1"', 'Hello Frame1')
}
)