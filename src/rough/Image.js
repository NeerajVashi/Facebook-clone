import React, { Component } from 'react'
import './image.css'

export default class Images extends Component {
    render() {
        return (
            <div>

                <h2>Dropdown Image</h2>
                <p>Move the mouse over the image below to open the dropdown content.</p>

                <div class="dropdown">
                    <img src="./images/bean.jpg" alt="Cinque Terre" width="100" height="50" />
                    <div class="dropdown-content">
                        <img src="./images/bean.jpg" alt="Cinque Terre" width="300" height="200" />
                        <div class="desc">Beautiful Cinque Terre</div>
                    </div>
                </div>
            </div>

        )
    }
}
