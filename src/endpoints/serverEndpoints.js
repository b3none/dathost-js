class ServerEndpoints {
  constructor(axios) {
    this.axios = axios;
  }

  async get() {
    return await this.axios.get('/account');
  }
}

export default ServerEndpoints;