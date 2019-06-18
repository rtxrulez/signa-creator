import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./SignaList.scss";

class SignaList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="signa">
      <h1>Select Signa Create</h1>
      <div className="signaList__list">
        <Link to="/vika" className="signa__item">Vika</Link>
        <Link to="/nasty" className="signa__item">Nasty</Link>
      </div>
    </div>;
  }
}

export default SignaList;
