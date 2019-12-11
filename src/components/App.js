import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.scss";
import Signa from "./Signa/Signa";
import SignaList from "./SignaList/SignaList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route
            path="/"
            exact={true}
            render={props => <Signa {...props} name="newImage" />}
          />
          <Route path="/list" component={SignaList}></Route>
        </HashRouter>
      </div>
    );
  }
}

export default App;
