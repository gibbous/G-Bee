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

            <div className="panel-body">
              {/* function FieldGroup({ id, label, help, ...props }) {
                return (
                  <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                  </FormGroup>
                );
              } */}

              const formInstance = (
                <form>
                  <FieldGroup
                    id="formControlsDate"
                    type="date"
                    label="Date"
                    placeholder="Enter Date"
                  />

                  <FieldGroup
                    id="formControlsTime"
                    type="time"
                    label="Time"
                    placeholder="Enter Time"
                  />

                  <FieldGroup
                    id="formControlsReading"
                    type="number"
                    label="Blood Glucose Reading"
                    placeholder=""
                  />

                  <FormGroup controlId="formControlsTestOptions">
                    <ControlLabel>Test Options</ControlLabel>
                    <FormControl componentClass="select" placeholder="Choose Test Option">
                      <option value="select">Out of Bed (fasting)</option>
                      <option value="other">After Breakfast</option>
                      <option value="other">After Lunch</option>
                      <option value="other">After Dinner</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup controlId="formControlsNotearea">
                    <ControlLabel>Notes</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                  </FormGroup>

                  <Button type="submit">
                    Submit
                  </Button>
                </form>
              );

              ReactDOM.render(formInstance, mountNode);

                          </div>
                        </div>
                      </div>

                    </div>

              <div className="panel-body">
                Form Goes Here
















              </div>
            </div>
          </div>
        </div>

>>>>>>> master
                  )
                }
              });

module.exports = Log;
