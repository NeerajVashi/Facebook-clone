import React, { Component } from 'react'
import Post1 from  './Post1'
import {connect} from 'react-redux'
import {delPost, addComment, like} from '../../actions/postAction'

class NewsFeeds extends Component {

    addcomments = (comment) => {
        this.props.dispatch(addComment(comment));
    }

    deletePost = (id) => {
        this.props.dispatch(delPost(id));
    }

    postLike = (postId, user) => {
        console.log('like', postId, user);
        this.props.dispatch(like(postId, user))
    }

    render() {
        const postData = this.props.posts;
        const comments = this.props.user.comments;
        return (
            <div>
                <div>{postData.map((post, index) =>
                    <div key={index}>
                <Post1  post={post} deletePost={this.deletePost} addComment = {this.addcomments} likes = {this.postLike} comments = {comments}/>
                    </div>
                )}  </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(NewsFeeds);


