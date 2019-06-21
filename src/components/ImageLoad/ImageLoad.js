import React, { Component } from "react";
import "./ImageLoad.scss";

class ImageLoad extends Component {
  state = {
    file: ""
  };

  loadFile = file => {
    console.log('f', file)
    if (file && file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/svg+xml') {
      alert('Не верный формат файла!')
      return;
    }
    // получение ссылки на файл
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({
        file: e.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  handleFileLoad = e => {
    const file = e.target.files[0];
    console.log('f', file)
    if (file !== undefined) this.loadFile(file);
  };

  handleDelete = () => {
    this.setState({
      file: ''
    })
  }

  render() {
    const { file } = this.state;
    let active = '';

    if (file === '') {
      active = 'active';
    }
    return (
      <form className={"imageLoad " + active}>
        <div className="imageLoad__content">
          <div className="imageLoad__image">
            <span>Добавить изображение</span>
            <img src={file} />
          </div>
          <div className="imageLoad__inputGroup">
            <div className="imageLoad__label">
              <label htmlFor="file" className="imageLoad__add">+</label>
              <input type="file" id="file" onChange={this.handleFileLoad} />
            </div>
            <button onClick={this.handleDelete} className="imageLoad__delete">x</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ImageLoad;
