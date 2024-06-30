
import { readFile, writeFile } from '../utils/editFile.js';
const archive = 'data.json';

class Books {
    constructor() {}

    createBook = async (book) => {
        const books = await readFile(archive);
        books.push(book);
        await writeFile(archive, books);
        console.log('Book created successfully!!');
    }

    borrowBook = async (code) => {
        const books = await readFile(archive);
        const book = books.find(book => book.code === code);
        if (book) {
            if (book.status === "disponible") {
                book.status = "alquilado";
                await writeFile(archive, books);
                return book;
            } else {
                throw new Error("The book is already rented");
            }
        } else {
            throw new Error("The book does not exist");
        }
    }

    returnBook = async (code) => {
        const books = await readFile(archive);
        const book = books.find(book => book.code === code);
        if (book) {
            if (book.status === "alquilado") {
                book.status = "disponible";
                await writeFile(archive, books);
                return book;
            } else {
                throw new Error("The book was already returned");
            }
        } else {
            throw new Error("The book does not exist");
        }
    }

    getBooks = async () => {
        return await readFile(archive);
    }

    getBooksByStatus = async (status) => {
        const books = await readFile(archive);
        const booksByStatus = books.filter(book => book.status === status);
        if(booksByStatus.length > 0){
            return booksByStatus;
        }
       else{
        throw new Error("invalid status")
       }

    }

    deleteBook = async (code) => {
        const books = await readFile(archive);
        const index = books.findIndex(book => book.code === code);
        if (index !== -1) {
            const [deletedBook] = books.splice(index, 1);
            await writeFile(archive, books);
            return deletedBook;
        } else {
            throw new Error("Book not found");
        }
    }

    improperBook = async (code) => {
        const books = await readFile(archive);
        const book = books.find(book => book.code === code);
        if (book) {
            book.status = "no-apto";
            await writeFile(archive, books);
            return book;
        } else {
            throw new Error("The book does not exist");
        }
    }
}

export default Books;
