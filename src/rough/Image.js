import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li id="notification_li">
                        <a href="#" id="notificationLink">Notifications</a>
                    </li>
                    <li><a href="#">Link4</a></li>
                </ul>
                <li id="notification_li">
                    <span id="notification_count">3</span>
                    <a href="#" id="notificationLink">Notifications</a>
                    <div id="notificationContainer">
                        <div id="notificationTitle">Notifications</div>
                        <div id="notificationsBody" class="notifications"></div>
                        <div id="notificationFooter"><a href="#">See All</a></div>
                    </div>
                </li>
            </div>
        )
    }
}
