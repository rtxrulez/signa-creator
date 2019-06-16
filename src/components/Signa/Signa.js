import React, { Component } from 'react'
import domtoimage from 'dom-to-image';

class Signa extends Component {
    componentDidMount() {
        console.log('d', domtoimage)
    }
    render() {
        return (
            <div>
                <div id="vartext">Text</div>
                <h1>Signa Creater</h1>
               <img src="./images/main.png" alt=""/>
            </div>
        )
    }
}

export default Signa
