import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://ty-shop.herokuapp.com",
});

export default HTTP;
