import React, { Component } from 'react'
import {connect} from 'react-redux'

class PostComments extends Component {

        render() {
        const comments = this.props.user.comments;
        const toggle = this.props.toggle;
        console.log('toggle', toggle, 'comment', comments);
        // return(
        //     <div>
        //     {
        //         comments.map((comment) => 
        //             <div><img className="round-img-cmnts" src={comment.userImage} alt="" /><textarea className="comments" cols="50" rows="1">{comment.comments}</textarea></div>
        //         )
            
        //     }
        //     </div>
        // )
        return (
            <div>
                 {(toggle === 1)?
                        comments.map((comment) => 
                            <div><img className="nav-user-image"  src={comment.userImage} alt="" /><textarea className="comments" cols="50" rows="1">{comment.comments}</textarea></div>
                        )
                        :<></>
                    }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(PostComments);
