import React, { useState } from "react";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/addMemberStyle.css";
import DatePicker from "react-datepicker";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";

const CreateMemberMutation = gql`
  mutation(
    $firstName: String
    $surName: String
    $dob: String
    $age: Int
    $service: String
    $sex: String
    $otherNames: String
    $email: String
    $address: String
    $phoneNumber: String
    $nationality: String
    $areaOfResidence: String
  ) {
    createMember(
      firstName: $firstName
      surName: $surName
      dob: $dob
      age: $age
      sex: $sex
      service: $service
      otherNames: $otherNames
      email: $email
      address: $address
      phoneNumber: $phoneNumber
      nationality: $nationality
      areaOfResidence: $areaOfResidence
    ) {
      firstName
      surName
      dob
      age
      sex
      service
      otherNames
      email
      address
      phoneNumber
      nationality
      areaOfResidence
    }
  }
`;

function Add_Member() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [errorShow, setErrorShow] = useState(false);

  const handleErrorClose = () => setErrorShow(false);
  const handleErrorShow = () => setErrorShow(true);

  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [service, setService] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [areaOfResidence, setAOR] = useState("");
  const [dob_, setdob_] = useState(null);
  var [dob, setdob] = useState("");
  const [age, setAge] = useState(Number);

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

  const [createMember, { error }] = useMutation(
    CreateMemberMutation,

    {
      variables: {
        firstName,
        surName,
        dob,
        age,
        sex,
        service,
        otherNames,
        email,
        address,
        phoneNumber,
        nationality,
        areaOfResidence,
      },
      errorPolicy: "all",
    }
  );

  let validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // function validateEmail() {
  //   validEmail.test(email.toLowerCase()) ? emailIsValid() : emailIsInvalid();
  // }
  // validEmail.test(email.toLowerCase())
  function emailIsInvalid() {
    document.getElementById("inputEmail").style.border = "solid red";
    return;
  }

  const handleSubmit = () => {
    if (firstName.length < 1) {
      handleError();
      setTimeout(handleErrorClose, 2000);
      console.log();
      return;
    } else if (!validEmail.test(email.toLowerCase())) {
      emailIsInvalid();
      return;
    } else {
      handleShow();
      setTimeout(handleClose, 2000);
      createMember();
      console.log(
        "works!",
        firstName,
        surName,
        dob,
        age,
        sex,
        service,
        otherNames,
        email,
        address,
        phoneNumber,
        nationality,
        areaOfResidence
      );
      return;
    }
  };

  const handleError = () => {
    handleErrorShow();
    console.log(error);
    console.log("yikes");
  };

  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>Add a new / unregistered member to the church's database</p>
          <br />
        </div>
        <div className="col-md-9 register-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Adult
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Child
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading">Add an adult member</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <label> First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                      onChange={(e) => setSurName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Other Name(s)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Other Name(s)"
                      onChange={(e) => setOtherNames(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Sex</label>
                    <select
                      className="form-control"
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <option className="hidden" selected disabled>
                        Please select Sex
                      </option>
                      <option>Female</option>
                      <option>Male</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> Age</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Age *"
                      onChange={(e) => setAge(e.target.valueAsNumber)}
                    />
                  </div>
                  <label> Date of Birth</label>
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
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label> Email Address</label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Phone Number</label>
                    <input
                      type="text"
                      minLength="10"
                      maxLength="10"
                      name="txtEmpPhone"
                      className="form-control"
                      placeholder="Phone Number *"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label> Area Of Residence</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area of Residence"
                      onChange={(e) => setAOR(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label> Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label> Nationality</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nationality"
                      onChange={(e) => setNationality(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Add Member"
                    onClick={handleSubmit}
                  />

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header
                      style={{ background: "#5ef761", color: "white" }}
                      closeButton
                    >
                      <Modal.Title>Success !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Successfully added a member </Modal.Body>
                    <Modal.Footer>
                      <Button
                        style={{ background: "#5ef761", color: "white" }}
                        variant="secondary"
                        onClick={handleClose}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal show={errorShow} onHide={handleErrorClose}>
                    <Modal.Header
                      style={{ background: "#f75e5e", color: "white" }}
                      closeButton
                    >
                      <Modal.Title>Error !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Please input correct values to corresponding feilds
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        style={{ background: "#f75e5e", color: "white" }}
                        variant="secondary"
                        onClick={handleErrorClose}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <h3 className="register-heading">Add a child</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      maxLength="10"
                      minLength="10"
                      className="form-control"
                      placeholder="Phone *"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option className="hidden" selected disabled>
                        Please select your Sequrity Question
                      </option>
                      <option>What is your Birthdate?</option>
                      <option>What is Your old Phone Number</option>
                      <option>What is your Pet Name?</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="`Answer *"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Register"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default graphql(CreateMemberMutation, { name: "createMember" })(
  Add_Member
);
