// Include React
var React = require('react');

var ReactCountdownClock = require("react-countdown-clock");


var Timer = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-lg-12" id="timer">

        <ReactCountdownClock seconds={5}
                     //color="#dc9800"
                     color="#8a5607"
                     alpha={0.9}
                     size={375} 
                     />

        />
        </div>

      </div>
    )
  }
});

module.exports = Timer;





