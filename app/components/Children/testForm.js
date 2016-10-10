
        {/* temporary input fields for userID and userName for testing*/}
        <div className="form-group row">
         <label htmlFor="userId" className="col-xs-2 col-form-label">userId</label>
          <div className="col-xs-10">
            <input className="form-control" type="text" value="" id="userId" />
          </div>
        </div>

        <div className="form-group row">
         <label htmlFor="userName" className="col-xs-2 col-form-label">userName</label>
          <div className="col-xs-10">
            <input className="form-control" type="text" value="" id="userName" />
          </div>
        </div>

        <div className="form-group">
            <label htmlFor="readingType">Test Type</label>
            <select className="form-control" id="readingType" >
             <option value="a">Out of Bed (fasting)</option>
                      <option value="b">After Breakfast</option>
                      <option value="c">After Lunch</option>
                      <option value="d">After Dinner</option>
            </select>
        </div>

        <div className="form-group row">
          <label htmlFor="example-number-input" className="col-xs-2 col-form-label">Blood Glucose Reading</label>
          <div className="col-xs-10">
            <input className="form-control" type="number" value="" id="bgMgdl" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="date" className="col-xs-2 col-form-label">Date</label>
          <div className="col-xs-10">
            <input className="form-control" type="date" value="2016-10-01" id="date" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="time" className="col-xs-2 col-form-label">Time</label>
            <div className="col-xs-10">
              <input className="form-control" type="time" value="" id="time"/>
            </div>
        </div>


      <div className="form-group">
        <label htmlFor="exampleTextarea">Comments</label>
        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
      </div>
  
  
      