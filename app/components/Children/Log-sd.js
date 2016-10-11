// Include React
var React = require('react');

var Log = React.createClass({

  render: function(){

    return(
      <div className="container">

        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Log</h3>
            </div>

            {/*<form>

               <div className="form-group">
                <label for="exampleInputDate">Date</label>
                <input type="date" className="form-control" id="formControlsDate" placeholder="Enter Date">
              </div>
              <div className="form-group">
                <label for="exampleInputTime">Time</label>
                <input type="time" className="form-control" id="formControlsTime" placeholder="Enter Time">
              </div>
              <div className="form-group">
                <label for="exampleInputNumber">Blood Glucose Reading</label>
                <input type="number" className="form-control" id="formControlsReading" placeholder="">
              </div>
               <div className="form-group">
                <label for="exampleSelect1">Test Options</label>
                <select className="form-control" id="formControlsSelect">
                  <option>Out of Bed (fasting)</option>
                  <option>After Breakfast</option>
                  <option>After Lunch</option>
                  <option>After Dinner</option>
                  </select>
              </div>
                  <div className="form-group">
                    <label for="exampleTextarea">Notes</label>
                    <textarea className="form-control" id="formControlsNotearea" rows="3"></textarea>
                  </div>              

                 <button type="submit" className="btn btn-default">Submit</button>               

              </form>*/}
                        </div>
                      </div>

                    </div>
                  )
                }
              });

module.exports = Log;