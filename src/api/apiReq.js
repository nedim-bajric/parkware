import axios from "axios";

export default axios.create({
  baseURL: "https://048d-109-163-161-163.ngrok.io",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
