import React, { Component } from "react";
import domtoimage from "dom-to-image";
import Draggable from "react-draggable";
import "./SignaCreator.scss";

class SignaCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text1, text2, fontSize, color, handleDragStop, pos } = this.props;

    const path = "./images/" + this.props.name + ".png";

    const style1 = {
      fontSize: `${fontSize}px`,
      color: `${color}`,
      transform: `rotate(${this.props.rotate}deg)`
    };

    const style2 = {
      fontSize: `${fontSize}px`,
      color: `${color}`,
      transform: `rotate(${this.props.rotate}deg)`
    };

    return (
      <div className={"SignaCreator SignaCreator--" + this.props.name}>
        <div className="SignaCreator__content" id="content">
          <img src={path} alt="" className="SignaCreator__img" />

          <Draggable
            onStop={handleDragStop}
            position={{ x: pos.x, y: pos.y }}
            defaultClassNameDragging="drag"
          >
            <div className="SignaCreator__textContent SignaCreator__textContent--v1">
              <div className="SignaCreator__text" style={style1}>
                {text1}
              </div>
            </div>
          </Draggable>

          <Draggable
            onStop={handleDragStop}
            position={{ x: pos.x, y: pos.y }}
            defaultClassNameDragging="drag"
          >
            <div className="SignaCreator__textContent SignaCreator__textContent--v2">
              <div className="SignaCreator__text" style={style2}>
                {text2}
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default SignaCreator;
