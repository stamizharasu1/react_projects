import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID hnuTIXkDywq1V8IBNHA7mPwJ2WDq047CP6uf6H39Gv0'
  }
});