// Include React
var React = require('react');

var ReactCountdownClock = require("react-countdown-clock");


var Timer = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-lg-12" id="timer">

        <ReactCountdownClock seconds={60}
                     color="#dc9800"
                     alpha={0.9}
                     size={300} />
        </div>

      </div>
    )
  }
});

module.exports = Timer;





