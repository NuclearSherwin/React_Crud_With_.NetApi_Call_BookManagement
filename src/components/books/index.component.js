import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks, deleteBook } from "../functions/books";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from '../redux/actions/counter';


const IndexComponent = () => {
  const [books, setBooks] = useState([]);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // for set data after done loading page once
  useEffect(() => {
    onInit();
  }, []);

  // init values
  const onInit = () => {
    getAllBooks()
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // delete book in on each row
  const onDelete = (bookId) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure to delete the row")) {
      deleteBook(bookId).then(() => {
        // reload the data
        onInit();
      });
    }
  };

  const BodyTable = () => {
    return books.map((book) => (
      // each row
      <tr key={book.id}>
        <th scope="row">{book.id}</th>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.pageNumber}</td>
        <td>{book.publishDate}</td>
        <td>
          <div className="d-flex">
            <Link to={'/edit/' + book.id}  className="btn btn-warning">Edit</Link>
            <button
              onClick={() => onDelete(book.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>Counter {counter}</h1>
          <button onClick={() => dispatch(increment(5))}>Increment</button>
          <button onClick={() => dispatch(decrement(5))}>Decrement</button>
        </div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Page number</th>
              <th scope="col">Date upload</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* call the row table from above */}
            <BodyTable />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IndexComponent;
