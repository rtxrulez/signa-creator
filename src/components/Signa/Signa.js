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
      // ...getStorageState(this.props.name),
      defaultTextData: {
        name: "Строка 1",
        pos: {
          x: 50,
          y: -50
        },
        fontSize: 20,
        color: "#ccc",
        rotate: 0
      },
      selectTextData: {
        // выбранный текст
      },
      selectKey: 0,
      textList: [
        {
          name: "Строка 1",
          pos: {
            x: 50,
            y: -50
          },
          fontSize: 20,
          color: "#ccc",
          rotate: 0
        }
      ],
      typeImg: "jpg",
      loadedImage: false
    };
    // setStorage("test", { get: 1 });
  }

  inputText = e => {
    const textList = [...this.state.textList];
    textList[this.state.selectKey].name = e.target.value;

    this.setState({
      textList: textList
    });
  };

  selectFormat = e => {
    this.setState({
      typeImg: e.target.value
    });
  };

  handleDragStop = (e, pos, k) => {
    console.log("k", k);

    const { x, y } = pos;

    let textList = [...this.state.textList];

    textList[k].pos.x = x;
    textList[k].pos.y = y;

    this.setState({
      textList: textList
    });
  };

  handleFontSize = e => {
    const textList = [...this.state.textList];
    textList[this.state.selectKey].fontSize = e.target.value;

    this.setState({
      textList: textList
    });
  };

  handleColor = e => {
    this.setState({
      color: e.target.value
    });
  };

  handleRotate = e => {
    const textList = [...this.state.textList];
    textList[this.state.selectKey].rotate = e.target.value;

    this.setState({
      textList: textList
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

  handleAppendText = () => {
    console.log("append");
    let defaultTextData = { ...this.state.defaultTextData };
    let textList = [...this.state.textList];

    let len = textList.length;
    defaultTextData.name = "Строка " + (len + 1);

    textList.push(defaultTextData);
    this.setState({
      textList: textList
    });
  };

  handleSelectText = key => {
    console.log("k", key);
    this.setState({
      selectKey: key
    });
  };

  render() {
    const {
      textList,
      typeImg,
      selectKey,
      selectTextData,
      loadedImage
    } = this.state;

    let { rotate, fontSize, name } = this.state.textList[selectKey];

    return (
      <Layout>
        <div className={"container signa " + (loadedImage ? "show" : "hidden")}>
          <div className="signa__content">
            <SignaCreator
              textList={textList}
              selectTextData={selectTextData}
              type={typeImg}
              handleSelectText={this.handleSelectText}
              handleLoadImage={this.handleLoadImage}
              handleDragStop={this.handleDragStop}
            />
          </div>
          <div className="signa__form">
            <p>Создайте свою картинку, скачайте и го работать!</p>
            <button className="btn btn-primary" onClick={this.handleAppendText}>
              Добавить строку
            </button>
            <hr />
            <label className="signa__label">
              <input
                type="text"
                className="form-control signa__input"
                id="text1"
                onChange={this.inputText}
                value={name}
              />
            </label>

            <hr />
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
          </div>
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
