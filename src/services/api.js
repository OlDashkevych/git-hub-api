import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/';

export default {
  getUsers: query => axios.get(`search/users?q=${query}`),
};
