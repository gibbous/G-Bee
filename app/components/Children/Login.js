var React = require('react');
var Api = require('../../utils/api');
var storage = require('../../utils/storage');
import { browserHistory } from 'react-router';

var Login = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },
  render: function(){
    return(
      <div className="container">
      {this.renderLoginStatus()}
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-sign-in"></span> Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={this.state.email}
                onChange={(event) => this.setState({email: event.target.value})}
                />
            </div>
            <div className="form-group">
        			<label>Password</label>
        			<input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={(event) => this.setState({password: event.target.value})}
                />
        		</div>

            <button type="submit" className="btn btn-warning btn-lg">Login</button>
          </form>

          <p>Need an account? <a href="/signup">Signup</a></p>
          <p>Or go <a href="/">Home</a>.</p>
        </div>
      </div>
    )
  },
  handleSubmit: function(event) {
    event.preventDefault();
    if (!this.state.email.trim() || !this.state.password.trim()) {
      return;
    }
    var self = this;
    Api.login(this.state.email, this.state.password).then(function(response) {
      if (response.data._id){
        storage.setUser(response.data);
        self.handleUserLogin();
      }
    }).catch(function(err) {
      console.log(err)
    })
  },
  renderLoginStatus: function() {
    if (storage.isLoggedIn()) {
      return (
        <h1>User is logged in</h1>
      )
    } else {
      return (
        <h1>User isn't logged in</h1>
      )
    }
  },
  handleUserLogin: function() {
    browserHistory.push('/profile');
  }
});

module.exports = Login;
