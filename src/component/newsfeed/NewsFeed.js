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
            console.log(response);
            
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
            console.log(this.state.comments);
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
        console.log('typeof is');
        console.log(typeof this.state.comments);
        return (
            <div>
                <div class="card">              
                    <div class="card-header">
                        <img className="round-img" src = {this.props.post.mainImg} alt="Avatar" />
                        <div>Metallica</div>
                        <button onClick = {e => this.props.delPost(this.props.post.postId)} className = "delbtn">Delete</button>
                    </div>
                    {(this.props.post.postData.includes('jpg') === true || this.props.post.postData.includes('jpeg') === true || this.props.post.postData.includes('png') === true) ?
                    <div class="card-body"><img src = {this.props.post.postData} alt="img" /></div>
                    : <div class="card-body">{this.props.post.postData}</div>}
                    <div class="card-footer">

                        <div className = "createfooter">
                            <div className="footer"><i class="far fa-thumbs-up"><Button variant="info" onClick = {e => this.countIncrease(this.props.post.postId)}>{this.state.counter}</Button></i></div>
                            <div className="footer"><i class="far fa-comment-alt"> Comment</i></div>
                            <div><i class="fas fa-share"> Share</i></div>
                        </div>
                    </div>
                    {((this.state.comments.length > 0) && (this.state.flag === 1)) ?
                    <div>
                        { this.state.comments.map((cmnts) => 
                            <div><textarea cols="60" rows="1">{cmnts.comments}</textarea></div>
                        )}
                    </div>
                    :<div className = "display"><textarea cols="60" rows="1"></textarea></div>
                    }
                    <div>
                        <img className="round-img-cmnts"src={this.props.post.mainImg} alt=""/><textarea className = "cmnts" name="comments" placeholder="Write a comment..." rows="1" cols="60" onChange = {e => this.change(e)}/><button onClick = {e => this.commentPost(this.props.post.postId)} className="cmnt">Comment</button>
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