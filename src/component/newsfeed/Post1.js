import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import {connect} from 'react-redux'

class Post1 extends Component {
    state = {
        commentToggle:0,
        counter: 0,
        comments: '',
        flag: 0,
        likeComment:0,
        userImage:this.props.user.user[0].Profile_pic,
        userId:this.props.user.user[0].id,
        likePost:0,
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    like = () => {
        if(this.state.likePost === 0){
            this.setState({
                likePost:this.props.post.likes + 1
            })
            console.log('like', this.props.post.likes +1)
            const user = {
                likes:this.props.post.likes + 1,
                postId:this.props.post.postId,
                userId:this.props.user.user[0].id
            }
            this.props.likes(user);
        } else {
            this.setState( {
                likePost:this.props.post.likes
            })
            console.log('like', this.props.post.likes)
            const user = {
                likes:this.props.post.likes - 1,
                postId:this.props.post.postId,
                userId:this.props.user.user[0].id
            }
            this.props.likes(user);
        }
      
    }
    commentPost = (id) => {
        this.setState({
            commentToggle:1,
        })
        console.log('id', id, 'comment', this.state.comments);
        const comment = {
            id:id,
            comments:this.state.comments,
            likePost:this.state.likePost,
            likeComment:this.state.likeComment,
            userImage:this.state.userImage,
            userId:this.state.userId,
        }
        console.log('comment', comment);
        this.props.addComment(comment);
    }

    deletePost = () => {
        console.log('inside delete', this.props.post)
        const Id = {
            userId:this.props.user.user[0].id,
            postId:this.props.post.postId
        }
        this.props.deletePost(Id)
    }

    render() {
        const image = this.props.post.image;
        const postdata = this.props.post.postData;
        const comments = this.props.comments;
        return (
            <div>
                <div class="card">
                    <div class="card-header">
    
                        <img className="post-user-image" src={this.props.post.userImage} alt="Avatar" />
                        <div class="friends-name1">{this.props.post.firstName} {this.props.post.surName}</div>
                        <Button variant="light" onClick={this.deletePost} className="delbtn1">Delete</Button>
                    </div>
                    {(image.length === 1) ?
                        <div className="card-body" >{this.props.post.postData}</div>
                        : [((postdata.length === 0) ? <div class="card-body"><img className="pic" src={image} alt="img" /></div>
                            : <div>
                                <div className="card-body" >{this.props.post.postData}</div>
                                <div class="card-body"><img className="pic" src={image} alt="img" /></div>
                            </div>
                        ),
                        ]
                    }
                    <div class="card-footer">
                        <button className="likebtn"><img className="likeimage" alt="" src="./images/facebooklike.png"/></button><> {this.props.post.likes}</>
                        <div className="createfooter">
                            <ul className="pst">
                                <li><i class="far fa-thumbs-up"></i><button onClick={this.like} className="likebtn1"> Like</button></li>
                                <li><i class="far fa-comment-alt" style={{ color: '#606770' }}></i> Comment</li>
                                <li><i class="fas fa-share" style={{ color: '#606770' }}></i> Share</li>
                            </ul>
                        </div>
                    </div>
                    {((comments.length > 0) && (comments[0].postId === this.props.post.postId))  ?
                        comments.map((comment) =>
                            <div><img className="nav-user-image-main-news alignnnnleft" src={comment.userImage} alt="" /><textarea className="comments" cols="50" rows="1">{comment.comments}</textarea></div>
                        )
                        : <></>
                    }
                    <div className="cmnts">
                        <img className="nav-user-image-main-news" src={this.props.user.user[0].Profile_pic} alt="" /><textarea className="comments-main-news" name="comments" value={this.state.comments} placeholder="Write a comment..." rows="1" cols="50" onChange={e => this.change(e)} /><button className="btn btn-primary btn-xs _btnsize" onClick={e => this.commentPost(this.props.post.postId)}>Post</button>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Post1);

