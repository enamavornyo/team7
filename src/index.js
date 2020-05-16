import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Members from "./components/Members";
import Tithes from "./components/tithesAndOfferings";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import Landing from "./components/landing";
import NotFound from "./components/notFound";
import Callback from "./components/callback";
import IllegalLogin from "./components/illegal_login";
import Auth from "./auth";
import AuxGroups from "./components/auxiliaryGroups";
import Donations from "./components/Donations";
import Counselling from "./components/Counselling";

const auth = new Auth();

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/",
});

const client = new ApolloClient({
  cache,
  link,
});

class ApolloApp extends React.Component {
  render() {
    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = <Landing {...state} />;
        break;
      case "callback":
        mainComponent = <Callback />;
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? (
          <Dashboard {...state} />
        ) : (
          <IllegalLogin />
        );
        break;

      case "dashboard":
        mainComponent = this.props.auth.isAuthenticated() ? (
          <Dashboard {...state} />
        ) : (
          <IllegalLogin />
        );
        break;
      case "members":
        mainComponent = this.props.auth.isAuthenticated() ? (
          <Members />
        ) : (
          <NotFound />
        );
        break;
      case "tithes":
        mainComponent = this.props.auth.isAuthenticated() ? (
          <Tithes {...state} />
        ) : (
          <NotFound />
        );
        break;
      case "auxGroups":
        mainComponent = this.props.auth.isAuthenticated() ? (
          <AuxGroups />
        ) : (
          <IllegalLogin />
        );
        break;
      case "donations":
        mainComponent = this.props.auth.isAuthenticated() ? (
          <Donations />
        ) : (
          <IllegalLogin />
        );
        break;
      case "counselling":
        mainComponent = this.props.auth.isAuthenticated() ? (
          <Counselling />
        ) : (
          <IllegalLogin />
        );
        break;
      default:
        mainComponent = <NotFound />;
    }

    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="w-100">{mainComponent}</div>
        </Router>
      </ApolloProvider>
    );
  }
}

let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes);

  ReactDOM.render(<ApolloApp {...state} />, document.getElementById("root"));
};

/*eslint no-restricted-globals: 0 */
let UserName = auth.getProfile().given_name || "Empty!!";
let initialState = {
  name: UserName,
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth,
};

window.setState(initialState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
