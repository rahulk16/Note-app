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
console.log('Yargs:',argv);

console.log('Command: ', command);

if(command === 'add'){
  notes.addNote(argv.title, argv.body);
}else if (command === 'list') {
  notes.getAll();
}else if (command === 'read') {
  notes.readNote(argv.title);
}else if (command === 'delete') {
  notes.deleteNote(argv.title);
}
else {
  console.log('Command not recognized!!!');
}
