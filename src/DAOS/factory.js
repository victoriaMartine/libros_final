import {MODE} from "../config/config.js";
import Books from "./booksDao.js";

class Factory{
    constructor(){}
   
    static factory = ()=>{
       if(MODE === "memory"){
          return{
           booksService:new Books(),
          };     
       }
    };
   }
   export default Factory