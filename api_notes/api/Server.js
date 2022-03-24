import express from "express";
import noteRoute from "./notes/routes/note.route.js"

export class Server{
    constructor(hostName,port,nameApp){
        this._hostName = hostName;
        this._port = port;
        this._name = nameApp;
        this._api = express();
        this.initMiddleware();
        this.initRoutes();
    }
    initMiddleware(){
        this._api.use(express.json());
        this._api.use(express.urlencoded({extended:true}));
    }
    initRoutes(){
        this._api.use("/api/v1/note", noteRoute);
        this._api.use("/api/v1/home",(req,res)=>{
            res.json({message: "Welcome to my api"})
        });
    }
    initServer(){
        try {
            this._api.set('trust proxy', this._hostName)
            this._api.listen(this._port,()=>{
            console.log(`Server ${this._name} running on: http://${this._hostName}:${this._port}`);
        })    
        } catch (error) {
            console.log(`An error ocurred ${error}`);
        }
        
    }
}