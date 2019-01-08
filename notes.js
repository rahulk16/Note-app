// console.log('Starting notes...');
const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
  // console.log('Adding notes: ', title, '\n',body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  }

  var duplicatesNotes = notes.filter((note) => note.title === title);
  if(duplicatesNotes.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  // console.log('Listing all notes');
  return fetchNotes();
};

var readNote = (title) =>{
    // console.log('Reading Note:', title);

    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var deleteNote = (title) => {
  // console.log('Removing Note:', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title!=title);
  saveNotes(filteredNotes);

  return notes.length!=filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  readNote,
  deleteNote
}
