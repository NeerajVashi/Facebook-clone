import React, { Component } from 'react'

import Image from '../images/image'

class firstabout extends Component {
    render() {
        return (
            <div>
                <div className="plussign"><i class="far fa-plus-square"><p>Add a workplace</p></i></div>
                <div className="overviewtab">
                <i class="fas fa-mobile"><p>074042 40967</p></i>
                </div>
                <div className="overviewcake">
                <i class="fas fa-birthday-cake"><p>November 23 1997</p></i>
                </div>

      <div class=" marginleftabout">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div class="w3-container">
          <p>Web Development! All I need to know in one place</p>
          <hr/>
        </div>
    </div>
    
    <div class="w3-container w3-card w3-white marginleftabout">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Lives in</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Karnal</b></h5>
          <hr/>
        </div>
    </div>
    

    <div class="w3-container w3-card w3-white marginleftabout">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Address</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Karnal</b></h5>
          <hr/>
        </div>
    </div>
    <div className="setimageabout"><Image/></div>
        
  </div>
        )
    }
}

export default firstabout