import fs from "fs";

export class Note{
    constructor(id,title,content,status){
        this._id = id;
        this._title = title;
        this._content = content;
        this._status = status;
    }

    get id(){
        return this._id;
    }
    get title(){
        return this._title;
    }
    get content(){
        return this._content;
    }
    get status(){
        return this._status;
    }
    set id(id){
        this._id = id;
    }
    set title(title){
        this._title = title;
    }
    set content(content){
        this._content= content;
    }
    set status(status){
        this._status = status;
    }

}

export class NoteModel{
    constructor(){
        this._name = 'db';
        this._dataDir = 'db';
        this._dataPath = 'db/db.json';
    }
    readJsonFile(){
        let contentFile = fs.readFileSync(this._dataPath, 'utf8');
        if(contentFile){
           return JSON.parse(contentFile);
        }
        return [];
    }
    writeJsonFile(data){
        let jsonData = JSON.stringify(data,null,'');
        fs.writeFileSync(this._dataPath,jsonData);
    }
    generatePk(){
        let items = this.readJsonFile();
        let lastItem = items.pop();
        if (lastItem) {
            return ++lastItem._id;
        }
        return 1;
    }
    async save(note){
    try {
        let notes = this.readJsonFile();

        note._id = this.generatePk();
        console.log(note);

        notes.push(note);
        await this.writeJsonFile(notes);
        return note._id;   //--------------------------------------------------------------
    } catch (error) {
        console.log(error);
        return 0;
    }

    }
    all(){
        return this.readJsonFile();
    }
    findById(id){
        let items = this.readJsonFile();
        return items.find(item => item._id === Number(id));
    }
    update(note){
        console.log("update");
        /*let items = this.readJsonFile();
        for (let i = 0; i < items.length; i++) {
            if (items[i]._id === Number(note.id)) {
                items[i]._title =note.title;
                items[i]._content =note.content;
                this.writeJsonFile(items);
                break;
            }
        }*/
    }
    delete(id){
        let items = this.readJsonFile();
        for (let i = 0; i < items.length; i++) {
            if (items[i]._id === Number(id)) {
                delete items[i];
                this.writeJsonFile(items);
                break;
            }
        }

    }
}