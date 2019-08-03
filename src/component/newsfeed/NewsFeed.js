import React, { Component } from 'react'

import { Button } from 'react-bootstrap'

import { connect } from 'react-redux';

class NewsFeed extends Component {
    state = {
        counter: 0,
        comments: '',
        flag: 0
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
        console.log('id', id, 'comment', this.state.comments);
        // const obj = {};
        // obj.comments = this.state.comments;
        // obj.id = id;
        // fetch(`http://localhost:4000/comment`, {
        //     method: 'POST',
        //     body: JSON.stringify(obj),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then(function (res) {
        //         return res.json()
        //     })
        //     .then((response) => {
        //         this.setState({
        //             comments: response,
        //             flag: 1
        //         })
        //     });
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
        console.log('inside delete', this.props.post)
        this.props.onclick(this.props.post.postId)
    }
    render() {
        const image = this.props.post.image;
        const postdata = this.props.post.postData;
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
                        <div  class="friends-name">{this.props.user.user[0].firstName} {this.props.user.user[0].surName}</div>
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
                    {/* <div class="card-body"><img className="pic" src={image} alt="img" /></div> */}
                    <div class="card-footer">
                        <button className="likebtn"><i class="far fa-thumbs-up fa-lg" style={{ color: 'white' }}></i></button><> {this.state.counter}</>
                        <div className="createfooter">
                            <ul className="pst">
                                <li><i class="far fa-thumbs-up"></i><button onClick={e => this.countIncrease(this.props.post.postId)} className="likebtn1"> Like</button></li>
                                <li><i class="far fa-comment-alt" style={{ color: '#606770' }}></i> Comment</li>
                                <li><i class="fas fa-share" style={{ color: '#606770' }}></i> Share</li>
                            </ul>
                        </div>
                    </div>
                    {((this.state.comments.length > 0) && (this.state.flag === 1)) ?
                        <div className="cmnts">
                            {this.state.comments.map((cmnts) =>
                                <div><img className="round-img-cmnts" src={this.props.user.user[0].Profile_pic} alt="" /><textarea className="comments" cols="50" rows="1">{cmnts.comments}</textarea></div>
                            )}
                        </div>
                        : <div></div>
                    }
                    <div className="cmnts">
                        <img className="round-img-cmnts" src={this.props.user.user[0].Profile_pic} alt="" /><textarea className="comments" name="comments" value={ this.state.comments } placeholder="Write a comment..." rows="1" cols="50" onChange={e => this.change(e)} /><button className="btn btn-primary btn-xs _btnsize" onClick={e => this.commentPost(this.props.post.postId)}>Post</button>
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

