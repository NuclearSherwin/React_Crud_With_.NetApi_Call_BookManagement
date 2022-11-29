// in this case we just use the local
// host url of our API Book Management also in my github with v-6

import axios from "axios";

// https://github.com/NuclearSherwin/Book_Management_API
const BASE_URL = "https://localhost:7052/api";

// get all books
export const getAllBooks = async () => await axios.get(`${BASE_URL}/books`);

// get a book by it's ID
export const getBookById = async (bookId) => 
    await axios.get(`${BASE_URL}/books/${bookId}`)
 
// create a new book
export const createBook = async (book) => {
  await axios.post(`${BASE_URL}/books/`, book);
};

// update a book
export const updateBook = async (bookId, book) => {
  await axios.put(`${BASE_URL}/books/${bookId}`, book);
};

// delete a book
export const deleteBook = async (bookId) => 
  await axios.delete(`${BASE_URL}/books/${bookId}`);
