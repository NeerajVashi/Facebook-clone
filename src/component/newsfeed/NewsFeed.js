import React, { Component } from 'react'

import { Button } from 'react-bootstrap'

import { delPost } from '../../actions/postAction';

import propTypes from 'prop-types'

import { connect } from 'react-redux';

class NewsFeed extends Component {
    state = {
        counter: 0,
        comments: [],
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
        console.log('id');
        console.log(id);
        const obj = {};
        obj.comments = this.state.comments;
        obj.id = id;
        fetch(`http://localhost:4000/comment`,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(function (res) {
            return res.json()
            })
        .then((response) => {
            this.setState({
                comments: response,
                flag:1    
            })
        });
    }
    countIncrease = (postId) => {
        fetch(`http://localhost:4000/updLikes/${postId}`)
        .then(res => res.json())
        .then(response => console.log(response));
            if(this.state.counter === 0) {
                this.setState({
                    counter: this.state.counter + 1
                })
            }
    }
    render() {
        return (
            <div>
                <div class="card">              
                    <div class="card-header">
                        <img className="round-img" src ="abc.jpg" alt="Avatar" />
                        <div>Metallica</div>
                        <Button variant = "light" onClick = {e => this.props.delPost(this.props.post.postId)} className = "delbtn">Delete</Button>
                    </div>
                    {/* {(this.props.img.img.includes('JPEG') || (this.props.img.img.includes('jpeg')) || (this.props.img.img.includes('png')) || (this.props.img.img.includes('PNG')) || (this.props.img.img.includes('JPG')) || (this.props.img.img.includes('JPG')) ) ? 
                    <div class="card-body"><img className="pic" src = {this.props.img.img} alt="img" /></div>
                    : <div className = "card-body" >{this.props.post.postData}</div>} */}
                    {(this.props.post.postData !== ' ') ?
                    <div className = "card-body" >{this.props.post.postData}</div>
                    :<div class="card-body"><img className="pic" src = {this.props.img.img} alt="img" /></div>
                    }
                    <div class="card-body"><img className="pic" src = {this.props.img.img} alt="img" /></div>
                    <div class="card-footer">
                        <button className = "likebtn"><i class="far fa-thumbs-up fa-lg" style={{color:'white'}}></i></button><> {this.state.counter}</>
                        <div className = "createfooter">
                            <ul className = "pst">
                                <li><i class="far fa-thumbs-up"></i><button onClick = {e => this.countIncrease(this.props.post.postId)} className = "likebtn1"> Like</button></li>
                                <li><i class="far fa-comment-alt" style={{color:'#606770'}}></i> Comment</li>
                                <li><i class="fas fa-share"style={{color:'#606770'}}></i> Share</li>
                            </ul>
                        </div>
                    </div>
                    {((this.state.comments.length > 0) && (this.state.flag === 1)) ?
                    <div className="cmnts">
                        { this.state.comments.map((cmnts) => 
                            <div><img className="round-img-cmnts"src="/images/riverdale.jpg" alt=""/><textarea className = "comments" cols="50" rows="1">{cmnts.comments}</textarea></div>
                        )}
                    </div>
                    :<div></div>
                    }
                    <div className = "cmnts">
                        <img className="round-img-cmnts"src="/images/riverdale.jpg" alt=""/><textarea className = "comments" name="comments" placeholder="Write a comment..." rows="1" cols="50" onChange = {e => this.change(e)}/><button className="btn btn-primary btn-xs _btnsize" onClick = {e => this.commentPost(this.props.post.postId)}>Post</button>
                    </div>
                </div>
                <br /> 
            </div>
        )
    }
}
NewsFeed.propTypes = {
    delPost: propTypes.func.isRequired,
}
export default connect(null, { delPost })(NewsFeed);