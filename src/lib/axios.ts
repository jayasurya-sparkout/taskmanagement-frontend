import axios from "axios";
import { config } from "process";

const api = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000",
   headers: {
    "content-type": "application/json"
   }
});

// Add Interceptors For JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
