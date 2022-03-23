import express from "express";

const routeNote = express.Router();

routeNote.get("/",(req,res)=>{
        res.json({message: "Hello from GET"})
});

routeNote.get("/:id",(req,res)=>{
    res.json({message: "Hello from GET"})
});

routeNote.post("/",(req,res)=>{
    res.json({message: "Hello from POST"})
});
routeNote.put("/",(req,res)=>{
    res.json({message: "Hello from PUT"})
});
routeNote.delete("/",(req,res)=>{
    res.json({message: "Hello from DELETE"})
});

//export routeNote