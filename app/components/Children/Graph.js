// Include React

import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Low', 'High', 'Day1(fasting)', 'Day1(afterBreakfast)', 'Day1(afterLunch)', 'Day1(afterDinner)','Day2(fasting)', 'Day2(afterBreakfast)', 'Day2(afterLunch)', 'Day2(afterDinner)', 'Day3(fasting)', 'Day3(afterBreakfast)', 'Day3(afterLunch)', 'Day3(afterDinner)', 'Day4(fasting)', 'Day4(afterBreakfast)', 'Day4(afterLunch)', 'Day4(afterDinner)', 'Day5(fasting)', 'Day5(afterBreakfast)', 'Day5(afterLunch)', 'Day5(afterDinner)', 'Day6(fasting)', 'Day6(afterBreakfast)', 'Day6(afterLunch)', 'Day6(afterDinner)', 'Day7(fasting)', 'Day7(afterBreakfast)', 'Day7(afterLunch)', 'Day7(afterDinner)'],
  datasets: [
    {
      label: 'G-Bee',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 500, 80, 180, 120, 150, 75, 150, 200, 120, 100, 150, 234, 150, 93, 130, 150, 143, 75, 120, 150, 134, 88, 198, 145, 164, 100, 213, 176, 156, 110, 90, 120, 125]
    }
  ]
};

var Graph = React.createClass({
  displayName: 'Profile Data',

  render() {
    return (
      <div className="container">

        <div className="col-md-offset-1 col-lg-offset-1 col-md-10 col-lg-10">
          <h3>Keep your numbers in the sweet spot! </h3>
          <h4>The American Diabetes Association recommends a fasting plasma glucose level of 70–130 mg/dL (3.9-7.2 mmol/L) and after meals less than 180 mg/dL (10 mmol/L).</h4>
        </div>
        
        <div>
          <Line data={data} />
        </div>

      </div>
    );
  }
});

module.exports = Graph;
