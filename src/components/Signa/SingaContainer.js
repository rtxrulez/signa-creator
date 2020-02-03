import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadSinga } from "../../store/actions/uploadSingaActions";
import { getOneSinga } from "../../store/actions/oneSingaActions";
import Singa from "./Signa";

class SignaContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id ? this.props.match.params.id : false;
    console.log("did mount ", id);
    if (id !== "") {
      this.props.getOneSinga(id);
    }
  }

  render() {
    const { oneSinga } = this.props;
    console.log("container props", this.props);
    return (
      <div>
        <Singa {...oneSinga} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log("store to props", store);
  return {
    oneSinga: store.oneSinga,
    singas: store.singas,
    uploadSinga: store.uploadSinga
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadData: singaData => dispatch(uploadSinga(singaData)),
    getOneSinga: id => dispatch(getOneSinga(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignaContainer);
