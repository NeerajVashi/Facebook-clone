import React, { Component } from 'react'
import App from './App'
import {connect} from 'react-redux'

class Routes extends Component {
    render() {
        return (
            <App token = {this.props.user.token}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  }
  
export default connect(mapStateToProps)(Routes);
  
