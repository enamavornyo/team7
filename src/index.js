import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/signIn";
import Register from "./components/register";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div className="w-100">
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>

          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/test"></Route>
        </Switch>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
