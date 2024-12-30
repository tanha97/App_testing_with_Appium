const AddNoteScreen=require('./addNote-screen')
 
class EditNoteScreen{
    get firstNote(){
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    get moreIcon(){
        return $('~More')
    }
    get delete(){
        return $('//*[@text="Delete"]')
    }
    get navIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }
    get trash(){
        return $('//*[@text="Trash Can"]')  
    } 
    get fbText(){
        return $('//*[@text="Like us on Facebook"]')
    }
async skipTutorial(){
      await AddNoteScreen.skipBtn.click()
      await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()

}

async addAndSaveNote(noteHeading, noteBody){
    await AddNoteScreen.addNoteTxt.click()
    await AddNoteScreen.text.click()
    await expect(AddNoteScreen.editingText).toBeDisplayed()
    let noteTitle = AddNoteScreen.TitleNote
    await noteTitle.addValue(noteHeading);
    await AddNoteScreen.NoteBody.addValue(noteBody)
    await AddNoteScreen.SaveNote()
    await expect(AddNoteScreen.EditBtn).toBeDisplayed()
    await expect(AddNoteScreen.ViewNote).toHaveText(noteBody)
}

}
module.exports= new EditNoteScreen()