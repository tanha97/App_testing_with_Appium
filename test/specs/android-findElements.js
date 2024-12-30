// describe('Android Element test', ()=>{
//     it('Find Elements with accessibility id',async ()=>{
//        // find element by accessibility id
//        let appOption= await $('~App')

//        // check element
//        await appOption.click()

//        //assertion
//        let actionBar= await $('~Action Bar')
//        await expect(actionBar).toBeExisting();

//     })

//     it('Find Element by  Class Name', async()=>{

//        let className= await $('android.widget.TextView') 
//        await expect(className).toHaveText('Api Demos')

//     })

//     xit('Find Elements by Xpath', async()=>{
//     // Xpath-(//tagname[@attribute=value])
//        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
//     // find element by resource id
//        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click
//     // find element by text
//        await $('//android.widget.TextView[@text="Command two"]').click()
//     //find element by class
//        let textAssertion= await $('android.widget.TextView')
//        await expect(textAssertion).toHaveText("You selected: 1 , Command two")
 
//     })

//     xit('Find Element by Ui Automator', async()=>{

//         // find element by text
//         await $('android=new UiSelector().textContains("Alert")').click()
//     })
    

//     xit('Find Multiple elements', async()=>{
//         let expectedList=['API Demos',"Access'ibility",'Accessibility',
//             'Animation','App','Content','Graphics','Media','NFC',
//             'OS','Preference','Text','Views']
//         let actualList=[]
//     // find multiple elements
//     let textList= await $('android.widget.TextView')
//     // loop through them
//     for(let element of textList){
//         actualList.push(await element.getText())
//     }
//     // Assert the list
//     await expect(actualList).toEqual(expectedList)
//     })


//     it('Working with Text Field', async()=>{
//    // Access auto complete screen
//       await $('~Views').click()
//       await $('~Auto Complete').click()
//       await $('//[@text="Auto Complete"]').click()
//       // enter the country name
//       let autoCompleteField= await $('android=new UiSelector().resourceId("io.appium.android.apis:id/edit")')
//       await autoCompleteField.addValue('Canada')
//       // verify the country name
//       await expect(autoCompleteField).toHaveText('Canada')
//     })
// })