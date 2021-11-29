import api from './api';

class LoginService {
  private endpoint = 'login'

  async login(user: any) {
    const { data } = await api.axios.post(`${api.baseURL}/${this.endpoint}`, user);
    return data;
  }
}

export default new LoginService();