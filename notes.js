console.log('Starting notes...');

var addNote = (title,body) => {
  console.log('Adding notes: ', title, '\n',body);
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
