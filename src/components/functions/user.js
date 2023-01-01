import axios from "axios";

// https://github.com/NuclearSherwin/Book_Management_API
const BASE_URL = "https://localhost:7052/api";

export const login = async (body) =>
  await axios.post(`${BASE_URL}/Users/authenticate/`, body);