import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../components/functions/user";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./redux/actions/user";

const initialLoginInfo = {
  username: "",
  password: "",
};

const LoginComponent = () => {
  const [userState, setUserState] = useState(initialLoginInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  // onsubmit to handle
  const onSubmit = (e) => {
    e.preventDefault();

    login(userState)
      .then((res) => {
        // 1. set values to redux
        dispatch(loginSuccess(res.data));

        // navigate to home
        navigate("/");
      })
      .catch((err) => console.log(err));

    setUserState(initialLoginInfo);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={userState.username}
            onChange={(e) => onChange(e)}
            className="form-control"
          ></input>
          {/* {error.name && (
              <small className="form-text text-danger">{error.name}</small>
            )} */}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="text"
            value={userState.password}
            onChange={(e) => onChange(e)}
            className="form-control"
          ></input>
          {/* {error.name && (
              <small className="form-text text-danger">{error.name}</small>
            )} */}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
