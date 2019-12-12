import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.scss";
import Signa from "./Signa/Signa";
import SignaList from "./SignaList/SignaList";
import Layout from "./Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route
            path="/"
            exact={true}
            render={props => (
              <Layout>
                <Signa {...props} name="newImage" />
              </Layout>
            )}
          />
          <Route
            path="/list"
            render={() => (
              <Layout>
                <SignaList />
              </Layout>
            )}
          ></Route>
        </HashRouter>
      </div>
    );
  }
}

export default App;
