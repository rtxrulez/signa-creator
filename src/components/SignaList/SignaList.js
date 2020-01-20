import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadList } from "../../store/actions/loadSingaActions";
import "./SignaList.scss";

class SignaList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.loadList();
  };

  render() {
    const { singas, loadSinga } = this.props;
    const { isFetched, isFetching } = this.props.loadSinga;
    return (
      <div className="signaList">
        <div className="container signaList__container">
          <h1>List Created signa</h1>
          <div
            className={
              "signaList__content" +
              (isFetching ? " fetching " : "") +
              (isFetched ? " fetched " : "")
            }
          >
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
    singas: store.singas,
    loadSinga: store.loadSinga
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadList: () => dispatch(loadList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignaList);
