module.exports = {
  getUser: function() {
    return JSON.parse(localStorage.getItem("User"))
  },
  setUser: function(user) {
    localStorage.removeItem("User");
    localStorage.setItem("User", JSON.stringify(user))
  },
  isLoggedIn: function() {
    if (localStorage.getItem("User")) {
      return true;
    } else {
      return false;
    }
  },
  removeUser: function() {
    localStorage.removeItem("User");
  }
}
