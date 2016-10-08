var React = require('react');

var Signup = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-sm-6 col-sm-offset-3">
        <h1><span class="fa fa-sign-in"></span> Signup</h1>

        <form action="/signup" method="post">
          <div className="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password" />
          </div>

          <button type="submit" class="btn btn-warning btn-lg">Signup</button>
        </form>

        <p>Already have an account? <a href="/login">Login</a></p>
        <p>Or go <a href="/">Home</a>.</p>
        </div>

      </div>
    )
  }
});

module.exports = Signup;
