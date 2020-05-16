import React from "react";
import PropTypes from "prop-types";

class SortableTblPager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: this.props.curr,
      rowPerPage: this.props.rowPerPage,
    };
    this.setPage = this.setPage.bind(this);
    this.addPagge = this.addPagge.bind(this);
    this.subPage = this.subPage.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setRowsPerPage = this.setRowsPerPage.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    //constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
    if (nextProps.curr !== this.state.currPage) {
      this.setState({ currPage: nextProps.curr });
    }
    if (nextProps.rowPerPage !== this.state.rowPerPage) {
      this.setState({ rowPerPage: nextProps.rowPerPage });
    }
  }
  setCurrentPage(e) {
    this.setPage(parseInt(e.target.value));
  }
  addPagge() {
    if (this.state.currPage >= this.props.totalPage - 1) return;

    this.setPage(this.state.currPage + 1);
  }
  subPage() {
    if (this.state.currPage < 1) return;

    this.setPage(this.state.currPage - 1);
  }
  setPage(i) {
    this.props.setCurrentPage(i);
    this.setState({
      currPage: i,
    });
  }
  setRowsPerPage(e) {
    let i = parseInt(e.target.value);
    if (i === "All" || isNaN(i)) i = this.props.totalsCount;
    this.props.setRowsPerPage(i);
    this.setState({
      rowPerPage: i,
    });
  }
  render() {
    let nextDisableStyle = this.state.currPage + 1 >= this.props.totalPage;
    let prevDisableStyle = this.state.currPage + 1 <= 1;
    let rowPerPage = this.props.totalPage === 1 ? "All" : this.props.rowPerPage;

    return (
      <div className="  form-group">
        <div className="row pager ">
          <div className="col-1">
            <input
              type="button"
              className="btn btn-warning"
              name=""
              disabled={prevDisableStyle}
              onClick={this.subPage}
              value="Prev"
            />
          </div>
          <div className="col-1">
            <select
              onChange={this.setCurrentPage}
              value={this.state.currPage}
              className="form-control page-select"
            >
              {Array.from(new Array(this.props.totalPage), (x, i) => {
                return (
                  <option key={i} value={i}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-1">
            <input
              type="button"
              className="btn btn-warning"
              name=""
              disabled={nextDisableStyle}
              onClick={this.addPagge}
              value="Next"
            />
          </div>
          <div>
            <label htmlFor="rowsPerPage" className="SortableTblLabel">
              display
            </label>
          </div>
          <div className="col-1">
            <select
              id="rowsPerPage"
              onChange={this.setRowsPerPage}
              value={rowPerPage}
              className="form-control page-select"
            >
              {[5, 10, 20, 50, "All"].map((item, id) => {
                return (
                  <option key={id} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label className="SortableTblLabel">rows per page</label>
          </div>
        </div>
        <div className="col-5 ml-auto">
          <div>
            Page {this.state.currPage + 1} of {this.props.totalPage}, total No.
            of rows: {this.props.totalsCount} rows
          </div>
        </div>
      </div>
    );
  }
}
SortableTblPager.propTypes = {
  curr: PropTypes.number.isRequired,
  rowPerPage: PropTypes.number.isRequired,
  totalsCount: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
};

export { SortableTblPager };
