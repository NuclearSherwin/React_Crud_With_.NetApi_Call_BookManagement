import React, { useEffect, useState } from "react";
import { createBook } from "../functions/books";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";

// components

const initValue = {
  name: "",
  author: "",
  pageNumber: "",
  publishDate: new Date(),
};

const CreateComponent = () => {
  const [book, setBook] = useState(initValue);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // onsubmit to handle
  const onSubmit = (e) => {
    e.preventDefault();
    book.publishDate = date;
    createBook(book)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));

    setBook(initValue);
  };

  return (
    <>
      <div className="container">
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
          </div>
          <div className="form-group">
            <label>Publish Day</label>
            <DateTimePicker
              onChange={setDate}
              value={date}
              className="form-control"
            />
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
