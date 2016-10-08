// Include React
var React = require('react');

var Main = React.createClass({

  // Here we render the function
  render: function(){

    return(

      <div className="container">
        <div className="row">
          <h2><strong>G-Bee</strong></h2>
          <p><em>Blood Glucose tracking app</em></p>
          <hr/>
          <a href="#/Login"><button className="btn btn-danger btn-lg">Login</button></a>

          <a href="#/Signup"><button className="btn btn-danger btn-lg">Signup</button></a>
          <a href="#/Home"><button className="btn btn-danger btn-lg">Home</button></a>
          <a href="#/Log"><button className="btn btn-danger btn-lg">Log</button></a>

          <a href="#/Timer"><button className="btn btn-danger btn-lg">Timer</button></a>

          <a href="#/Graph"><button className="btn btn-danger btn-lg">Graph</button></a>

          <a href="#/Badges"><button className="btn btn-danger btn-lg">Badges</button></a>

          <a href="#/Resources"><button className="btn btn-danger btn-lg">Resources</button></a>

          <a href="#/Social"><button className="btn btn-danger btn-lg">Social</button></a>


            
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
