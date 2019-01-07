console.log('Starting notes...');
const fs = require('fs');

var addNote = (title,body) => {
  // console.log('Adding notes: ', title, '\n',body);
  var notes = [];
  var note = {
    title,
    body
  }

  try {
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  } catch (e) {

  } //finally {
//
//  }

  var duplicatesNotes = notes.filter((note) => note.title === title);
  if(duplicatesNotes.length===0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  }

};

var getAll = () => {
  console.log('Listing all notes');
};

var readNote = (title) =>{
    console.log('Reading Note:', title);
};

var deleteNote = (title) => {
  console.log('Removing Note:', title);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  deleteNote
}
