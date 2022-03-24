import {Note,NoteModel} from '../models/notes.models.js';
const noteModel = new NoteModel();
//const note = new Note();
export class NoteController{
    constructor(){}
    //Metodo para responder la ruta obtener todas las notas
    getAllNotes(req,res){
      let allNotes = noteModel.all();
      res.json(allNotes);
    }
    //crear nueva nota
    async createNewNote(req,res){
      let {title,content,status} = req.body;
      const newNote = new Note(title,content,status);
      let result = await noteModel.save(newNote);
      if (result > 0) {
          return res.json({message : `Created a new note`})
      }
      return res.json({message : "An error ocurred"});
    }
    //obtener notas por id
    async getById(req,res){
        var id = req.params.id;
        let noteByID = noteModel.findById(id);
        res.json(noteByID);
      }
}
