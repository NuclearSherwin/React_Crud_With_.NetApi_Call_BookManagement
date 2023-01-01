// in this case we just use the local
// host url of our API Book Management also in my github with v-6

import axios from "axios";

// https://github.com/NuclearSherwin/Book_Management_API
const BASE_URL = "https://localhost:7052/api";

// get all books
export const getAllBooks = async (token) =>
  await axios.get(`${BASE_URL}/books`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// get a book by it's ID
export const getBookById = async (bookId, token) =>
  await axios.get(`${BASE_URL}/books/${bookId}`, {
    headers: { Authorization: `Bearer ${token}` },
  }); 

// create a new book
export const createBook = async (book, token) =>
  await axios.post(`${BASE_URL}/books/`, book, {
    headers: { Authorization: `Bearer ${token}` },
  }); 

// update a book
export const updateBook = async (bookId, book, token) =>
  await axios.put(`${BASE_URL}/books/${bookId}`, book, {
    headers: { Authorization: `Bearer ${token}` },
  });

// delete a book
export const deleteBook = async (bookId, token) =>
  axios.delete(`${BASE_URL}/books/${bookId}`, {
    headers: { Authorization: `Bearer ${token}` },
  }); 
