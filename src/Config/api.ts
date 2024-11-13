import axios from "axios";


const api = axios.create({
  baseURL: "https://192.168.4.101:8037",
});

// const api = axios.create({
//   baseURL: "http://192.168.4.101:8036",
//   headers: HeadersItem,
// });

export default api;