import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pie from "../charts/piechart";
import BarChart from "../charts/barChart";
import "../css/dashboardStyle.css";
import Profile from "./profile";
import Bar from "./navbar";

class Dashboard extends React.Component {
  render() {
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
                Dashboard
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
                Profile
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
                Reports
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
                Settings
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
                <div className="row mx-auto mt-3 mb-3">
                  <div className="col-2 mr-2">
                    <div className="h-50 card mb-2">{this.props.name}</div>
                    <div className="h-50 card">ffggg</div>
                  </div>

                  <div className="h-50 card col-4 mr-4">
                    <Pie />
                  </div>

                  <div className="card col-5">
                    <BarChart />
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi non lorem et purus gravida eleifend. Sed congue,
                      purus nec fringilla accumsan, mi orci volutpat metus, non
                      vehicula quam augue sit amet ex. Vestibulum ornare diam in
                      diam pulvinar commodo. Quisque hendrerit nisl quis dui
                      ultricies, vel luctus nibh vulputate. Vestibulum porttitor
                      odio eu nisi tristique bibendum. Donec feugiat in ante eu
                      sagittis. Donec mattis ornare urna. Vestibulum viverra
                      quam id elementum maximus. Donec a leo vitae magna
                      dignissim scelerisque. In efficitur sodales dapibus. Proin
                      mauris magna, venenatis non dictum in, convallis at nulla.
                      Vivamus augue purus, porttitor in turpis aliquam, suscipit
                      gravida sapien. Pellentesque ultrices tortor vel risus
                      pharetra, id pellentesque metus tempus. Quisque
                      condimentum quis lacus eu mollis. Suspendisse ut est id
                      dui fringilla aliquet a eu odio. Vestibulum cursus nisi id
                      mi mattis iaculis. Ut at nulla in leo venenatis eleifend a
                      vitae purus. Quisque suscipit eget nulla eget feugiat.
                      Morbi vestibulum luctus varius. Nunc nec magna ipsum.
                      Pellentesque efficitur finibus commodo. Mauris tincidunt
                      aliquam congue. Integer sit amet sagittis dui. Nam dictum,
                      erat et molestie suscipit, arcu ex imperdiet arcu, vel
                      molestie justo mauris in risus. Quisque eu semper urna.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <Profile />
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
}

export default Dashboard;
