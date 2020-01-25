import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadList } from "../../store/actions/loadSingaActions";
import { updateOneSinga } from "../../store/actions/oneSingaActions";
import "./SignaList.scss";

class SignaList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.loadList();
    console.log("pr", this.props);
  };

  setOneSinga = oneSinga => {
    console.log("id", oneSinga);
    this.props.updateOneSinga(oneSinga);
  };

  render() {
    const { singas, loadSinga } = this.props;
    const { isFetched, isFetching } = this.props.loadSinga;
    console.log("s", singas);
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
            {isFetched ? (
              <ul className="signaList__menu">
                {singas.map((val, k) => {
                  return (
                    <li className="signaList__item" key={k}>
                      <Link to={"list/" + val._id}>
                        <img src={val.url} alt={k} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              undefined
            )}
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
    loadList: () => dispatch(loadList()),
    updateOneSinga: data => dispatch(updateOneSinga(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignaList);
