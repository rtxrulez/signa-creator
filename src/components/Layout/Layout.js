import React, { Component } from "react";
import Header from "../Header/Header";
import "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <div className="layout__wrapper">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
