
import Factory from "../DAOS/factory.js";
import axios from "axios";

class ApiService {
    constructor() {
        this.factory = Factory.factory();
    }

    createBook = async (book) => {
        return await this.factory.booksService.createBook(book);
    }

    borrowBook = async (code) => {
        const response = await axios.get('https://libros.deno.dev/premios');
        if (response.data.premio) {
            await this.deleteBook(code);
            return 'Congratulations you have won the prize and you get to keep the book!!!';
        } else {
            return await this.factory.booksService.borrowBook(code);
        }
    }

    returnBook = async (code) => {
        return await this.factory.booksService.returnBook(code);
    }

    getBooks = async () => {
        return await this.factory.booksService.getBooks();
    }

    getBooksByStatus = async (status) => {
        return await this.factory.booksService.getBooksByStatus(status);
    }

    deleteBook = async (code) => {
        return await this.factory.booksService.deleteBook(code);
    }

    improperBook = async (code) => {
        return await this.factory.booksService.improperBook(code);
    }
}

export default ApiService;
