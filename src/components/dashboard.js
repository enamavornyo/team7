import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Pie from "../charts/piechart";
import BarChart from "../charts/barChart";
import Bar from "./navbar";
import "../css/dashboardStyle.css";

function Dashboard() {
  return (
    <div>
      <div className="row">
        <Bar />
      </div>
      <div class="row">
        <div
          class="col-2"
          style={{
            background: "linear-gradient(to right, #0062E6, #33AEFF)",
            paddingLeft: 25,
          }}
        >
          <div
            class="nav flex-column nav-pills pt-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              style={{ color: "white" }}
            >
              Home
            </a>
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              style={{ color: "white" }}
            >
              Profile
            </a>
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              style={{ color: "white" }}
            >
              Messages
            </a>
            <a
              class="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              style={{ color: "white" }}
            >
              Settings
            </a>
          </div>
        </div>
        <div class="col-10">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              ...
              <Pie />
              <BarChart />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
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

export default Dashboard;
