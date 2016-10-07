// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;


//  Include the IndexRoute (catch-all route)
var IndexRoute  = Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');

var Home = require('../components/Children/Home'); 
var Log = require('../components/Children/Log'); 
var Timer = require('../components/Children/Timer'); 
var Graph = require('../components/Children/Graph'); 
var Badges = require('../components/Children/Badges'); 
var Resources = require('../components/Children/Resources'); 
var Social = require('../components/Children/Social'); 

// Export the Routes
module.exports = (

  /*High level component is the Main component*/
  <Route path='/' component={Main}>
    {/* If user selects Home then show the appropriate component*/}
    <Route path='Home' component={Home} />

    {/* If user selects Log then show the appropriate component*/}
    <Route path='Log' component={Log} />
    {/* If user selects Timer then show the appropriate component*/}
    <Route path='Timer' component={Timer} />
    {/* If user selects Graph then show the appropriate component*/}
    <Route path='Graph' component={Graph} />
    {/* If user selects Badges then show the appropriate component*/}
    <Route path='Badges' component={Badges} />
    {/* If user selects Child2 then show the appropriate component*/}
    <Route path='Resources' component={Resources} />
    {/* If user selects Child2 then show the appropriate component*/}
    <Route path='Social' component={Social} />

    {/*If user selects any other path... we get the Home Route*/}
        <IndexRoute component={Home} />
    
  </Route>


);