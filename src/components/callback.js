import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "../auth";

class Callback extends React.Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }
  render() {
    return <h1>Loading...</h1>;
  }
}

export default Callback;
