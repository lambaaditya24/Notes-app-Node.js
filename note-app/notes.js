const fs = require('fs');
const chalk = require('chalk');
const getNotes = ()=>{
    return "Your notes..."
}

const addNotes = (title,body)=>{
    const notes = loadNotes()
    const dupplicateNotes = notes.filter(
        (note)=>{
            return note.title ===title
        })
    // debugger;
    if(dupplicateNotes.length ===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green("New note added"));
        
    } else{
        console.log(chalk.red('Note title taken'));   
    }  
}

const removeNotes =(title)=>{
    const notes = loadNotes()
    const dupplicateNotes = notes.filter(
        (note)=>{
            return note.title === title
        }
    )
    if(dupplicateNotes.length===0){
        console.log(chalk.red.inverse('NO Note Removed'));
    }else{
        for(let i=0;i<notes.length;i++){
            if(notes[i].title===title){
                notes.splice(i,1)
            }
        }
    console.log(chalk.green.inverse("Note removed"));

    }
    saveNotes(notes);
    
}

const readNotes = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(!note){
        console.log(chalk.red("No Such note found"));
    }else{
    console.log("Title: "+chalk.green(note.title)+" Body: "+chalk.yellow(note.body));
}}
const listNotes = ()=>{
    const notes = loadNotes()
    return notes.forEach((note)=>{console.log(chalk.green("Title: "+note.title)+chalk.yellow(" Body: "+note.body))
    });
   }

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const databuffer = fs.readFileSync('notes.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON)
    }catch (e) {
        return []
    }
    
}



module.exports = {
    getNotes: getNotes,
    addNote: addNotes,
    removeNote: removeNotes,
    listNote:listNotes,
    readNote:readNotes
}