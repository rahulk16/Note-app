console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// var command = process.argv[2];
// console.log('Command:',command);
// console.log('Process',process.argv);

var argv = yargs.argv;
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
  notes.getAll();
}else if (command === 'read') {
  notes.readNote(argv.title);
}else if (command === 'delete') {
  var noteRemoved = notes.deleteNote(argv.title);
  var message = noteRemoved ? "Note is removed." : "Note is not removed!!";
  console.log(message);
}
else {
  console.log('Command not recognized!!!');
}
