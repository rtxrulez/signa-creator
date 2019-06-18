import React, { Component } from "react";
import domtoimage from "dom-to-image";
import Draggable from "react-draggable";
import "./SignaCreator.scss";

class SignaCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text1, text2} = this.props;
    const path = "./images/" + this.props.name +".png"
    return (
      <div className="SignaCreator">
        <div className="SignaCreator__content" id="content">
          <img src={path} alt="" className="SignaCreator__img" />

          <Draggable defaultClassNameDragging="drag">
            <div className="SignaCreator__textContent SignaCreator__textContent--v1">
              <div className="SignaCreator__text">{text1}</div>
            </div>
          </Draggable>

          <Draggable>
            <div className="SignaCreator__textContent SignaCreator__textContent--v2">
              <div className="SignaCreator__text">{text2}</div>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default SignaCreator;
