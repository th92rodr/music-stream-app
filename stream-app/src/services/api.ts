import axios from 'axios';

export const apiAddress = 'http://localhost:8080/api';
export const staticFilesAddress = 'http://localhost:9090/static';

export const api = axios.create({
  baseURL: apiAddress,
});
