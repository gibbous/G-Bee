// Include React
var React = require('react');

var Home = React.createClass({

  render: function(){

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-lg-offset-1 col-md-10 col-lg-10">

            <div className="media">
             
              <div className="media-body">
              
                <p className="text-muted text-left" id="home-text">Our application is G-Bee, the Blood Glucose tracking app. Our goal is to inspire diabetic patients to better track their blood glucose readings with virtual medals and data visualization. It is valuable for diabetic patients to better understand and manage their blood glucose levels to minimize diabetic complications. Our app will reward patients for logging their results and achieving glucose readings within ADA guidelines. The app will also make data available for review with a patient's healthcare team.</p>
              </div>
               <div className="media-right media-middle">
                    
                <img className="media-object" alt="Bee with Heart" src="../assets/images/beeLogo.jpg" />
               
               </div>
            </div>
            
             {/*} <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Home</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>*/}
          
         
      
           </div>
          </div>
        </div>
      
    )
  }
});

module.exports = Home;





