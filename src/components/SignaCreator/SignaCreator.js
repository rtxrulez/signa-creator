import React, { Component } from "react";
import Draggable from "react-draggable";
import ImageLoad from "../ImageLoad/ImageLoad";
import "./SignaCreator.scss";

class SignaCreator extends Component {
  constructor(props) {
    super(props);
  }

  changeSelectText = (k) => {
    this.props.handleSelectText(k)
  }

  render() {
    const { textList, handleDragStop, handleSelectText, handleLoadImage } = this.props;

    const textInDom = textList.map((v, k) => {
      const style = {
        fontSize: `${v.fontSize}px`,
        color: `${v.color}`,
        transform: `rotate(${v.rotate}deg)`
      };

      return (
        <Draggable
          onStop={(e, pos) => handleDragStop(e, pos, k)}
          position={{ x: v.pos.x, y: v.pos.y }}
          defaultClassNameDragging="drag"
          key={k}
        >
          <div
            id={`text${k}`}
            onClick={ this.changeSelectText }
            className={`SignaCreator__textContent SignaCreator__textContent--v${k}`}
          >
            <div ref={v.rotate} className="SignaCreator__text" style={style}>
              {v.name}
            </div>
            <button className="SignaCreator__btn"></button>
          </div>
        </Draggable>
      );
    });

    return (
      <div className={"SignaCreator SignaCreator--ogo"}>
        <div className="SignaCreator__content" id="content">
          <ImageLoad handleLoadImage={handleLoadImage} />

          {textInDom}
        </div>
      </div>
    );
  }
}

export default SignaCreator;
