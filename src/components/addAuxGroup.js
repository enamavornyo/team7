import React, { useState } from "react";
import DatePicker from "react-datepicker";

function AddAuxGroup() {
  let [dob, setdob] = useState("");
  const [dob_, setdob_] = useState(null);
  const [service, setService] = useState("");
  const [Description, setDescription] = useState("");

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
          <h3 className="text-center my-3">Create Auxiliary Group</h3>
          <div className="row register-form">
            <div className="col-md-6 my-5 mx-auto">
              <div className="form-group">
                <label> Group Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of Group *"
                />
              </div>
              <div className="form-group">
                <label>Full Name Group Leader</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of group Leader *"
                />
              </div>
              <div className="form-group">
                <label> Group Patron</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of Group Patron*"
                />
              </div>

              <div className="form-group">
                <label> Description</label>
                <input
                  type="text-area"
                  className="form-control"
                  placeholder="Description"
                />
              </div>

              <div className="form-group">
                <label> Service</label>
                <select
                  className="form-control"
                  onChange={(e) => setService(e.target.value)}
                >
                  <option className="hidden" selected disabled>
                    Please select Service
                  </option>
                  <option>English Service</option>
                  <option>Akan Service</option>
                  <option>Youth Service</option>
                  <option>Childern's Service</option>
                </select>
              </div>

              <label> Date of Formation </label>
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
                  Create Group
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAuxGroup;
