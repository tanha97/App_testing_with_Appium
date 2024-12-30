const AddNoteScreen=require('../../screenobjects/android/addNote-screen')

describe('Test',()=>{
    it('Skip tutorial',async()=>{
      await driver.pause(3000)
      await AddNoteScreen.skipBtn.click()
      await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    })

    it('Add a note, save changes & verify note', async () => {
    await AddNoteScreen.addNoteTxt.click()
    await AddNoteScreen.text.click()
    await expect(AddNoteScreen.editingText).toBeDisplayed()
    let noteTitle = AddNoteScreen.TitleNote
    await noteTitle.addValue("Test Title");
    await AddNoteScreen.NoteBody.addValue("Nahid/Tahity/Shoily")
    await AddNoteScreen.SaveNote()
    await expect(AddNoteScreen.EditBtn).toBeDisplayed()
    await expect(AddNoteScreen.ViewNote).toHaveText("Nahid/Tahity/Shoily")

  });

})