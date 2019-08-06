import React, { Component } from 'react'

export default class postnotification extends Component {
    render() {
        return (
            <tr className="notification-border">
                <td ><img src={this.props.notification.userImage} alt="Image of woman" className="notification-image" /></td>
                <td className="notification-content"><b>{this.props.notification.firstName} {this.props.notification.surName}</b> posted an update.</td>
            </tr>
        )
    }
}
