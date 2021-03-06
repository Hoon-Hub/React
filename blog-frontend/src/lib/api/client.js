import axios from "axios";

const client = axios.create();

// api url
client.defaults.baseURL = "https://external-api-server.com/";

// header
client.defaults.headers.common["Authorization"] = "Bearer a1b2c3d4";

// intercepter
axios.intercepter.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
