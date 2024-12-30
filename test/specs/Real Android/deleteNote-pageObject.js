const EditNoteScreen = require("../../screenobjects/android/editNote-screen")

describe('Test',()=>{
    
    it('Delete a note & check the note in trash can', async()=>{

      await EditNoteScreen.skipTutorial()
      await EditNoteScreen.addAndSaveNote("Fav shows","Doremon, pokemon")
      await driver.back()
      let note= await EditNoteScreen.firstNote.getText()
      await EditNoteScreen.firstNote.click()
      await EditNoteScreen.moreIcon.click()
      await EditNoteScreen.delete.click()
      await driver.acceptAlert()
      await EditNoteScreen.navIcon.click()
      await EditNoteScreen.trash.click()
      let trashCanItem= await EditNoteScreen.firstNote
      await expect(trashCanItem).toHaveText(note)
})

})