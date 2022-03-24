import express from "express";

const routerNote = express.Router();

routerNote.get("/",(req,res)=>{
        res.json({message: "Hello from GET"})
});

routerNote.get("/:id",(req,res)=>{
    res.json({message: "Hello from GET"})
});

routerNote.post("/",(req,res)=>{
    res.json({message: "Hello from POST"})
});
routerNote.put("/:id",(req,res)=>{
    res.json({message: "Hello from PUT"})
});
routerNote.delete("/:id",(req,res)=>{
    res.json({message: "Hello from DELETE"})
});

export default routerNote;