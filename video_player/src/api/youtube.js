import axios from 'axios';

const KEY = 'AIzaSyC0vSVDETRlLzYSld_lGeqhuYANkYpBAiQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
