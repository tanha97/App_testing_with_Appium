describe('Test',()=>{
    xit('Skip tutorial',async()=>{
      await driver.pause(3000)
      await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
    
      await expect($('//*[@text="Add note"]')).toBeDisplayed()
    })
xit('Add a note, save changes & verify note', async () => {
    // Wait for "Add note" to be displayed before clicking
    await $('//*[@text="Add note"]').click()
    await $('//*[@text="Text"]').click()
    await expect($('//*[@text="Editing"]')).toBeDisplayed()

    // add note title

    let noteTitle = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    await noteTitle.addValue("Test Title");

    // add note body
    await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    .addValue("Nahid/Tahity/Shoily")

    // save the changes
    await driver.back()
    await driver.back()

   // assertion
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
    .toBeDisplayed()
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
    .toHaveText("Nahid/Tahity/Shoily")

    

  });

})