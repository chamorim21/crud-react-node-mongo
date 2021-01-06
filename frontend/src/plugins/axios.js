import axios from "axios";

let config = {
  baseURL: "https://backend-crud-mern.herokuapp.com/users",
};

const _axios = axios.create(config);

export default _axios;
