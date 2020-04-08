import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  return (
    <body
      style={{
        background: "linear-gradient(to right, #0062E6, #33AEFF)",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-5 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Register</h5>
                <form class="form-signin">
                  <div class="form-label-group">
                    <input
                      type="text"
                      id="inputUserame"
                      class="form-control"
                      placeholder="Username"
                      required
                      autofocus
                    />
                    <label for="inputUserame">Username</label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <hr />

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                    <label for="inputPassword">Password</label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputConfirmPassword"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                    <label for="inputConfirmPassword">Confirm password</label>
                  </div>

                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
                  <a class="d-block text-center mt-2 small" href="./signin">
                    Sign In
                  </a>
                  <hr class="my-4" />
                  <button
                    class="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                    style={{ color: " white", backgroundColor: " #ea4335" }}
                  >
                    <i class="fab fa-google mr-2"></i> Sign in with Google
                  </button>
                  <button
                    class="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                    style={{ color: "white", backgroundColor: "#3b5998" }}
                  >
                    <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Register;
