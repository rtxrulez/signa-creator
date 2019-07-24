import React, { Component } from "react";
import Draggable from "react-draggable";
import ImageLoad from "../ImageLoad/ImageLoad";
import "./SignaCreator.scss";

class SignaCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text1, text2, fontSize, color, handleDragStop, handleLoadImage } = this.props;

    let Img = (
      <img
        src={"./images/" + this.props.name + ".png"}
        alt=""
        className="SignaCreator__img"
      />
    );

    if (this.props.name === "newImage") {
      Img = <ImageLoad handleLoadImage={handleLoadImage} />;
    }

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
          {Img}

          <Draggable
            onStop={handleDragStop}
            position={{ x: text1.pos.x, y: text1.pos.y }}
            defaultClassNameDragging="drag"
          >
            <div
              id="text1"
              className="SignaCreator__textContent SignaCreator__textContent--v1"
            >
              <div
                ref={this.rotate1}
                className="SignaCreator__text"
                style={style1}
              >
                {text1.name}
              </div>
            </div>
          </Draggable>

          <Draggable
            onStop={handleDragStop}
            id="text2"
            position={{ x: text2.pos.x, y: text2.pos.y }}
            defaultClassNameDragging="drag"
          >
            <div
              id="text2"
              className="SignaCreator__textContent SignaCreator__textContent--v2"
            >
              <div className="SignaCreator__text" style={style2}>
                {text2.name}
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default SignaCreator;
