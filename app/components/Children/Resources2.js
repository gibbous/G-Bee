// Include React
var React = require('react');

var Resources = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-md-offset-1 col-lg-offset-1 col-md-10 col-lg-10" id="resources">
          
          <p>
          <a href="https://www.accu-chek.com/testing-blood-sugar/when-test-your-blood-sugar/" target="_blank">
          <i className="fa fa-tint fa-lg" aria-hidden="true"></i> When to test your blood sugar -- Roche</a>
          </p>

          <p>
          <a href="http://www.diabetesselfmanagement.com/managing-diabetes/blood-glucose-management/blood-glucose-monitoring-when-to-check-and-why/" target="_blank">
          <i className="fa fa-tint fa-lg" aria-hidden="true"></i> Blood Sugar Monitoring: When to Check and Why -- Published May 13, 2009 by Rebecca K. Abma</a>
          </p>

          <p>
          <a href="http://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/blood-sugar/art-20046628/" target="_blank">
          <i className="fa fa-tint fa-lg" aria-hidden="true"></i> Blood sugar testing: Why, when and how -- Mayo Clinic</a>
          </p>

        </div>

      </div>
    )
  }
});

module.exports = Resources;





