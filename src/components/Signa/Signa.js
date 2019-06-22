import React, { Component } from "react";
import domtoimage from "dom-to-image";
import "./Signa.scss";

function getName() {
  let d = new Date();
  return (
    "signa_" +
    d.getFullYear() +
    d.getMonth() +
    d.getDate() +
    "_" +
    (d.getTime() % (24 * 1000)) +
    ".jpg".toString()
  );
}

function generateToImg(node) {
  domtoimage
    .toJpeg(node, {
      quality: 1,
      width: node.offsetWidth,
      height: node.offsetHeight,
      bgcolor: "#FF"
    })
    .then(function(dataUrl) {
      let link = document.createElement("a");

      link.download = getName();
      link.href = dataUrl;
      link.click();
    })
    .catch(function(error) {
      console.error("oops, something went wrong!", error);
    });
}
class Signa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "Im",
      text2: "Vica"
    };
  }
  componentDidMount() {
    // setTimeout(() => {
    //   var node = document.getElementById("content");
    //   generateToImg(node);
    // }, 50);
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

  generate = () => {
    const node = document.getElementById("content");
    generateToImg(node);
  };

  render() {
    const { text1, text2 } = this.state;
    return (
      <div className="signa-app">
        <h1>Signa Creator</h1>
        <p> Создайте свою картинку, скачайте и го работать!</p>
        <div className="signa">
          <div className="signa__content" id="content">
            <img src="./images/vika.png" alt="" className="signa__img" />
            <div className="signa__text signa__text--str1">{text1}</div>
            <div className="signa__text signa__text--str2">{text2}</div>
          </div>
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
            <button className="btn btn-success" onClick={this.generate}>
              Скачать
            </button>

          </div>
        </div>
      </div>
    );
  }
}

export default Signa;
