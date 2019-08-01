import React, { Component } from 'react'
import './image.css'
export default class Image extends Component {
    render() {
        return (
            <div class="card container-div">
            <div className="heading-div">heading</div>
            <div class="column1">
                <div class="image-column">
                    <img className="request-image" src="./images/bean.jpg" alt="Card image cap" />
                </div>
            </div>
            <div className="column2">
                <ul>
                    <li>list1</li>
                    <li>list1</li>
                    <li>list2</li>
                </ul>

            </div>
            </div>
            
        )
    }
}
