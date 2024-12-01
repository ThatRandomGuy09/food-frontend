import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signup = (userData) => api.post('signup', userData);
export const signin = (credentials) => api.post('signin', credentials);
export const getProfile = () => api.get('me');

export default api; 