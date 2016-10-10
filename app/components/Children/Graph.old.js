// Include React
var React = require('react');
var LineChart = require("react-chartjs").Line;

var Graph = React.createClass({

  render: function(){


    return(
    <div className="container">
    
    <div className="col-lg-12">
        <div className="panel panel-danger">
            <div className="panel-heading">
                <h3 className="panel-title">Graph</h3>
            </div>
            <div className="panel-body">
               Chart goes here
            </div>
          </div>
       </div>
    
       </div>
    )
  }
});

module.exports = Graph;
