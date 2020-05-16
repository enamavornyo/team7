import React from "react";
import "../css/landingStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <body
          style={{
            background: "linear-gradient(to right, #0062E6, #33AEFF)",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-5 mx-auto">
                <div class="card card-signin  my-5">
                  <div className="card-header">
                    <h1 className="card-title text-center">WELCOME !</h1>
                  </div>
                  <h5 className="card-title text-center mt-3">
                    Team 7 Church Management System
                  </h5>
                  <div class="card-body">
                    {!this.props.auth.isAuthenticated() && (
                      <div>
                        <hr />
                        <p>
                          Kindly login if already a user or Register as a user
                          here
                        </p>
                        <button
                          className="btn btn-info"
                          onClick={this.props.auth.login}
                        >
                          Login / Register
                        </button>
                      </div>
                    )}
                    <hr />

                    <p>Already logged in?</p>
                    <button className="btn btn-success">
                      <a style={{ color: "white" }} href="/secret">
                        RESUME SESSION
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Landing;
