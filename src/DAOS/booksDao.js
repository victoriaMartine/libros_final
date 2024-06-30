
import { readFile } from '../utils/editFile.js'
import { writeFile } from '../utils/editFile.js'
const archive = 'data.json'

class Books{
    constructor(){}
    createBook =  async(book)=>{
        try {
            const books = await readFile(archive)
            books.push(book)
            await writeFile(archive, books);
            console.log('Book created succesfully!!')
            
        } catch (error) {
            console.log(error)
        }
        
    }

    borrowBook = async (code)=>{
        const books = await readFile(archive)
        const book = books.find( book=>book.code === code)
        if(book){
            if(book.status === "disponible"){
                book.status = "alquilado"
                await writeFile(archive, books);
                return book;
            }else{
                throw new Error("The book is already rented")
            }
        }else{
            throw new Error("The book does not exist")
        }
        
        
    }
    returnBook = async (code)=>{
        const books = await readFile(archive)
        const book = books.find( book=>book.code === code)
        if(book){
            if(book.status === "alquilado"){
                book.status = "disponible"
                await writeFile(archive, books);
                return book;
            }else{
                throw new Error("The book was already returned")
            }
        }else{
            throw new Error("The book does not exist")
        }
        
        
    }

    getBooks = async()=>{
        const books = await readFile(archive)
        return books ;
    }

    getBooksByStatus= async (status)=>{
    const books = await readFile(archive)
    const booksByStatus = books.filter((book)=>book.status === status)
    return booksByStatus;
  }

  deleteBook = async(code)=>{
    let books = await readFile(archive)
    const deletedBook = books.find((book) =>book.code === code)
    if(deletedBook){
        books.filter((book) =>book.code !== code )
        await writeFile(archive, books)
        return deletedBook ;
    }else{
        throw new Error("Book not found")
    } 
}
improperBook = async (code) =>{
    let books = await readFile(archive);
    const improperBook = books.find(book => book.code === code);
    if (improperBook) {
        improperBook.status = "no-apto";
        await this.escribirArchivo(archive, books);
        return improperBook;
    } else {
        throw new Error("The book does not exist");
    }
}
}
export default Books;