import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Signa from "./Signa/Signa";
import SignaList from "./SignaList/SignaList";
import Layout from "./Layout/Layout";

class App extends Component {
  render() {
    const List = () => (
      <Switch>
        <Route
          path="/list"
          exact={true}
          component={() => (
            <Layout>
              <SignaList />
            </Layout>
          )}
        ></Route>
        <Route
          path="/list/:id"
          component={props => (
            <Layout>
              <Signa {...props} />
            </Layout>
          )}
        />
      </Switch>
    );

    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={props => (
                <Layout>
                  <Signa {...props} />
                </Layout>
              )}
            />
            <List></List>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
