import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/bootcampday2-8f18b/us-central1/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
