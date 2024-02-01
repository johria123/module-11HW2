const router = require('express').Router(); 
const fs = require('fs');





router.get('/notes', (req, res)=>{
const saveNotes = fs.readFileSync('./db/db.json','utf-8');
console.log(saveNotes);
const notes = JSON.parse(saveNotes);
res.json(notes);
})
router.post("/notes",(req, res)=>{
    console.log(req.body);
    const saveNotes = fs.readFileSync('./db/db.json','utf-8');
    const notes = JSON.parse(saveNotes);
    notes.push(req.body)
    console.log(notes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
})


module.exports = router