import axios from "axios";

export default axios.create({
  baseURL: "https://c32c-109-163-162-233.ngrok.io",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
