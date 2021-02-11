import axios from 'axios';

class Service {
  constructor() {
    this.baseUrl = 'https://api.github.com/users/'
  }

  getDev = async user => {
    const url = `${this.baseUrl}${user}`;
    const response = await axios.get(url);

    return response;
  }

  getRepos = async user => {
    const url = `${this.baseUrl}${user}/repos`;
    const response = await axios.get(url);

    return response;
  }
}

export default (new Service());
