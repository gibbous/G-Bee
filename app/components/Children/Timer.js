// Include React
var React = require('react');

var ReactCountdownClock = require("react-countdown-clock");


var Timer = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-lg-12" id="timer">

        <h2> Start the timer when you start to eat. <br /> Check your blood glucose reading when the timer ends (2 hours). </h2>
        <p>&nbsp;</p>

        <ReactCountdownClock 
                    seconds={7200} //2 hour countdown

                     //color="#dc9800"
                     color="#8a5607"
                     alpha={0.9}
                     size={375} 
                     //onComplete={myCallback}
                     />

        
        </div>

      </div>
    )
  }
});

module.exports = Timer;





