import React, { Component } from 'react'
require('./css/createpost.css')
class createpost extends Component {
    render() {
        return (
            <div>
                <div class="card">
                               <div className="card-header">Create Post</div>
                               <div className="card-body"><textarea className="postcss" name = "post"
                                rows="5" cols="55" placeholder = "What's on your mind, Sourabh?">
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
export default  createpost;