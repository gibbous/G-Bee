// Include React
var React = require('react');

var Badges = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Badges</h3>
            </div>
            <div className="panel-body">
              Panel content
            </div>
          </div>
        </div>

      </div>
    )
  }
});

module.exports = Badges;





