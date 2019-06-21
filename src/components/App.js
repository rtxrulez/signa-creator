import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.scss";
import ImageLoad from "./ImageLoad/ImageLoad";
import Signa from "./Signa/Signa";
import SignaList from "./SignaList/SignaList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route path="/" exact={true} component={SignaList} />
          <Route
            path="/nasty"
            render={props => <Signa {...props} name="nasty" />}
          />
          <Route
            path="/vika"
            render={props => <Signa {...props} name="vika" />}
          />
          <Route
            path="/ImageLoad"
            render={props => <Signa {...props} name="newImage" />}
          />
        </HashRouter>
      </div>
    );
  }
}

export default App;
