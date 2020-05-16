import React, { useState } from "react";
import DatePicker from "react-datepicker";

function AddAuxGroupMember() {
  let [dob, setdob] = useState("");
  const [dob_, setdob_] = useState(null);
  const [auxGroup, setGroup] = useState("");

  const handleDateChange = (value) => {
    // using a temp variable to store the date format(dob_)
    //then, converting it to a string in a specified format
    //and using that string as my desired output.
    if (dob_ == null) {
      setdob_(value);
    }

    setdob_(value);
    dob = value.toDateString();
    setdob(dob);
    console.log(dob);
  };

  return (
    <div className="row">
      <div className="col-12" id="body" style={{ color: "white" }}>
        <div className="tab-content" id="v-pills-tabContent">
          <h3 className="text-center my-3">Add Member to Auxiliary Group</h3>
          <div className="row register-form">
            <div className="col-md-6 my-5 mx-auto">
              <div className="form-group">
                <label> Select Group </label>
                <select
                  className="form-control"
                  onChange={(e) => setGroup(e.target.value)}
                >
                  <option className="hidden" selected disabled>
                    Please select Auxiliary Group
                  </option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group">
                <label>Member ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Member ID*"
                />
              </div>

              <label> Group Join Date </label>
              <div className="form-group">
                <DatePicker
                  maxDate={Date.now()}
                  dropdownMode="select"
                  className="form-control"
                  scrollableYearDropdown="true"
                  showYearDropdown="true"
                  showMonthDropdown="true"
                  selected={dob_}
                  onChange={handleDateChange}
                />
              </div>
              <div className="row">
                <button type="submit" className="btn btn-success ml-auto">
                  Add Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAuxGroupMember;
