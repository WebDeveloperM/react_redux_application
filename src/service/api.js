import axios from "axios";
import { getItem } from "../helpers/persistence-storage";
axios.defaults.baseURL = "http://127.0.0.1:3000/api";

axios.interceptors.request.use((config) => {
  const token = getItem("Token");
  const authorization = token ? `Token ${token}` : "";
  config.headers.Authorization = authorization
  return config
});

export default axios;
