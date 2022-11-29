import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../functions/books";

const initValue = {
  name: "",
  author: "",
  pageNumber: 0,
  publishDate: new Date(),
};

const initError = {
  name: "",
  author: "",
  pageNumber: "",
  publishDate: "",
};

const EditComponent = () => {
  const [book, setBook] = useState(initValue);
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(initError);
  const params = useParams();
  const navigate = useNavigate();
  const bookId = params.id;

  useEffect(() => {
    getBookById(bookId)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });

    if (e.target.value.name === "name")
      error.name = e.target.value.length === 0 ? "Name is required!" : "";

    if (e.target.value.name === "author")
      error.author = e.target.value.length === 0 ? "Author is required!" : "";

    if (e.target.value.name === "pageNumber")
      error.pageNumber =
        e.target.value.length === 0 ? "Page number is required!" : "";

    if (e.target.value.name === "publishDate")
      error.publishDate =
        e.target.value.length === 0 ? "Publish date is required!" : "";

    setError({ ...error });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateInput) {
      book.publishDate = date;
      updateBook(bookId, book)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const validateInput = () => {
    let validate = true;
    error.name = book.name.length === 0 ? "Name is required!" : "";
    error.author = book.author.length === 0 ? "Author is required!" : "";
    error.pageNumber =
      book.pageNumber.length === 0 ? "Page number is required!" : "";
    error.publishDate =
      book.publishDate === 0
        ? "Publish date is required!"
        : setError({ ...error });
    validate = Object.values(error).every((o) => o === "");

    return validate;
  };

  return (
    <div className="container">
      <h2>Add Edit Book</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={book.name}
            onChange={(e) => onChange(e)}
            className="form-control"
          ></input>
          {error.name && (
            <small className="form-text text-danger">{error.name}</small>
          )}
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            name="author"
            type="text"
            value={book.author}
            onChange={(e) => onChange(e)}
            className="form-control"
          ></input>
          {error.author && (
            <small className="form-text text-danger">{error.author}</small>
          )}
        </div>
        <div className="form-group">
          <label>Page Number</label>
          <input
            name="pageNumber"
            type="text"
            value={book.pageNumber}
            onChange={(e) => onChange(e)}
            className="form-control"
          ></input>
          {error.pageNumber && (
            <small className="form-text text-danger">{error.pageNumber}</small>
          )}
        </div>
        <div className="form-group">
          <label>Publish Day</label>
          <DateTimePicker
            onChange={setDate}
            value={date}
            className="form-control"
          />
          {error.publishDate && (
            <small className="form-text text-danger">{error.publishDate}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditComponent;
