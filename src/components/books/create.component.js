import React, { useEffect, useState } from "react";
import { createBook } from "../functions/books";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import { useSelector } from "react-redux";

// components

const initValue = {
  name: "",
  author: "",
  pageNumber: "",
  publishDate: new Date(),
};

const initError = {
  name: "",
  author: "",
  pageNumber: "",
  publishDate: "",
};

const CreateComponent = () => {
  const [book, setBook] = useState(initValue);
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(initError);
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const counter = useSelector((state) => state.counter);

  useEffect(() => {
    console.log(book);
  }, [book]);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    // display error if there is not any character
    if (e.target.name === "name")
      error.name = e.target.value.length === 0 ? "Name is required!" : "";
    if (e.target.name === "author")
      error.author = e.target.value.length === 0 ? "Author is required!" : "";
    if (e.target.name === "pageNumber")
      error.pageNumber =
        e.target.value.length === 0 ? "Page number is required!" : "";
    if (e.target.name === "publishDate")
      error.publishDate =
        e.target.value.length === 0 ? "Publish date is required!" : "";

    setError({ ...error });
  };

  // onsubmit to handle
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      book.publishDate = date;
      createBook(book, user.token)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }

    setBook(initValue);
  };

  // display error on input
  const validateInput = () => {
    let validate = true;
    error.name = book.name.length === 0 ? "Name is required!" : "";
    error.author = book.author.length === 0 ? "Author is required!" : "";
    error.pageNumber =
      book.pageNumber.length === 0 ? "Page number is required!" : "";
    error.publishDate =
      book.publishDate.length === 0
        ? "publish date is required!"
        : // set all error to error of use state
          setError({ ...error });
    // import validate
    validate = Object.values(error).every((x) => x === "");

    return validate;
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>Counter {counter}</h1>
        </div>
        <h2>Add New Book</h2>
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
              <small className="form-text text-danger">
                {error.pageNumber}
              </small>
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
              <small className="form-text text-danger">
                {error.publishDate}
              </small>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateComponent;
