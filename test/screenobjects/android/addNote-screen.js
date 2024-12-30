class AddNoteScreen{

get skipBtn(){
    return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
}
get addNoteTxt(){
    return $('//*[@text="Add note"]')
}
get text(){
    return $('//*[@text="Text"]')
}
get editingText(){
    return $('//*[@text="Editing"]')
}
get TitleNote(){
    return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
}
get NoteBody(){
    return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
}
async SaveNote(){
    await driver.back()
    await driver.back()
}
get EditBtn(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
}
get ViewNote(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
}
  

}
module.exports= new AddNoteScreen()