import React, { Component } from "react";
import domtoimage from "dom-to-image";
import Draggable from "react-draggable";
import "./SignaCreator.scss";

class SignaCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: 0,
      mouseDown: false,
      disbleDrag: false
    };
  }

  handleMouseDown = e => {
    this.setState({
      mouseDown: true,
      disbleDrag: true
    });
    document.addEventListener("mousemove", e => {
      let { mouseDown } = this.state;
      let target = e.target.parentElement;

      if (mouseDown == true) {
        var center_x = target.offsetLeft + target.offsetWidth / 2;
        var center_y = target.offsetTop + target.offsetHeight / 2;
        var mouse_x = e.pageX;
        var mouse_y = e.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = radians * (180 / Math.PI) * -1 + 90;
        this.setState({
          rotate: degree
        });
      }
    });
  };

  handleMouseUp = e => {
    console.log("up");
    this.setState({
      disbleDrag: false
    });
  };

  componentDidMount() {
    document.addEventListener("mouseup", e => {
      this.setState({
        mouseDown: false
      });
    });
  }

  render() {
    const { text1, text2, fontSize, color } = this.props;
    const path = "./images/" + this.props.name + ".png";
    const style1 = {
      fontSize: `${fontSize}px`,
      color: `${color}`,
      transform: `rotate(${this.state.rotate}deg)`
    };

    const style2 = {
      fontSize: `${fontSize}px`,
      color: `${color}`
    };

    return (
      <div className={"SignaCreator SignaCreator--" + this.props.name}>
        <div className="SignaCreator__content" id="content">
          <img src={path} alt="" className="SignaCreator__img" />

          <Draggable
            defaultClassNameDragging="drag"
            disabled={this.state.disbleDrag}
          >
            <div className="SignaCreator__textContent SignaCreator__textContent--v1">
              <div className="SignaCreator__text" style={style1}>
                <div
                  onMouseDown={this.handleMouseDown}
                  onMouseUp={this.handleMouseUp}
                  className="parent"
                />
                {text1}
              </div>
            </div>
          </Draggable>

          <Draggable defaultClassNameDragging="drag">
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
