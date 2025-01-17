import ApiService from "../api/apiService.js";
import ApiResponse from "../models/apiResponse.js";

const service = new ApiService();

class Controller {
    constructor() {}

    createBook = async (req = request, res = response) => {
        try {
            const { code, name, author, status } = req.body;
            if (!code || !name || !author || !status) {
                return res.status(400).send(new ApiResponse(false, 'Data is missing', null));
            }
            await service.createBook({ code, name, author, status });
            res.status(200).send(new ApiResponse(true, "Book created successfully", { code, name, author, status }));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }

    borrowBook = async (req = request, res = response) => {
        try {
            const { code } = req.body;
            const data = await service.borrowBook(code);
            res.status(200).send(new ApiResponse(true, `Book borrowed:`, data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }

    returnBook = async (req = request, res = response) => {
        try {
            const { code } = req.body;
            const data = await service.returnBook(code);
            res.status(200).send(new ApiResponse(true, `Book returned:`, data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }

    getBooks = async (req = request, res = response) => {
        try {
            const data = await service.getBooks();
            res.status(200).send(new ApiResponse(true, "All books", data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }

    getBooksByStatus = async (req = request, res = response) => {
        try {
            const { status } = req.query;
            const data = await service.getBooksByStatus(status);
            res.status(200).send(new ApiResponse(true, `All books by status: '${status}'`, data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }

    deleteBook = async (req = request, res = response) => {
        try {
            const { code } = req.body;
            const data = await service.deleteBook(code);
            res.status(200).send(new ApiResponse(true, `Book '${code}' deleted successfully`, data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }

    improperBook = async (req = request, res = response) => {
        try {
            const { code } = req.body;
            const data = await service.improperBook(code);
            res.status(200).send(new ApiResponse(true, `The book '${code}' was not proper`, data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
}

export default Controller;
