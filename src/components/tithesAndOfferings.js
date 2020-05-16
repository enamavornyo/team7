import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/dashboardStyle.css";
import Bar from "./navbar";
import AddTithe from "./addTithe";
import AddOffering from "./addOffering";

function Tithes() {
  return (
    <div className="col-12">
      <div className="row">
        <Bar />
      </div>
      <div className="row">
        <div
          className="col-2"
          style={{
            background: "linear-gradient(to right, #0062E6, #33AEFF)",
            paddingLeft: 25,
            height: "100vh",
          }}
        >
          <div
            className="nav flex-column nav-pills pt-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              style={{ color: "white" }}
            >
              Add Tithe
            </a>
            <a
              className="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              style={{ color: "white" }}
            >
              Add Offering
            </a>
            <a
              className="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              style={{ color: "white" }}
            >
              Tithe Records
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              style={{ color: "white" }}
            >
              Offering Records
            </a>
          </div>
        </div>
        <div className="col-10">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <AddTithe />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <AddOffering />
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-table"
              role="tabpanel"
              aria-labelledby="v-pills-table-tab"
            >
              ...
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tithes;
