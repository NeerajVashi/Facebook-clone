import React, { Component } from 'react'

import { Button } from 'react-bootstrap'

import { addComment, Comments } from '../../actions/postAction';
import PostComments from './Comments'
import propTypes from 'prop-types'

import { connect } from 'react-redux';
import { conditionalExpression } from '@babel/types';
import Posts from './Posts';


class NewsFeed extends Component {
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
    componentDidMount() {
        fetch(`http://localhost:4000/fetchLikes/${this.props.post.postId}`)
            .then(res => res.json())
            .then((response) => {
                this.setState({
                    counter: response,
                })
            })
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    commentPost = (id) => {
        this.setState({
            commentToggle:1,
        })
        console.log('id', id, 'comment', this.state.comments);
        const comment = {
            commentToggle:0,
            id:id,
            comments:this.state.comments,
            likePost:this.state.likePost,
            likeComment:this.state.likeComment,
            userImage:this.state.userImage,
            userId:this.state.userId
        }

        console.log('comment', comment);
        this.props.dispatch(addComment(comment));

    }
    countIncrease = (postId) => {
        fetch(`http://localhost:4000/updLikes/${postId}`)
            .then(res => res.json())
            .then(response => console.log(response));
        if (this.state.counter === 0) {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }
    deletePost = () => {
        const Id = {
            userId:this.props.user.user[0].id,
            postId:this.props.post.postId
        }
        this.props.onclick(Id)
    }
    render() {
        const image = this.props.post.image;
        const postdata = this.props.post.postData;
        const comments = this.props.user.comments;
        console.log('comments', comments);
        // eslint-disable-next-line no-undef
        console.log('this.props.post.image', image, 'length', typeof image, 'length', image.length);
        if (image.length === 1) {
            console.log('yes');
        } else {
            console.log('no');
        }
        return (
            <div>
                <div class="card">
                    <div class="card-header">
                        <img  className="post-user-image" src={this.props.user.user[0].Profile_pic} alt="Avatar" />
                        <div  class="friends-name2">{this.props.user.user[0].firstName} {this.props.user.user[0].surName}</div>
                        <Button variant="light" onClick={this.deletePost} className="delbtn">Delete</Button>
                    </div>
                    {/* {(this.props.img.img.includes('JPEG') || (this.props.img.img.includes('jpeg')) || (this.props.img.img.includes('png')) || (this.props.img.img.includes('PNG')) || (this.props.img.img.includes('JPG')) || (this.props.img.img.includes('JPG')) ) ? 
                    <div class="card-body"><img className="pic" src = {this.props.img.img} alt="img" /></div>
                    : <div className = "card-body" >{this.props.post.postData}</div>} */}

                    {/* {(image.length === 1) 
                        ? <div className="card-body" >{this.props.post.postData}</div>
                        : [
                            ((postdata.length === 0)
                                ?<img className="pic" src={image} alt="img" />
                                : null
                            ),
                            <div key='1'>body</div>
                        ]
                    } */}
                    <Posts imageLength = {image.length} postDataLength = {postdata.length} image ={image} postData = {this.props.post.postData}/>


                    {/* {(image.length === 1) ?
                        <div className="card-body" >{this.props.post.postData}</div>
                        : [((postdata.length === 0) ? <div class="card-body"><img className="pic" src={image} alt="img" /></div>
                            : <div>
                                <div className="card-body" >{this.props.post.postData}</div>
                                <div class="card-body"><img className="pic" src={image} alt="img" /></div>
                            </div>
                        ),

                        ]
                    } */}


                    {/* <div class="card-body"><img className="pic" src={image} alt="img" /></div> */}
                    <div class="card-footer">
                    <button className="likebtn"><img className="likeimage" alt="" src="./images/facebooklike.png"/></button><> {this.state.counter}</>
                        <div className="createfooter">
                            <ul className="pst">
                                <li><i class="far fa-thumbs-up"></i><button onClick={e => this.countIncrease(this.props.post.postId)} className="likebtn1"> Like</button></li>
                                <li><i class="far fa-comment-alt" style={{ color: '#606770' }}></i> Comment</li>
                                <li><i class="fas fa-share" style={{ color: '#606770' }}></i> Share</li>
                            </ul>
                        </div>
                    </div>
                    {/* {(this.state.toggle === 1)?
                        comments.map((comment) => 
                            <div><img className="round-img-cmnts" src={comment.userImage} alt="" /><textarea className="comments" cols="50" rows="1">{comment.comments}</textarea></div>
                        )
                        :<></>
                    } */}
                    <PostComments comments = {comments} toggle = {this.state.commentToggle} />
                    <div className="cmnts">
                        <img className="nav-user-image-profile"  src={this.props.user.user[0].Profile_pic} alt="" /><textarea className="comments-profile" name="comments" value={ this.state.comments } placeholder="Write a comment..." rows="1" cols="50" onChange={e => this.change(e)} /><button className="btn btn-primary btn-xs _btnsize" onClick={e => this.commentPost(this.props.post.postId)}>Post</button>
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

export default connect(mapStateToProps)(NewsFeed);

