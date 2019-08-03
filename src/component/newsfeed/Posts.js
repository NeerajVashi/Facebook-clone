import React, { Component } from 'react'

export default class Posts extends Component {
    render() {
        const imageLength = this.props.imageLength;
        const postDataLength = this.props.postDataLength;
        const image = this.props.image;
        const postData = this.props.postData;
        // const comments = this.props.user.comment;
        return (
            <div>
                {(imageLength === 1) ?
                    <div className="card-body" >{postData}</div>
                    : [((postDataLength === 0) ? <div class="card-body"><img className="pic" src={image} alt="img" /></div>
                        : <div>
                            <div className="card-body" >{postData}</div>
                            <div class="card-body"><img className="pic" src={image} alt="img" /></div>
                        </div>
                    ),

                    ]
                }
                {/* <div class="card-footer">
                        <button className="likebtn"><i class="far fa-thumbs-up fa-lg" style={{ color: 'white' }}></i></button><> {this.state.counter}</>
                        <div className="createfooter">
                            <ul className="pst">
                                <li><i class="far fa-thumbs-up"></i><button onClick={e => this.countIncrease(this.props.post.postId)} className="likebtn1"> Like</button></li>
                                <li><i class="far fa-comment-alt" style={{ color: '#606770' }}></i> Comment</li>
                                <li><i class="fas fa-share" style={{ color: '#606770' }}></i> Share</li>
                            </ul>
                        </div>
                    </div>
                    {(this.state.toggle === 1)?
                        comments.map((comment) => 
                            <div><img className="round-img-cmnts" src={comment.userImage} alt="" /><textarea className="comments" cols="50" rows="1">{comment.comments}</textarea></div>
                        )
                        :<></>
                    }
                    <div>
                    {
                        comments.map((comment) => 
                            <div><img className="round-img-cmnts" src={comment.userImage} alt="" /><textarea className="comments" cols="50" rows="1">{comment.comments}</textarea></div>
                        )
         
                    }
                    <div className="cmnts">
                        <img className="round-img-cmnts" src={this.props.user.user[0].Profile_pic} alt="" /><textarea className="comments" name="comments" value={ this.state.comments } placeholder="Write a comment..." rows="1" cols="50" onChange={e => this.change(e)} /><button className="btn btn-primary btn-xs _btnsize" onClick={e => this.commentPost(this.props.post.postId)}>Post</button>
                    </div>
                    </div> */}
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//     };
// }

// export default connect(mapStateToProps)( Posts);

