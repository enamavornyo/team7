import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "../auth";

const auth = new Auth();

/*eslint no-restricted-globals: 0 */
let links = document.getElementsByClassName("nav-item");
let loc = location.pathname;
console.log(loc);

function Bar() {
  if (loc === "/dashboard") {
    console.log(links);
    window.onload = function Tabss() {
      var current = document.getElementsByClassName("active").item(0);
      console.log(current);
      current.className = "";
      links.item(0).className = "active";
    };
  }

  if (loc === "/tithes") {
    console.log(links);
    window.onload = function Tabss() {
      var current = document.getElementsByClassName("active").item(0);
      console.log(current);
      current.className = "";
      links.item(1).className = "active";
    };
  }

  if (loc === "/auxGroups") {
    console.log(links);
    window.onload = function Tabss() {
      var current = document.getElementsByClassName("active").item(0);
      console.log(current);
      current.className = "";
      links.item(2).className = "active";
    };
  }

  if (loc === "/donations") {
    console.log(links);
    window.onload = function Tabss() {
      var current = document.getElementsByClassName("active").item(0);
      console.log(current);
      current.className = "";
      links.item(3).className = "active";
    };
  }

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark w-100">
      <div className="navbar-brand">Team 7 Church DMS</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item  ">
            <a className="nav-link " href="/dashboard">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="/members">
              Members <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/tithes">
              Tithes / offerings <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/auxGroups">
              Auxiliary Groups<span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/donations">
              Donations <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/counselling">
              Counselling <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-danger my-2 my-sm-0"
            type="button"
            style={{ color: "white" }}
            onClick={auth.logout}
          >
            logout
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Bar;
