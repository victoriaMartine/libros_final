import Factory from "../DAOS/factory.js";
import axios from "axios";

class ApiService{
    constructor(){
        this.factory = Factory.factory();
    }
    
    createBook = async(book)=>{
        try {
            const data = await this.factory.booksService.createBook(book)
            return data
        } catch (error) {
            return error
        }
    }
    borrowBook = async(code)=>{
        try {
            const response = await axios.get('https://libros.deno.dev/premios');
            let rentedBook;
            if(response.data.premio){
                this.deleteBook(code)
                return 'Congratulations you ve won the prize and you get to keep the book!!!'
            }else{
                 rentedBook = await this.factory.booksService.borrowBook(code)
            return rentedBook;
            }
            
        } catch (error) {
            return error
        }
    }
    returnBook = async(code)=>{
        try {
            const data = await this.factory.booksService.returnBook(code)
            return data
        } catch (error) {
            return error
        }
    }

    getBooks = async()=>{
        try {
            const data = await this.factory.booksService.getBooks()
            return data
        } catch (error) {
            return error
        }
    }

    getBooksByStatus = async(status)=>{
        try {
            const data = await this.factory.booksService.getBooksByStatus(status)
            return data
        } catch (error) {
            return error
        }
    }
    deleteBook = async(code)=>{
        
            const data = await this.factory.booksService.deleteBook(code)
            return data
    }
    improperBook = async(code)=>{
        
        const data = await this.factory.booksService.improperBook(code)
        return data
}
    }
    export default ApiService