import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://indicaai-backend.herokuapp.com/",
  headers: {
    'Access-Control-Allow-Origin': true,
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;