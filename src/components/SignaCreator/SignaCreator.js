import React, { Component } from "react";
import Draggable from "react-draggable";
import ImageLoad from "../ImageLoad/ImageLoad";
import "./SignaCreator.scss";

class SignaCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      textList,
      handleDragStop,
      handleSelectText,
      handleLoadImage
    } = this.props;

    const textInDom = textList.map((v, k) => {
      console.log('v', v)
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
            onClick={() => {
              handleSelectText(k);
            }}
            className={`SignaCreator__textContent SignaCreator__textContent--v${k}`}
          >
            <div ref={v.rotate} className="SignaCreator__row" style={style}>
              <div className="SignaCreator__text">{v.name}</div>
              <button className="SignaCreator__btn" />
            </div>
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
