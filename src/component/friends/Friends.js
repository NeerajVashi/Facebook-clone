import React, { Component } from 'react'
import { connect } from 'react-redux'
import Friend from './Friend';
import PendingFriend from  './PendingFriend'
import {sendRequest, deleteRequest, pendingRequest, confirmRequest, deletePendingRequest} from '../../actions/friends'

class Friends extends Component {
    add = (friend) => {
       this.props.dispatch(sendRequest(friend))
    }

    delete = (friend) => {
        this.props.dispatch(deleteRequest(friend))
    }
    myFunction = () => {
        this.props.onclick();
    }
    componentDidMount() {
        const receiverId = this.props.user.user[0].id;
        console.log('user', receiverId);
        this.props.dispatch(pendingRequest(receiverId));
    }
    HomePage = () => (
        <div id="fb">
            <img src="/images/bean1.jpg" alt="Image of woman" />
            <p id="info"><b>Natalie G.</b> <br /> <span>14 mutual friends</span></p>
            <div id="button-block">
                <div id="confirm">Confirm</div>
                <div id="delete">Delete Request</div>
            </div>
        </div>
    );
//---------------------------------------------------------------------------
confirm = (userId) => {
    console.log('^^^^^^^^^^^^^^^^^^^^userI^^^^^^^^^^^^^^^^^^^^^', userId);
    this.props.dispatch(confirmRequest(userId))
}
    // confirm = (id, sender) => {
    //     console.log('confirm');
    //     this.props.dispatch(confirmRequest(id, sender))
    // }
//---------------------------------------------------------------------------------
//----------------------------------------------------------------------------------- 
// deletePendingRequest = (friendId, sender) => {
//         console.log('deleteRequest');
//         this.props.dispatch(deletePendingRequest(friendId,sender))
//     }
deletePendingRequest = (sender) => {
    console.log('deleteRequest');
    this.props.dispatch(deletePendingRequest(sender))
}
//-------------------------------------------------------------------------------------  
    render() {
        const friendRequest = this.props.friendRequest;
        const pendingRequest = this.props.user.pendingRequest;
        console.log('pendingRequest', pendingRequest)
        // const length = friendRequest.length;
        // friendRequest.map((friend) => {
        //     console.log("------")
        //     console.log(friend)
        //     console.log("------")w
        // })
        return (
            // <>
            
            // </>
            // <div>

            //     <this.HomePage val={1} />
            //     <this.HomePage val={1} />
            // </div>
            <div>
            
            <div className="top-friend-text1">Friend Requests</div>
            <div>
            {
                pendingRequest.map((friend, i) => (
                    <PendingFriend singleFriend = {friend} key ={i} onclick = {this.confirm} onclickdelete = {this.deletePendingRequest}/>
                ))
            }
            </div>
            <div className="top-friend-text1">People You May Knows</div>
            <div>
            { friendRequest.map((friend, i) => (
                <Friend singleuser = {friend} key= {i} onclick = {this.add} onclickdelete = {this.delete}/>
            ))
            }
        </div> 
            </div>

            // <div>
            //     {(length > 0) ? (friendRequest.map((friend, i) => (
            //         <this.HomePage val={1} />
            //     ))) : <div></div>
            //     }
            // </div> 

        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Friends);

