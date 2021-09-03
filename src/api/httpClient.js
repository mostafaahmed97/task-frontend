import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URI,
});

const setToken = (token) => {
  httpClient.defaults.headers.common["Authorization"] = token;
};

const clearToken = () => {
  httpClient.defaults.headers.common["Authorization"] = null;
};

export { httpClient, setToken, clearToken };
