import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/workouts/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'getall');
  }

  getUserBoard() {
    return axios.get(API_URL + 'getone', { headers: authHeader() });
  }

  getModeratorBoard(data) {
    return axios.post(API_URL + 'create', data , { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.put(API_URL + 'update', { headers: authHeader() });
  }
}

export default new UserService();