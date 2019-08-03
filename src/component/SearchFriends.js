import React, { Component } from 'react'
import '../css/styles.css'
export default class frndsTable extends Component {
    render() {
        return (
            <div className = "searchfrnds">
                <img className = "frnds-round" src = "/images/metal.jpg" alt="" />
                <div className = "txt">Person's Name</div>
                <div className = "searchfrndbtn"><button><i class="fas fa-user-plus"></i>Add friend</button></div>
                <div className="srchtxt">Chitkara University, Rajpura, Patiala, Punjab</div>
                <div className="srchtxt1">32 mutual friends including Parul Singla and Karun Ahuja</div>
            </div>
        )
    }
}
