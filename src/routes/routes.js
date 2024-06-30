import { Router } from 'express';
import Controller from '../controllers/booksController.js';

const booksRouter = Router()
const controller = new Controller();

booksRouter.post('/', controller.createBook)
booksRouter.post('/borrow', controller.borrowBook)
booksRouter.post('/return', controller.returnBook)
booksRouter.post('/improper', controller.improperBook)
booksRouter.get('/', controller.getBooks)
booksRouter.get('/getByStatus', controller.getBooksByStatus)
booksRouter.delete('/', controller.deleteBook)


export default booksRouter;
