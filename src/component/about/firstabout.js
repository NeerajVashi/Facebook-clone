import React, { Component } from 'react'
import {connect} from 'react-redux';
import Image from '../images/image'

class firstabout extends Component {
    render() {
      const user = this.props.user.user;
       
        return (
            <div>
                <div className="plussign"><i class="far fa-plus-square"><p>Add a workplace</p></i></div>
                <div className="overviewtab">
                <i class="fas fa-mobile"><p>074042 40967</p></i>
                </div>
                <div className="overviewcake">
                <i class="fas fa-birthday-cake"><p>{user[0].DOB}</p></i>
                </div>

      <div class=" marginleftabout">
      <i class="fas fa-graduation-cap"><h2>Education</h2></i>
        <div class="w3-container">
          <p>Web Development! All I need to know in one place</p>
          <hr/>
        </div>
    </div>
    
    <div class="w3-container w3-card w3-white marginleftabout">
    <i class="fas fa-bed"><h2>Lives in</h2></i>
        <div class="w3-container">
          <p>{user[0].Livesin}</p>
          <hr/>
        </div>
    </div>
    

    <div class="w3-container w3-card w3-white marginleftabout">
    <i class="fas fa-address-card"><h2>Address</h2></i>
        <div class="w3-container">
          <p>{user[0].Address}</p>
          <hr/>
        </div>
    </div>
    <div className="setimageabout"><Image/></div>
        
  </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(firstabout)
