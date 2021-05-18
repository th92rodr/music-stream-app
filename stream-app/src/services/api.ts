import axios from 'axios';

export const apiAddress = 'http://localhost:8080';
export const staticFilesAddress = 'http://localhost:9090';

export const api = axios.create({
  baseURL: `${apiAddress}/api`,
});
