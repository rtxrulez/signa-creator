import React, { Component } from "react";
import "./App.scss";
import Signa from "./Signa/Signa";

class App extends Component {
  render() {
    return (
      <div>
        <Signa fileName="vika" />
      </div>
    );
  }
}

export default App;
