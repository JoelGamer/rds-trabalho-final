import axios from "axios";

class APIService {
  axios = axios.create();

  get baseURL() {
    const ip = localStorage.getItem('rds-server-ip');
    const port = localStorage.getItem('rds-server-port');

    return `http://${ip}:${port}`;
  }
}

export default new APIService();