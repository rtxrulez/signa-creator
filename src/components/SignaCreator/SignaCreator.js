import React, { Component } from "react";
import domtoimage from "dom-to-image";
import Draggable from "react-draggable";
import ImageLoad from "../ImageLoad/ImageLoad";
import { Rotate } from "../Rotate/Rotate";
import "./SignaCreator.scss";

let mouseDown = false;

document.addEventListener("mouseup", e => {
  mouseDown = false;
});
class SignaCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false,
      rotate1: -10
    };
    this.rotate1 = React.createRef();
  }

  mouse = evt => {
    const img = this.rotate1.current
    console.log("img", img.top);
    if (mouseDown == true) {
      var center_x = img.offsetLeft + (img.offsetWidth / 2);
      var center_y = img.offsetTop + (img.offsetHeight / 2);
      var mouse_x = evt.pageX;
      var mouse_y = evt.pageY;
      // console.log('')
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree = (radians * (180 / Math.PI) * -1) + 70;
      this.setState({
        rotate1: degree
      })
    }
  };

  // handleMouseDownRotate = e => {
  //   mouseDown = true;
  //   document.addEventListener("mousemove",this.mouse);
  // };

  render() {
    const { text1, text2, fontSize, color, handleDragStop } = this.props;

    let Img = (
      <img
        src={"./images/" + this.props.name + ".png"}
        alt=""
        className="SignaCreator__img"
      />
    );

    if (this.props.name === "newImage") {
      Img = <ImageLoad />;
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

                {/* <div
                  onMouseDown={this.handleMouseDownRotate}
                  className="SignaCreator__control"
                >
                  <div className="SignaCreator__rotate">r</div>
                </div> */}
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
