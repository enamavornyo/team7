import React, { useState } from "react";
import DatePicker from "react-datepicker";

function AddTithe() {
  let [dob, setdob] = useState("");
  const [dob_, setdob_] = useState(null);
  const [service, setService] = useState("");
  const [titheAmount, setTitheAmount] = useState(Number);

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
          <h3 className="text-center my-3">Add Tithe</h3>
          <div className="row register-form">
            <div className="col-md-6 my-5">
              <h5 className="text-center">Tithe Recorder Details</h5>

              <div className="form-group">
                <label> First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name *"
                />
              </div>
              <div className="form-group">
                <label> Surname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name *"
                />
              </div>
            </div>
            <div className="col-md-4 my-5">
              <h5 className="text-center">Tithe Record Details</h5>

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

              <div className="form-group">
                <label> Total Tithe Amount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Total Amount *"
                  onChange={(e) => setTitheAmount(e.target.valueAsNumber)}
                />
              </div>

              <label> Date </label>
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
                  Add Tithe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTithe;
