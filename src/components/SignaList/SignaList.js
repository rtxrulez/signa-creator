import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getListSinga } from "../../store/actions/fetchSingaActions";
import "./SignaList.scss";

class SignaList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.dispatch(getListSinga());
  };

  render() {
    const { singas } = this.props;
    return (
      <div className="signaList">
        <div className="container signaList__container">
          <h1>List Created signa</h1>
          <div className="signaList__content">
            <ul className="signaList__menu">
              {singas.map((val, k) => {
                return (
                  <li className="signaList__item" key={k}>
                    <Link to={"/list/" + val.id}>
                      <img src={val.url} alt={k} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    singas: store.singas
  };
};

export default connect(mapStateToProps, undefined)(SignaList);
