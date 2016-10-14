var axios = require('axios');
window.axios = axios;

module.exports = {
  login: function(email, password) {
    return axios.post('/login', {email: email, password: password});
  },
  logout: function() {
    return axios.get('/logout');
  },
  signup: function(email, password) {
    return axios.post('/signup', {email: email, password: password});
  }
  profile: function(email, password) {
    return axios.post('/profile', {email: email, password: password});
};
