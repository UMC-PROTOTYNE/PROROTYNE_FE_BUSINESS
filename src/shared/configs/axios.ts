import axios from "axios";
//import axios, { AxiosResponse } from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const FORMAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const storageAccessKey = "JWT_REFRESH";

//Auth
export const storeAccess = (token: string) => {
  localStorage.setItem(storageAccessKey, token);
};

export const setAccess = (token: string) => {
  API.defaults.headers["memberId"] = `Bearer ${token}`;
  FORMAPI.defaults.headers["memberId"] = `Bearer ${token}`;
};

export const resetAccess = () => {
  delete API.defaults.headers["Authorization"];
  localStorage.removeItem(storageAccessKey);
};

export const getAccess = (): string | null => {
  return localStorage.getItem(storageAccessKey);
};
