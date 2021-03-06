import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";
import PropTypes from "prop-types";
import SortableTbl from "../sortableTable/SortableTbl";
import Bar from "./navbar";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { flowRight as compose } from "lodash";
import AddMember from "./add_member";

class BaseProductDeleteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem() {
    alert("delete " + this.props.rowData.firstName);
    console.log(this.props.rowData, this.props.tdData);
  }
  render() {
    return (
      <td>
        <input
          type="button"
          className="btn btn-danger"
          value="Delete"
          onClick={this.deleteItem}
        />
      </td>
    );
  }
}

BaseProductDeleteComponent.propTypes = {
  rowData: PropTypes.object,
  tdData: PropTypes.string,
};

function ProductTblImgpreloader() {
  return <div className="loading-div" style={{ minHeight: "100px" }} />;
}

const TblImageLoader = (props) => (
  <div class="profile-img">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
      alt=""
    />
  </div>
);
TblImageLoader.propTypes = {
  data: PropTypes.string.isRequired,
};

const BaseProductTblImageComponent = (props) => {
  return (
    <td style={{ width: "170px", minWidth: "170px", backgroundColor: "#fff" }}>
      <a href={props.rowData.imageUrl} target="_blank">
        <TblImageLoader data={props.rowData.imageUrl} />
      </a>
    </td>
  );
};

BaseProductTblImageComponent.propTypes = {
  rowData: PropTypes.object,
  tdData: PropTypes.string,
};

class BaseProductEditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.editItem = this.editItem.bind(this);
  }
  editItem() {
    alert("edit " + this.props.rowData.name);
    // this.handleUpdate();
    console.log(this.props.rowData, this.props.tdData);
  }

  render() {
    return (
      <td>
        <input
          type="button"
          className="btn btn-warning"
          value="Edit"
          onClick={this.editItem}
        />
      </td>
    );
  }
}
BaseProductEditComponent.propTypes = {
  rowData: PropTypes.object,
  tdData: PropTypes.string,
};

const MemberQuery = gql`
  query {
    churchMembers {
      firstName
      surName
      dob
      age
      registered
      id
    }
  }
`;

function Members_(props) {
  const { loading, data } = useQuery(MemberQuery);
  console.log(props);

  if (loading) {
    return <div>Loading...</div>;
  }
  let col = [
    "imageUrl",
    "firstName",
    "surName",
    "dob",
    "age",
    "registered",
    "delete",
    "edit",
  ];
  let tHead = [
    "Image",
    "First Name",
    "Surname",
    "Dob",
    "Age",
    "Registered",
    "Backup",
    "HDD",
    "Video output",
    "Delete",
    "Edit",
  ];

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
              Add Member
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
              View Members
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
              <AddMember />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <h4 className="h4 mt-3" style={{ textAlign: "center" }}>
                Member Records
              </h4>

              <SortableTbl
                tblData={data.churchMembers}
                tHead={tHead}
                customTd={[
                  {
                    custd: BaseProductTblImageComponent,
                    keyItem: "imageUrl",
                  },
                  { custd: BaseProductEditComponent, keyItem: "edit" },
                  { custd: BaseProductDeleteComponent, keyItem: "delete" },
                ]}
                dKey={col}
              />
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

Members_.propTypes = {};

export default compose(graphql(MemberQuery))(Members_);
