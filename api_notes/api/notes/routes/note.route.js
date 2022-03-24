import express from "express";
import {NoteController} from "../controller/note.ctl.js"

const routerNote = express.Router();
const noteController = new NoteController();

routerNote.get("/",noteController.getAllNotes);

routerNote.get("/:id",noteController.getById);

routerNote.post("/",noteController.createNewNote);

routerNote.put("/:id",(req,res)=>{
    res.json({message: "Hello from PUT"})
});

routerNote.delete("/:id",(req,res)=>{
    res.json({message: "Hello from DELETE"})
});

export default routerNote;