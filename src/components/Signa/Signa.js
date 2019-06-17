import React, { Component } from "react";
import domtoimage from "dom-to-image";
import "./Signa.scss";

function generateToImg(node) {
  domtoimage
    .toPng(node)
    .then(function(dataUrl) {
      let img = new Image();
      let resultNode = document.getElementById("signa-result");
      let resultNodeHref = document.getElementById("result-href")
      img.src = dataUrl;
      resultNodeHref.href = dataUrl
      resultNode.appendChild(img)

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
    setTimeout(() => {
      var node = document.getElementById("content");

      generateToImg(node);
    }, 50);
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

            <button className="btn btn-primary" onClick={this.generate}>
              Сгенерить
            </button>
            <hr/>

            <a href="" id="result-href">Скачать</a>
          </div>
        </div>
        <div id="signa-result" />
      </div>
    );
  }
}

export default Signa;
