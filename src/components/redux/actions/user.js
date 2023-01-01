import React from "react";

export const loginSuccess = (body) => {
  return {
    type: "LOGINSUCCESS",
    payload: body,
  };
};

export const logoutSuccess = () => {
  return {
    type: "LOGOUTSUCCESS",
  };
};
