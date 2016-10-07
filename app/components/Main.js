// Include React 
var React = require('react');

var Main = React.createClass({

  // Here we render the function
  render: function(){

    return(

      <div className="container">
        <div className="row">
          <h2><strong>G-Bee</strong></h2>
          <p><em>test</em></p>
          <hr/>
          <p>
            <a href="#/Child1"><button className="btn btn-primary btn-lg">Show Child #1</button></a>
            <a href="#/Child2"><button className="btn btn-danger btn-lg">Show Child #2</button></a>
          </p>
          <p><a href="#/Log"><button className="btn btn-danger btn-lg">Log</button></a>
          </p>
          <p>
          <a href="#/Timer"><button className="btn btn-danger btn-lg">Timer</button></a>
          </p>
           <p>
          <a href="#/Graph"><button className="btn btn-danger btn-lg">Graph</button></a>
          </p>
           <p>
          <a href="#/Badges"><button className="btn btn-danger btn-lg">Badges</button></a>
          </p>
           <p>
          <a href="#/Resources"><button className="btn btn-danger btn-lg">Resources</button></a>
          </p>
           <p>
          <a href="#/Social"><button className="btn btn-danger btn-lg">Social</button></a>
          </p>
        </div>

        <div className="row">
          
          {/*This code will dump the correct Child Component*/}
          {this.props.children}

        </div>

      </div>
    )
  }
});

// Export the componen back for use in other files
module.exports = Main;