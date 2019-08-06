import React, { Component } from 'react'
import {connect} from 'react-redux';
require('../css/styles.css')

class chatbox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             online:''
        }
    }
    
    componentDidMount(){
        console.log(this.props.onlineusers)
        
}
    render() {
        return (
            <div>
                <div>
                    <div className="chat-sidebar " id="onlinelist">
                        
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  }
  
export default connect(mapStateToProps)(chatbox)  
