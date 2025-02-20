import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
console.log(baseURL);

const API = axios.create({ baseURL });

export { API };
