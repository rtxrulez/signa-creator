import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignaCreator from "../SignaCreator/SignaCreator";
import ElementToImg from "../ElementToImg/ElementToImg";
import { setStorage, getStorage, getStorageState } from "../Storage/storage";
import Layout from "../Layout/Layout";
import "./Signa.scss";

class Signa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...getStorageState(this.props.name),
      loadedImage: false
    };
    setStorage("test", { get: 1 });
  }

  inputText = e => {
    if (e.target.id === "text1") {
      this.setState({
        text1: {
          ...this.state.text1,
          name: e.target.value
        }
      });
    } else {
      this.setState({
        text2: {
          ...this.state.text2,
          name: e.target.value
        }
      });
    }
  };

  selectFormat = e => {
    this.setState({
      typeImg: e.target.value
    });
  };

  handleDragStop = (e, pos) => {
    const { x, y } = pos;
    if (e.target.parentElement.id === "text1") {
      this.setState({
        text1: {
          ...this.state.text1,
          pos: {
            x: x,
            y: y
          }
        }
      });
    } else {
      this.setState({
        text2: {
          ...this.state.text2,
          pos: {
            x: x,
            y: y
          }
        }
      });
    }
  };

  handleFontSize = e => {
    this.setState({
      fontSize: e.target.value
    });
  };

  handleColor = e => {
    this.setState({
      color: e.target.value
    });
  };

  handleRotate = e => {
    this.setState({
      rotate: e.target.value
    });
  };

  handleGenerate = () => {
    const node = document.getElementById("content");
    const typeImg = this.state.typeImg;
    ElementToImg(node, typeImg);
  };

  handleLoadImage = () => {
    console.log("loaded");
    this.setState({
      loadedImage: true
    });
  };

  render() {
    const {
      text1,
      text2,
      typeImg,
      fontSize,
      color,
      rotate,
      loadedImage
    } = this.state;
    const { name } = this.props;
    setStorage(name, this.state);
    return (
      <Layout>
        <div className="container signa">
          <div className="signa__content">
            <SignaCreator
              name={name}
              text1={text1}
              text2={text2}
              type={typeImg}
              fontSize={fontSize}
              color={color}
              rotate={rotate}
              handleLoadImage={this.handleLoadImage}
              handleDragStop={this.handleDragStop}
            />
          </div>
          <div className="signa__form">2</div>
          {/*
          <div className={"signa__form " + (loadedImage ? "show" : "hidden")}>
            <div className="form-line form-line-between ">
              <label className="form-line">
                <span>Поворот текста: </span>
                <input
                  type="range"
                  className="form-control"
                  min="-180"
                  max="180"
                  onChange={this.handleRotate}
                  defaultValue={rotate}
                />
                <span>{rotate}</span>
              </label>
            </div>

            <hr />

            <label className="signa__label">
              <input
                type="text"
                className="form-control signa__input"
                id="text1"
                onChange={this.inputText}
                placeholder={text1.name}
              />
            </label>

            <label className="signa__label">
              <input
                type="text"
                className="form-control signa__input"
                id="text2"
                onChange={this.inputText}
                placeholder={text2.name}
              />
            </label>
            <hr />

            <div className="form-line form-line-between ">
              <label className="form-line">
                <span>Размер шрифта: </span>
                <input
                  type="range"
                  className="form-control"
                  min="10"
                  max="40"
                  onChange={this.handleFontSize}
                  defaultValue={fontSize}
                />
                <span>{fontSize}</span>
              </label>
            </div>

            <hr />

            <div className="form-line form-line-between">
              <label className="form-line">
                <span>Цвет текста: </span>
                <input
                  type="color"
                  onChange={this.handleColor}
                  defaultValue={color}
                />
              </label>
            </div>

            <hr />
            <div className="form-line form-line-between">
              <div>
                <Link to="/" className="btn btn-danger">
                  Назад
                </Link>
              </div>
              <div className="form-line">
                <select
                  value={typeImg}
                  onChange={this.selectFormat}
                  className="form-control"
                >
                  <option value="jpg">jpg</option>
                  <option value="png">png</option>
                </select>
                <button
                  className="btn btn-success"
                  onClick={this.handleGenerate}
                >
                  Скачать
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </Layout>
    );
  }
}

export default Signa;
