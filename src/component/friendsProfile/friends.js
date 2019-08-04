import React, { Component } from 'react'
import {connect} from 'react-redux'

class Friends extends Component {
    render() {
        const friend = this.props.friend;
        console.log('friends', friend);
        if( this.props.user.user[0].id === friend.senderId) {
            return (
                <div>
                    <div>
                        <a class=" _8t lfloat _ohe" href=" " data-hovercard-prefer-more-content-show="1">
                            <img class="img" alt="" src={friend.receiverProfile_pic} width="200px" height="200px" role="img" />
                        </a>
                        <a href=" " >{friend.receiverFirstName} {friend.receiverSurName}</a><br />
                        <a href=" "  >44 mutual friends</a>
    
                        <div class="FriendButton" >
                            <button type="button" width="100px">
                                <i class="fas fa-user-friends"></i>Friends
                                </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <a class=" _8t lfloat _ohe" href=" " data-hovercard-prefer-more-content-show="1">
                            <img class="img" alt="" src={friend.senderProfile_pic} width="200px" height="200px" role="img" />
                        </a>
                        <a href=" " >{friend.senderfirstName} {friend.senderSurname}</a><br />
                        <a href=" "  >44 mutual friends</a>
    
                        <div class="FriendButton" >
                            <button type="button" width="100px">
                                <i class="fas fa-user-friends"></i>Friends
                                </button>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = state => ({
    postData: state.user.posts,
    image: state.user.img,
    user:state.user,
})
export default connect(mapStateToProps)(Friends);

