import React, { Component } from 'react'
import {connect} from 'react-redux';

class FriendCards extends Component {
    addFriend = () => {
        console.log('add');
        console.log('add', this.state);
        console.log('this.props.user', this.props.user)
        const user = this.props.user.user;
        console.log('username', user[0].firstName, user[0].surName)
        const sender = {
            status:'sent',
            firstName:this.props.singleuser.firstName,
            surName:this.props.singleuser.surname,
            senderId:this.props.singleuser.userId,
            senderFirstName:user[0].firstName,
            senderSurName:user[0].surName
        }
        this.props.onclick(this.props.singleuser.friendId, sender);
    }

    deleteRequest = () => {
        console.log('delete');
        this.props.onclickdelete(this.props.singleuser.friendId,this.props.singleuser.userId)
    }
    render() {
        const user = this.props.singleuser;
        // if(user.status === 'Add Friend') {
        //     return (
        //         <div class="card w-50 p-3">
        //             <div class="card-footer">
        //                 <div className="createfooter">
        //                     <div className="footer pd-2"> <img className="round-img" src="/images/bean.jpg" alt="Avatar" />{user.firstName} {user.surname}</div>
        //                     <div className="footer"> <button onClick = {this.addFriend} type="button" class="btn">{user.status}</button></div>
        //                     <div><button onClick = {this.deleteRequest} type="button" class="btn">Delete</button></div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <>

        //         </>
        //     )
        // }
        if(user.status === 'Add Friend') {
            return (
                <div class="row">
                <div class="col-sm-3">
                    <img className=" friends-images " src="./images/bean.jpg" alt="Card image cap" />
                </div>
                <div class="col-sm-9">
                    <ul className="friend-card-container">
                        <li><div class="friends-name">{user.firstName} {user.surname}</div></li>
                        <li><div className="mutual-friend">13 Friend</div></li>
                        <li><div onClick = {this.deleteRequest} className="friends-request-response"><div className="add-button"><img className="add-button-icon" src="./images/addIcon.png" /> Add Friend</div><div className="delete-button">Delete</div></div></li>
                    </ul>
                </div>
            </div>
            )
        } else {
            return (
                <>

                </>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(FriendCards);

