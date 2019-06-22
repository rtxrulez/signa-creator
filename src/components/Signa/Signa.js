import React, { Component } from "react";
import domtoimage from "dom-to-image";
import "./Signa.scss";

class Signa extends Component {
  /**
   * Gets a filename
   *
   * @returns {string}
   */
   getName() {
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

  /**
   * Saves a DOMnode as an image to desired file
   *
   * @param node
   */
  generateToImg(node, extension = 'jpg') {
    let self = this;
    let methodToUse = extension == 'jpg' ? 'toJpeg' : 'toPng';
    domtoimage[methodToUse](node, {
      quality: 1,
      width: node.offsetWidth,
      height: node.offsetHeight,
      bgcolor: "#FF"
    })
    .then(function(dataUrl) {
      let link = document.createElement("a");

      link.download = self.getName();
      link.href = dataUrl;
      link.click();
    })
    .catch(function(error) {
      console.error("oops, something went wrong!", error);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      text: [
        "text 1",
        "text 2"
      ],
    };
  }
  componentDidMount() {
    // setTimeout(() => {
    //   var node = document.getElementById("content");
    //   generateToImg(node);
    // }, 50);
  }

  inputText = (index, e) => {
    let state = this.state;
    state.text[index] = e.target.value;
  };

  generate = () => {
    let node = document.getElementById("content");
    this.generateToImg(node);
  };

  signaFormInputs = () => {
    let blocks = [];
    let self = this;
    let state = self.state;

    state.text.forEach((val, index) => {
      let block = <label className="signa__label">
        <input
          type="text"
          className="form-control signa__input"
          id="text1"
          onChange={(e) => this.inputText(index, e)}
          defaultValue={val}
        />
      </label>

      blocks.push(block);
    })

    return blocks;
  }

  signaFormTexts = () => {
    let self = this;
    let blocks = [];
    this.state.text.forEach((val, index) => {
      let block =
        <div className={`signa__text signa__text--str${index + 1}`}>
          {val}
        </div>

      blocks.push(block);
    });


    return (
      <div className="signa__content" id="content">
        {/* @todo: Make it dynamic */}
        <img src="./images/vika.png" alt="" className="signa__img" />
        { blocks }
      </div>
    )
  }

  render() {
    let { text } = this.state;
    return (
      <div className="signa-app">
        <h1>Signa Creator</h1>
        <p>Создайте свою картинку, скачайте и го работать!</p>
        <div className="signa">
          { this.signaFormTexts() }
          <div className="signa__form">
            { this.signaFormInputs() }
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
