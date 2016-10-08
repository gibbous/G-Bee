
              function FieldGroup({ id, label, help, ...props }) {
                return (
                  <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                  </FormGroup>
                );
              }

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
