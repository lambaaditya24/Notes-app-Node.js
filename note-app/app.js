const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

//creating add command
yargs.command({
    'command':"add",
    'describe':"Adding a note",
    builder:{
            title:{
                describe:"Note Title",
                demandOption:true,
                type:'string'
            },
            body:{
                describe:"content",
                demandOption:true,
                type:'string'
            }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//creating delete command
yargs.command({
    'command':"remove",
    'describe':"Removing a note",
    builder:{
        title:{
            describe:"Remove title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//creating listing of notes
yargs.command({
    'command':"list",
    'describe':"Listing of notes",
    handler(){
    notes.listNote()        
    }
})
//Reading a note
yargs.command({
    command:"read",
    describe:"Reading a note",
    builder:{
        title:{
            describe:'reading note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();
