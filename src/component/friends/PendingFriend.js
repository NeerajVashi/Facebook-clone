import React, { Component } from 'react'
import {connect} from 'react-redux';

class PendingFriend extends Component {
    addFriend = () => {
        const user = this.props.user.user;
        const sender = {
            senderFirstName:this.props.singleFriend.senderFirstName,
            senderSurname:this.props.singleFriend.senderFirstName,
            receiverFirstName:user[0].firstName,
            receiverSurname:user[0].surName,
            receiverId:user[0].id,
        }
        console.log('user', user, 'sender', sender);
        console.log('addFriend', this.props.singleFriend);
        this.props.onclick(this.props.singleFriend.senderId, sender);
    }
    deleteRequest = () => {
        const user = this.props.user.user;
        const sender = {
            senderFirstName:this.props.singleFriend.senderFirstName,
            senderSurname:this.props.singleFriend.senderFirstName,
            receiverFirstName:user[0].firstName,
            receiverSurname:user[0].surName,
            receiverId:user[0].id,
        }
        console.log('delete Request');
        this.props.onclickdelete(this.props.user.user[0].id, sender);
    }
    render() {
        return (
            <div id="fb">
            <img src="/images/bean1.jpg" alt="Image of woman" />
            <p id="info"><b>{this.props.singleFriend.senderFirstName} {this.props.singleFriend.senderSurname}</b> <br /> <span>14 mutual friends</span></p>
            <div id="button-block">
                <div onClick = {this.addFriend} id="confirm">Confirm</div>
                <div onClick = {this.deleteRequest} id="delete">Delete Request</div>
            </div>
        </div>
        )
    }
}

// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// // import {sendRequest} from '../../actions/friends'

// class Friend extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             firstname:this.props.singleuser.firstName,
//             surname:this.props.singleuser.surname,
//             userId:this.props.singleuser.userId,
//             senderId:this.props.singleuser.friendId,
//             user:this.props.singleuser.user,
//             status:this.props.singleuser.status
//         }
//     }
//     addFriend = () => {
//         console.log('add');
//         console.log('add', this.state);
//         const user = this.props.user.user;
//         console.log('username', user[0].firstName, user[0].surName)
//         const sender = {
//             status:'sent',
//             firstName:this.props.singleuser.firstName,
//             surName:this.props.singleuser.surname,
//             senderId:this.props.singleuser.userId,
//             senderFirstName:user[0].firstName,
//             senderSurName:user[0].surName
//         }
//         // this.props.dispatch(sendRequest(this.state.senderId, sender))
//         this.props.onclick(this.props.singleuser.friendId, sender);
//     }

//     deleteRequest = () => {
//         console.log('delete');
//         this.props.onclickdelete(this.props.singleuser.friendId,this.props.singleuser.userId)
//     }
//     render() {
//         // const user = this.props.singleuser;
//         console.log('user', this.state);
//         return (
//             <div id="fb">
//             <img src="/images/bean1.jpg" alt="Image of woman" />
//             <p id="info"><b>{this.props.singleuser.firstName} {this.props.singleuser.surname}</b> <br /> <span>14 mutual friends</span></p>
//             <div id="button-block">
//                 <div onClick = {this.addFriend} id="confirm">{this.props.singleuser.status}</div>
//                 <div onClick = {this.deleteRequest} id="delete">Delete Request</div>
//             </div>
//         </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(PendingFriend);

