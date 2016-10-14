var React = require('react');
var Api = require('../../utils/api');
var storage = require('../../utils/storage');

var Signup = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
    }
  },

  render: function(){

    return(
      <div className="container">

        <div className="col-sm-6 col-sm-offset-3">
        <h1><span className="fa fa-pencil-square-o"></span> Signup</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={(event) => this.setState({email: event.target.value})}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={(event) => this.setState({password: event.target.value})}
              type="password"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-warning btn-lg">Signup</button>
        </form>

        <p>Already have an account? <a href="/login">Login</a></p>
        <p>Or go <a href="/">Home</a>.</p>
        </div>

      </div>
    )
  },
  handleSubmit: function(event) {
    event.preventDefault();
    Api.signup(this.state.email, this.state.password).then(function(res) {
      console.log(res);
    });
    this.setState(this.getInitialState());
  }
});

module.exports = Signup;
