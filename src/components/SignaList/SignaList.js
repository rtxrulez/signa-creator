import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignaList.scss";

class SignaList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let fakeData = [
      {
        id: "",
        url:
          "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkcZ-AjJJrTOR0iQewSbnrHqaKTM5SRkZCeTgDn6uOyic",
        texts: [
          {
            text: "Какой то текст1",
            x: 20,
            y: 10,
            rotate: 90,
            fontSize: 20,
            color: "#00ff00",
            shadow: "#ff0000"
          },
          {
            text: "Какой то текст2",
            x: 20,
            y: 30,
            rotate: 90,
            fontSize: 20,
            color: "#0000ff",
            shadow: "#ff0000"
          }
        ]
      },
      {
        id: "",
        url:
          "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkcZ-AjJJrTOR0iQewSbnrHqaKTM5SRkZCeTgDn6uOyic",
        texts: [
          {
            text: "Какой то текст1",
            x: 20,
            y: 10,
            rotate: 90,
            fontSize: 20,
            color: "#00ff00",
            shadow: "#ff0000"
          },
          {
            text: "Какой то текст2",
            x: 20,
            y: 30,
            rotate: 90,
            fontSize: 20,
            color: "#0000ff",
            shadow: "#ff0000"
          }
        ]
      }
    ];

    return (
      <div className="signaList">
        <h1>List Created signa</h1>
        <div className="signaList__content">
          <ul className="signaList__menu">
            {fakeData.map((val, k) => {
              return (
                <li className="signaList__item" key={k}>
                  <Link to="/">
                    <img src={val.url} alt={k} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SignaList;
