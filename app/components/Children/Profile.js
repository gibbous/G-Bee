var React = require('react');

var Profile = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="page-header text-center">
          <h1><span class="fa fa-sign-in"></span>Profile Page</h1>
          <a href="/logout" className="btn btn-default btn-sm">Logout</a>
        </div>

        <div className="row">

          //Local Information



        </div>
      </div>
    )
  }
});

module.exports = Profile;
