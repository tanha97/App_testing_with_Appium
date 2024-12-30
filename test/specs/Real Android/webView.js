const EditNoteScreen = require("../../screenobjects/android/editNote-screen")

describe('Access webview',()=>{
    before(async()=>{

    })

    it('Access External Link & verify content in the browser', async()=>{
     await EditNoteScreen.skipTutorial()
     await EditNoteScreen.navIcon.click()
     await EditNoteScreen.fbText.click()
     // Get current context
     //console.log(await driver.getContext())
     //get all contexts
     await driver.getContexts()
     // switch to webview
     await driver.switchContext("WEBVIEW_chrome")
     //assertion
     let coverImg= await $('.img.coverPhoto')
     await expect(coverImg).toBeDisplayed()
})




})