const Router = require("express").Router;

const { createBook, getBooks, getSingleBook, updateBook, deleteBook } = require("../controllers/book-controller");
/**
 * Finish the route handlers to use the controllers specified
 * and assign the right endpoints for each one
 */

// use the controller for each route
const bookController = require("../controllers/book-controller");

const BookRouter = Router();

//  GET `/books` Get all the books: `getBooks()` controller
BookRouter.get("/books", getBooks);

//  GET `/books/:bookId` Get a single book by its ID: `getSingleBook()` controller
BookRouter.get("/books/:bookId", getSingleBook);


//  POST `/books` Create a book: `createBook()` controller
BookRouter.post("/books", createBook)

//  PATCH `/books/:bookId` Update a book by its id: `updateBook()` controller
BookRouter.patch("/books/:bookId", updateBook);

//  DELETE `/books/:bookId` Delete a book by its id: `deleteBook()` controller
BookRouter.delete("/books/:bookId", deleteBook);

module.exports = BookRouter;
