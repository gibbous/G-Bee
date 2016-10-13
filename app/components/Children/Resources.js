// Include React
var React = require('react');

var Resources = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-lg-12" id="resources">
        	<h1> References:</h1>
          
          <p>
          <a href="https://www.accu-chek.com/testing-blood-sugar/when-test-your-blood-sugar/"> When to test your blood sugar -- Roche</a>
          </p>

          <p>
          <a href="http://www.diabetesselfmanagement.com/managing-diabetes/blood-glucose-management/blood-glucose-monitoring-when-to-check-and-why/">
          Blood Sugar Monitoring: When to Check and Why -- Published May 13, 2009 by Rebecca K. Abma</a>
        	</p>

        	<p>
          <a href="http://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/blood-sugar/art-20046628/">
          Blood sugar testing: Why, when and how -- Mayo Clinic</a>
        	</p>

        </div>

      </div>
    )
  }
});

module.exports = Resources;





