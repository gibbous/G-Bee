// Include React
var React = require('react');

var Badges = React.createClass({

  render: function(){

    return(
      <div className="container">
        <div className="col-md-offset-1 col-lg-offset-1 col-md-10 col-lg-10">
          <h3> Your total score: 1234 </h3>
          <h3> Your average BG: 120</h3>

          {/*honeycomb of badges*/}

    <div className="clip-block">
      <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay"> <i className="fa fa-diamond fa-lg" aria-hidden="true"></i> <br /> Shine On!</div>
          </a>
        <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay"> <i className="fa fa-angellist fa-lg" aria-hidden="true"></i> <br /> Groovy </div>
          </a>
    </div> 

    <div className="clip-block">
      <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay">
        <i className="fa fa-bullseye fa-lg" aria-hidden="true"></i> <br />On Target!
        </div>
      </a>  
      <a href="#" className="clip-each clip-border">
        <div className="clip-caption uh-oh">
        <i className="fa fa-life-buoy fa-lg" aria-hidden="true"></i> <br /> Low Reading
        </div>
      </a>  
        <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay">
           <i className="fa fa-flask fa-lg" aria-hidden="true"></i> <br /> Scientist!
        </div>
      </a>  
    </div> 

    <div className="clip-block">
      <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay"> 
        <i className="fa fa-fighter-jet fa-lg" aria-hidden="true"></i> <br /> Top Gun!  
         </div>
          </a>
      <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay"> 
          <i className="fa fa-fort-awesome fa-lg" aria-hidden="true"></i> <br /> Awesome!
         </div>
          </a>
    </div> 
    <div className="clip-block">
      <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay"><i className="fa fa-gift fa-lg" aria-hidden="true"></i> <br /> Gifted!
        </div>
      </a>  
      <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay">
      <i className="fa fa-star fa-lg" aria-hidden="true"></i> <br /> Star Power!
        </div>
        </a>
          <a href="#" className="clip-each clip-border">
          
        <div className="clip-caption yay"><i className="fa fa-heartbeat fa-lg" aria-hidden="true"></i> <br />Sweetheart </div>
      
      </a>  
    </div> 

    <div className="clip-block">
      <a href="#" className="clip-each clip-border">
        <div className="clip-caption yay"> <i className="fa fa-hand-spock-o fa-lg" aria-hidden="true"></i> <br /> Live Long & Prosper
         </div>
          </a>
        <a href="#" className="clip-each clip-border">
        <div className="clip-caption uh-oh"> 
          <i className="fa fa-ambulance fa-lg" aria-hidden="true"></i> <br /> High Reading (>250)
         </div>
          </a>
      
    </div> 
    <svg className="clip-svg">
      <defs>
        <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
          <polygon points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5" />
        </clipPath>
      </defs>
    </svg>  


          {/*end of honeycomb*/}
      </div>
    </div>
    )
  }
});

module.exports = Badges;





