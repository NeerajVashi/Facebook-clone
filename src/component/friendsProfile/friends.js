import React, { Component } from 'react'

export default class Friends extends Component {
    render() {
        const friend = this.props.friend;
        return (
            <div>
                <div>
                    <a class=" _8t lfloat _ohe" href=" " data-hovercard-prefer-more-content-show="1">
                        <img class="img" alt="" src={friend.Profile_pic} width="200px" height="200px" role="img" />
                    </a>
                    <a href=" " >{friend.senderFirstName} {friend.senderSurName}</a><br />
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
