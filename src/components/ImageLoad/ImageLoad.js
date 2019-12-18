import React, { Component } from "react";
import "./ImageLoad.scss";

class ImageLoad extends Component {
  state = {
    file: ""
  };

  loadFile = file => {
    console.log("f", file);
    if (
      file &&
      file.type !== "image/png" &&
      file.type !== "image/jpeg" &&
      file.type !== "image/svg+xml"
    ) {
      alert("Не верный формат файла!");
      return;
    }
    // получение ссылки на файл
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({
        file: e.target.result
      });
      this.props.handleLoadImage();
    };
    reader.readAsDataURL(file);
  };

  handleFileLoad = e => {
    const file = e.target.files[0];
    if (file !== undefined) return this.loadFile(file);
    console.log("Не удалось загрузить файл!");
  };

  handleDelete = () => {
    this.setState({
      file: ""
    });
  };

  render() {
    const { file } = this.state;
    const { imageUrl } = this.props;
    let statusImageClass = "";
    console.log("img", this.props);

    if (file === "") {
      statusImageClass = "noload";
    } else {
      statusImageClass = "load";
    }
    return (
      <form className={"imageLoad " + statusImageClass}>
        <div className="imageLoad__content">
          <div className="imageLoad__image">
            <span>Загрузить изображение</span>
            <img src={imageUrl === "" ? file : imageUrl} />
          </div>
          {imageUrl === "" ? (
            <div className="imageLoad__inputGroup">
              <div className="imageLoad__label">
                <label htmlFor="file" className="imageLoad__add">
                  +
                </label>
                <input type="file" id="file" onChange={this.handleFileLoad} />
              </div>
              <button
                onClick={this.handleDelete}
                className="imageLoad__delete"
              ></button>
            </div>
          ) : (
            undefined
          )}
        </div>
      </form>
    );
  }
}

export default ImageLoad;
