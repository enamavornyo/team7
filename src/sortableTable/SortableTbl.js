import "font-awesome-sass-loader";
// import './SortableTbl.scss';
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";

import React from "react";
import { SortableTblPager } from "./SortableTblPager";
import { SortableTblTh } from "./SortableTblTh";
import { SortableTblTd } from "./SortableTblTd";

class SortableTbl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.tblData || [],
      asc: (this.props.dKey || []).reduce((acc, cur) => {
        return Object.assign({}, acc, { [cur]: null });
      }, {}),
      filter: "",
      pagers: {
        paging: this.props.paging,
        curr: 0,
        rowsPerPage: this.props.defaultRowsPerPage,
      },
    };
    //constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
    this.sortData = this.sortData.bind(this);
    this.filter = this.filter.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setRowsPerPage = this.setRowsPerPage.bind(this);
  }

  // componentWillMount() {}
  // componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    // constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
    if (nextProps.tblData !== this.state.data) {
      this.setState({ data: nextProps.tblData });
    }
  }
  componentDidUpdate(prevProps, prevState) {}

  filter(e) {
    let newData = this.props.tblData.filter((item) => {
      for (let key in item) {
        let v = item[key] && item[key].toString().toLowerCase();
        if (v && v.indexOf(e.target.value.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    });
    this.setState({
      filter: e.target.value,
      data: newData,
    });
  }

  sortData(dKey, nAsc) {
    let newAsc = this.state.asc;
    let newData = this.state.data;
    newData.sort((a, b) => {
      if (a[dKey] === b[dKey]) return 0;
      if (nAsc ? a[dKey] > b[dKey] : a[dKey] < b[dKey]) return 1;
      if (nAsc ? a[dKey] < b[dKey] : a[dKey] > b[dKey]) return -1;
      return 0;
    });
    for (let prop in newAsc) {
      newAsc[prop] = null;
    }
    this.setState({
      asc: Object.assign({}, newAsc, { [dKey]: nAsc }),
      data: newData,
    });
  }
  setCurrentPage(i) {
    let index = parseInt(i);
    this.setState({
      pagers: Object.assign({}, this.state.pagers, { curr: index }),
    });
  }
  setRowsPerPage(i) {
    let index = parseInt(i);
    let nCurr = this.state.pagers.curr;
    let pagesCount = Math.ceil(this.state.data.length / index);
    //console.log(this.state.pagers.curr, pagesCount, index);
    if (this.state.pagers.curr >= pagesCount) nCurr = pagesCount - 1;
    this.setState({
      pagers: Object.assign({}, this.state.pagers, {
        rowsPerPage: index,
        curr: nCurr,
      }),
    });
  }
  render() {
    let pageData = this.state.data;
    let pagers = this.state.pagers;
    let pagesCount = Math.ceil(this.state.data.length / pagers.rowsPerPage);
    if (pagers.paging) {
      pageData = pageData.slice(
        pagers.curr * pagers.rowsPerPage,
        (pagers.curr + 1) * pagers.rowsPerPage
      );
    }
    return (
      <div className="table-responsive">
        <div className="sortable-table">
          {this.props.search && (
            <div className="search-box col-4 mb-3">
              Search:{" "}
              <input
                className="form-control"
                type="text"
                name=""
                value={this.state.filter}
                placeholder="Filter Result"
                onChange={this.filter}
              />
            </div>
          )}

          <table className="table table-hover table-striped">
            <thead
              style={{
                cursor: "pointer",
                position: "relative",
                textAlign: "center",
                minHeight: "80px",
                backgroundColor: "#db3615",
                color: "#fff",
                padding: "5px",
                lineHeight: "25px",
                height: "80px",
                borderBottom: "5px solid #ccc",
              }}
            >
              <tr>
                {this.props.dKey.map((item, id) => {
                  return (
                    <SortableTblTh
                      scope="col"
                      key={id}
                      sortData={this.sortData}
                      asc={this.state.asc[item]}
                      dataKey={item}
                    >
                      {this.props.tHead[parseInt(id)]}
                    </SortableTblTh>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {pageData.map((item, id) => {
                return (
                  <SortableTblTd
                    key={id}
                    tdData={item}
                    {...this.props}
                    dKey={this.props.dKey}
                    customTd={this.props.customTd}
                  />
                );
              })}
            </tbody>
          </table>

          {pagers.paging ? (
            <SortableTblPager
              curr={pagers.curr}
              totalPage={pagesCount}
              setCurrentPage={this.setCurrentPage}
              setRowsPerPage={this.setRowsPerPage}
              totalsCount={this.state.data.length}
              rowPerPage={pagers.rowsPerPage}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
SortableTbl.propTypes = {
  tblData: PropTypes.array,
  tHead: PropTypes.array,
  dKey: PropTypes.array,
  customTd: PropTypes.array,
  paging: PropTypes.bool,
  search: PropTypes.bool,
  defaultCSS: PropTypes.bool,
  defaultRowsPerPage: PropTypes.number,
};

SortableTbl.defaultProps = {
  tblData: [],
  tHead: [],
  dKey: [],
  customTd: [],
  paging: true,
  search: true,
  defaultCSS: true,
  defaultRowsPerPage: 5,
};

export default SortableTbl;
