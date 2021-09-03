import { httpClient } from "./httpClient";

const getAvailableProducts = () => {
  return new Promise((resolve, reject) => {
    httpClient
      .get("/products")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

const getContents = () => {
  return new Promise((resolve, reject) => {
    httpClient
      .get("/cart")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

const clear = () => {
  return new Promise((resolve, reject) => {
    httpClient
      .delete("/cart/clear")
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const add = (productId) => {
  return new Promise((resolve, reject) => {
    httpClient
      .post("/cart", {
        productId,
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const remove = (itemId) => {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(`/cart/${itemId}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

const update = (itemId, quantity) => {
  return new Promise((resolve, reject) => {
    httpClient
      .patch(`/cart/${itemId}`, {
        quantity,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

export default {
  getAvailableProducts,
  getContents,
  clear,
  add,
  remove,
  update,
};
