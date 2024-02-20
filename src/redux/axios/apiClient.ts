import axios from 'axios';
import { cookies } from 'next/headers';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

apiClient.interceptors.response.use(null, (error) => {
  if (error.response && error.response.status ===  401) {
    const refresh = sessionStorage.getItem('refresh')
  }
  return Promise.reject(error);
});

export default apiClient;