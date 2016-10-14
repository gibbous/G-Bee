// Include React
var React = require('react');

var Log = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-md-offset-1 col-lg-offset-1 col-md-10 col-lg-10">
          <div >

             <form action="logs/create" method="POST">

               <div className="form-group">
                <label htmlFor="exampleInputDate">Date</label>
                <input type="date" name="date" className="form-control" id="formControlsDate" placeholder="Enter Date" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputTime">Time</label>
                <input type="time" name="time" className="form-control" id="formControlsTime" placeholder="Enter Time" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputNumber">Blood Glucose Reading (mg/dL)</label>
                <input type="number" name="reading" className="form-control" id="formControlsReading" placeholder="100" />
              </div>
               <div className="form-group">
                <label htmlFor="exampleSelect1">Test Options</label>
                <select className="form-control" name="type" id="formControlsSelect">
                  <option value=""></option>
                  <option value="a">Out of Bed (fasting)</option>
                  <option value="b">After Breakfast</option>
                  <option value="c">After Lunch</option>
                  <option value="d">After Dinner</option>
                  </select>
              </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea">Notes</label>
                    <textarea className="form-control" name="notes" id="formControlsNotearea" rows="3"></textarea>
                  </div>              

                 <button type="submit" className="btn btn-warning btn-lg">Submit</button>               

              </form>
                        </div>
                      </div>
                    </div>

                    
                  )
                }
              });

module.exports = Log;