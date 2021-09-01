import { httpClient } from "./httpClient";

const postLogin = (email, password) => {
  console.log("hitting the endpoint");
  return new Promise((resolve, reject) => {
    httpClient
      .post("/auth/login", {
        email,
        password,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

export default { postLogin };
