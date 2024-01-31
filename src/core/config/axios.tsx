import axios from "axios";

const clientAxios = axios.create({
  baseURL: process.env.url_salesforce,
});

export default clientAxios;
