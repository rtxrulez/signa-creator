import React, { Component } from "react";
import domtoimage from "dom-to-image";
import "./Signa.scss";

class Signa extends Component {
  componentDidMount() {
    setTimeout(() => {
      var node = document.getElementById("content");

      domtoimage
        .toPng(node)
        .then(function(dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function(error) {
          console.error("oops, something went wrong!", error);
        });
    }, 50);
  }
  render() {
    return (
      <div className="signa">
        <div className="signa__wrapper">
          <h1 className="signa__head">Signa Creater</h1>
          <div className="signa__content" id="content">
              <img src="./images/vika.png" alt="" className="signa__img"/>
              <div className="signa__text signa__text--str1">Test TestTestTestTest</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signa;
