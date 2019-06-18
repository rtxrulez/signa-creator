import React, { Component } from "react";
import SignaCreator from "../SignaCreator/SignaCreator"
import ElementToImg from "../ElementToImg/ElementToImg"
import "./Signa.scss";


class Signa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "Im",
      text2: "",
      typeImg: "jpg"
    };
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

  handleGenerate = () => {
    const node = document.getElementById("content");
    const typeImg = this.state.typeImg;
    ElementToImg(node, typeImg);
  };

  render() {
    const { text1, typeImg } = this.state;
    const { fileName } = this.props
    const text2 = fileName
    return (
      <div className="signa-app">
        <h1>Signa Creator</h1>
        <p> Создайте свою картинку, скачайте и го работать!</p>
        <div className="signa">

          <SignaCreator name="nasty" text1={text1} text2={text2} type={typeImg}></SignaCreator>
          {/* <SignaCreator name={fileName} text1={text1} text2={text2} type="jpg"></SignaCreator> */}

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
            <div className="form-line">
              <button className="btn btn-success" onClick={this.handleGenerate}>
                Скачать
              </button>
              <select
                value={typeImg}
                onChange={this.selectFormat}
                className="form-control"
              >
                <option value="jpg">jpg</option>
                <option value="png">png</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signa;
