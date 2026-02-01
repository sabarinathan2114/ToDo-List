import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.api_url ||
    "https://sabarinathan-todo-list.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
