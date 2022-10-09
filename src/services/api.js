import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const request = axios.create({
  baseURL: BASE_URL
});

export { request };
