// Include React
var React = require('react');

var Social = React.createClass({

  render: function(){

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-lg-offset-1 col-md-10 col-lg-10">

            <div className="media">
             
              <div className="media-body">
              
                <p className="text-muted text-left" id="home-text">For future development, we'd like to allow users to opt-in to leaderboards to compete and compare with other users for motivation. </p>
              </div>
              <div className="media-right media-middle">
                  
              <img className="media-object" alt="Bee with Heart" src="../assets/images/beeReward.jpg" width="190" />
               
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
});

module.exports = Social;





