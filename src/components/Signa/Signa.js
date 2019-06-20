import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignaCreator from "../SignaCreator/SignaCreator";
import ElementToImg from "../ElementToImg/ElementToImg";
import {setStorage, getStorage, getStorageState} from "../Storage/storage";
import "./Signa.scss";

class Signa extends Component {
  constructor(props) {
    super(props);
    this.state = getStorageState(this.props.name);
    setStorage("test", {"get": 1})
    console.log(getStorage("test"))
  }

  inputText = e => {
    if (e.target.id === "text1") {
      this.setState({
        text1: e.target.value
      });
    } else {
      this.setState({
        text2: e.target.value
      });
    }
  };

  selectFormat = e => {
    this.setState({
      typeImg: e.target.value
    });
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

  handleGenerate = () => {
    const node = document.getElementById("content");
    const typeImg = this.state.typeImg;
    ElementToImg(node, typeImg);
  };

  render() {
    const { text1, text2, typeImg, fontSize, color } = this.state;
    const { name } = this.props;
    return (
      <div className="signa-app">
        <h1>Signa Creator</h1>
        <p> Создайте свою картинку, скачайте и го работать!</p>
        <div className="signa">
          <SignaCreator
            name={name}
            text1={text1}
            text2={text2}
            type={typeImg}
            fontSize={fontSize}
            color={color}
          />
          <div className="signa__form">
            <label className="signa__label">
              <input
                type="text"
                className="form-control signa__input"
                id="text1"
                onChange={this.inputText}
                defaultValue={text1}
              />
            </label>

            <label className="signa__label">
              <input
                type="text"
                className="form-control signa__input"
                id="text2"
                onChange={this.inputText}
                defaultValue={text2}
              />
            </label>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Signa;
