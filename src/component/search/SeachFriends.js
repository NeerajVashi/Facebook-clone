import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class SeachFriends extends Component {
    render() {
            return (
                <div>
                    <div className="searchfrnds">
                        <img className="frnds-round" src={this.props.friend.Profile_pic} alt="" />
                        <Link to={ {pathname: '/search',
                                  state: {
                                          searchData: this.props.friend
                                          }}}><div className="txt">{this.props.friend.firstName} {this.props.friend.surName}</div></Link>
                        <div className="searchfrndbtn"><button><i class="fas fa-user-plus"></i>Add friend</button></div>
                        <div className="srchtxt">Chitkara University, Rajpura, Patiala, Punjab</div>
                        <div className="srchtxt1">32 mutual friends including Parul Singla and Karun Ahuja</div>
                    </div>
                </div>
            )

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(SeachFriends);

