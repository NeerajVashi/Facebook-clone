import React, { Component } from 'react'
import {connect} from 'react-redux'
require('./css/createpost.css')

class createpost extends Component {
    render() {
        return (
            <div>
                <div class="card">
                               <div className="card-header">Create Post</div>
                               <div className="card-body"><textarea className="postcss" name = "post"
                                rows="5" cols="55" placeholder = "What's on your mind, neeraj?">
                               </textarea></div>
                               <div className="card-footer">
                                   <div className = "createfooter">
                                       <div className="footer"><i class="fas fa-photo-video fa-lg"></i></div>
                                       <div className="footer"><i class="fas fa-user-tag fa-lg"></i></div>
                                       <div className="footer"><i class="far fa-grin-hearts fa-lg"></i></div>
                                       <div className="footer"><i class="fas fa-ellipsis-h fa-lg"></i></div>
                                       <div className="footer"><button onclick = {e => this.onSubmit(e)}className="postbtn">Post</button></div>
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

export default connect(mapStateToProps)(createpost);

