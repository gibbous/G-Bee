// Include React
var React = require('react');

var Main = React.createClass({

  // Here we render the function
  render: function(){

    return(

      <div className="container">
        <div className="row">
          <h1 className="main-text"><strong>G-Bee</strong></h1>
          <p className="second-text"><em>Blood Glucose tracking app</em></p>
          <hr/>
          <a href="#/Login"><button className="btn mainBTN btn-lg"><i className="fa fa-power-off fa-lg" aria-hidden="true"></i>Login</button></a>

          <a href="#/Signup"><button className="btn mainBTN btn-lg"><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>Signup</button></a>
          <a href="#/Home"><button className="btn mainBTN btn-lg"><i className="fa fa-home fa-lg" aria-hidden="true"></i>Home</button></a>
          <a href="#/Log"><button className="btn mainBTN btn-lg"><i className="fa fa-book fa-lg" aria-hidden="true"></i>Log</button></a>

          <a href="#/Timer"><button className="btn mainBTN btn-lg"><i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>Timer</button></a>

          <a href="#/Graph"><button className="btn mainBTN btn-lg"><i className="fa fa-area-chart fa-lg" aria-hidden="true"></i>Graph</button></a>

          <a href="#/Badges"><button className="btn mainBTN btn-lg"><i className="fa fa-trophy fa-lg" aria-hidden="true"></i>Badges</button></a>

          <a href="#/Resources"><button className="btn mainBTN btn-lg"><i className="fa fa-folder-open fa-lg" aria-hidden="true"></i>Resources</button></a>

          <a href="#/Social"><button className="btn mainBTN btn-lg"><i className="fa fa-comments fa-lg" aria-hidden="true"></i>Social</button></a>


            
        </div>

        <div className="row">

          {/*This code will dump the correct Child Component*/}
          {this.props.children}

        </div>

      {/*Footer goes here*/}
      <footer>
        <div id="footer">
        <p className="text-muted">&copy;2016 GeeBee Project Group &nbsp;&nbsp;
        <a href="https://github.com/gibbous/G-Bee" className="invertocat">
        <img alt="The GitHub Logo" src="../assets/images/github.png" width="24" height="24"/>
    </a>
    </p>
  </div>
      </footer>
      </div>

    )
  }
});

// Export the component back for use in other files
module.exports = Main;
