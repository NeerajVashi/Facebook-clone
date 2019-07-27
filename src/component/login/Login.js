import React, { Component } from 'react'
// import history from '../History' 

export default class IsLogin extends Component {
    render() {
        const user = this.props.user;
        console.log('user', user)
        if(user.token.status) {
            alert('successfully Inserted')
            // history.push('/')
        }
        return (
            <input type="submit" name="login" value="Log In" />
        )
    }
}
