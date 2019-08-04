import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {sendRequest} from '../../actions/friends'

class Friend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: this.props.singleuser.firstName,
            surname: this.props.singleuser.surname,
            userId: this.props.singleuser.userId,
            senderId: this.props.singleuser.friendId,
            user: this.props.singleuser.user,
            status: this.props.singleuser.status
        }
    }
    addFriend = () => {
        console.log('**************single User*************');
        console.log('add', this.state);
        const user = this.props.user.user;
        console.log('username', user[0].firstName, user[0].surName)
        // const sender = {
        //     status: 'sent',
        //     firstName: this.props.singleuser.firstName,
        //     surName: this.props.singleuser.surname,
        //     senderId: this.props.singleuser.userId,
        //     senderFirstName: user[0].firstName,
        //     senderSurName: user[0].surName,
        //     senderImage:user[0].Profile_pic,
        //     receiverImage:this.props.singleuser.Profile_pic

        // }
        const request = {
            receiverId:this.props.user.user[0].id,
            senderId:this.props.singleuser.id,
            senderFirstName:this.props.user.user[0].firstName,
            senderSurname:this.props.user.user[0].surName,
            senderProfile_pic:this.props.user.user[0].Profile_pic,
            receiverFirstName:this.props.singleuser.firstName,
            receiverSurname:this.props.singleuser.surName,
            receiverProfile_pic:this.props.singleuser.Profile_pic
        }
        // console.log('sender', sender);
        // // this.props.dispatch(sendRequest(this.state.senderId, sender))
        this.props.onclick(request);
    }

    deleteRequest = () => {
        console.log('delete');
        const request = {
            receiverId:this.props.user.user[0].id,
            senderId:this.props.singleuser.id,
            senderFirstName:this.props.user.user[0].firstName,
            senderSurname:this.props.user.user[0].surName,
            senderProfile_pic:this.props.user.user[0].Profile_pic,
            receiverFirstName:this.props.singleuser.firstName,
            receiverSurname:this.props.singleuser.surName,
            receiverProfile_pic:this.props.singleuser.Profile_pic
        }
        this.props.onclickdelete(request)
    }
    render() {
        // const user = this.props.singleuser;
        console.log('---------user-----------------', this.state);
        return (
            <div id="fb">
                {/* <ul className="ul-1">
                <li className="ul-2">Request</li>
            </ul> */}
                {/* <ul className="confirm-ul-1">
       
                <li className="confirm-li-1"><img src="/images/bean.jpg" alt="Image of woman" className="friend-request-image"/></li>
                <li className="confirm-li-2">
                    <div className="confirm-user-name">{this.props.singleuser.firstName} {this.props.singleuser.surname}</div>
                    <div className="confirm-buttons">
                    <div onClick = {this.addFriend} id="confirm">{this.props.singleuser.status}</div>
                    <div onClick = {this.deleteRequest} id="delete">Delete Request</div>
                    </div>
                </li>
            </ul> */}
                <div className="confirm-ul-1">
                    <div>
                        <img src={this.props.singleuser.Profile_pic} alt="Image of woman" className="friend-request-image" />
                    </div>
                    <div className="li-1">
                    <div>
                    <p id="info"><b>{this.props.singleuser.firstName} {this.props.singleuser.surname}</b> <br /> <span>14 mutual friends</span></p>
                    </div>
                        <div id="button-block">
                            <div onClick={this.addFriend} id="confirm">{this.props.singleuser.status}</div>
                            <div onClick={this.deleteRequest} id="delete">Delete Request</div>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(Friend);

