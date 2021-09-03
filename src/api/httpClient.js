import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URI,
});

httpClient.defaults.headers.common["Authorization"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjMwNjc0MTQ4LCJleHAiOjE2MzA3NjA1NDh9.tlfnCVBZ9lIBzyYVpiXdTyFkcpQfYh1UrmlREk-F-94";

const setToken = (token) => {
  console.log(token);
  httpClient.defaults.headers.common["Authorization"] = token;
  console.log("token is set");
  console.log(httpClient.defaults);
};

const clearToken = () => {
  httpClient.defaults.headers.common["Authorization"] = null;
};

export { httpClient, setToken, clearToken };
