// console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// var command = process.argv[2];
// console.log('Command:',command);
// console.log('Process',process.argv);

const titleOptions = {
  describe : 'Title of Note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of Note',
  demand: true,
  alias: 'b'
}

var argv = yargs
.command('add','Add a new Note',{
  title:titleOptions,
  body:bodyOptions
})
.command('list','Print all Notes')
.command('read','Read a Note',{
  title:titleOptions
})
.command('delete','Delete a Note',{
  title:titleOptions
})
.help()
.argv;
var command = argv._[0];
// console.log('Yargs:',argv);

console.log('Command: ', command);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note!=undefined){
    console.log('title:',note.title,'body:',note.body,"\nNote created!");
  }
  else {
    console.log("Note is not created!\nMay be Duplication error or title taken.");
  }
}else if (command === 'list') {
  var noteList = notes.getAll();
  noteList.forEach((note) => console.log('title:',note.title,' | ','body:',note.body,'\n------'));
}else if (command === 'read') {
  var note = notes.readNote(argv.title);
  if(note){
    console.log('Note found\n----','title:',note.title,'\n','body:',note.body);
  }else {
    console.log('Note not found!');
  }
}else if (command === 'delete') {
  var noteRemoved = notes.deleteNote(argv.title);
  var message = noteRemoved ? "Note is removed now." : "Note is not removed!!";
  console.log(message);
}
else {
  console.log('Command not recognized!!!');
}
