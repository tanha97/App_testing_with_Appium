// describe('Android- Native Feature Test',()=>{
//     xit('Access an Activity Directly',async()=>{
//        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

//        await expect($('//[@text="App/Alert Dialogs]')).toExist()

//     })

//     xit('Working with Dialog Boxes',async()=>{

//       await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
//       await $('//[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
//       // accept alert
//       await driver.acceptAlert()
//       // dismiss alert
//       await driver.dismissAlert()
//       // get alert text
//       console.log('Alert Text-->', await driver.getAlertText())
//       // click on the OK button
//       await $('//resource-id="android:id/button1"').click()

//       // assertion- alert box is no longer visible
//       await expect($('//[@resource-id="android:id/alertTitle"]')).not.toExist()

//     })

//     xit('Vertical scrolling', async()=>{
//     await $('~App').click()
//     await $('~Activity').click()

//     // scroll to the end(not stable if elements get moved)
//     await $('//android= new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
//     await $('~Secure Surfaces').click()

//     // scrollTextIntoView -More stable
//     await $('//android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
    
//     // assertion
//     await expect($('~Secure Dialog')).toExist()


//     })

//     xit('Horizontal Scrolling', async()=>{
//        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1")
//        // Horizontal Scrolling
//        await $('//android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
//        await $('//android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
//        await driver.pause(3000)
//     })

//     xit('Date piker scrolling',async()=>{
//         await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")
//         let date= await $('//[@resource-id="io.appium.android.apis:id/dateDisplay"]')
//         let currentDate= await date.getText()
//         await $('~change the date').click()
//         await $('//android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
//         await $('//[@text="1"]').click()
//         await $('//[@text="OK"]').click()
//         await expect(await date.getText()).not.toEqual(currentDate)
//     })


// }) 