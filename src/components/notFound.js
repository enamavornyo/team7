import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class NotFound extends React.Component {
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
                    <h1 className="card-title text-center">NOT FOUND !</h1>
                  </div>
                  <h5 className="card-title text-center mt-3">
                    Team 7 Church Management System
                  </h5>
                  <div class="card-body">
                    <div>
                      <hr />
                      <p>This page was not found</p>
                    </div>

                    <hr />
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

export default NotFound;
