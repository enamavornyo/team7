import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";
import "../css/profileStyle.css";
import Auth from "../auth";

const auth = new Auth();
let UserName = auth.getProfile().given_name || "Empty!!";
let fullName = auth.getProfile().name || "Empty!!";
let profilePhoto = auth.getProfile().picture || "Empty!!";
let userEmail = auth.getProfile().email || "Empty!!";
function Profile() {
  return (
    <div className="row">
      <div className="col-12" id="body">
        <div className="tab-content" id="v-pills-tabContent">
          <div>
            <div className="container emp-profile">
              <form method="post">
                <div className="row">
                  <div className="col-md-4">
                    <div className="profile-img">
                      <img src={profilePhoto} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-head">
                      <h5>{UserName}</h5>
                      <h6>Church Administrator</h6>
                      <p className="proile-rating">
                        RANKINGS : <span>8/10</span>
                      </p>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                            About
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
                            Timeline
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="profile-work">
                      <br />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label>User Id</label>
                          </div>
                          <div className="col-md-6">
                            <p>{UserName} </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Name</label>
                          </div>
                          <div className="col-md-6">
                            <p> {fullName}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Email</label>
                          </div>
                          <div className="col-md-6">
                            <p>{userEmail}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Phone</label>
                          </div>
                          <div className="col-md-6">
                            <p>123 456 7890</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Profession</label>
                          </div>
                          <div className="col-md-6">
                            <p>Church Administrator</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label>Experience</label>
                          </div>
                          <div className="col-md-6">
                            <p>Expert</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Hourly Rate</label>
                          </div>
                          <div className="col-md-6">
                            <p>10$/hr</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Total Projects</label>
                          </div>
                          <div className="col-md-6">
                            <p>230</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>English Level</label>
                          </div>
                          <div className="col-md-6">
                            <p>Expert</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Availability</label>
                          </div>
                          <div className="col-md-6">
                            <p>6 months</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <label>Your Bio</label>
                            <br />
                            <p>Your detail description</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
