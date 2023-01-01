import React from "react";

const initialState = {
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    role: -1,
    token: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGINSUCCESS":
      return { ...state, ...action.payload}
    case "LOGOUTSUCCESS":
      return { ...state, ...initialState}
    default:
      return state;
  }
};

export default userReducer;


