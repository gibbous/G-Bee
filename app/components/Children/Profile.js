var React = require('react');

var Profile = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="page-header text-center">
          <h1><span className="fa fa-sign-in"></span>Profile Page</h1>
          <a href="/logout" className="btn btn-default btn-sm">Logout</a>
        </div>

        <div className="row">

        <p>
          <strong>id</strong>: user._id,
          <strong>email</strong>: user.local.username,
          <strong>password</strong>: user.local.password
        </p>


        </div>
      </div>
    )
  }
});

module.exports = Profile;
