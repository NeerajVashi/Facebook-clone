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
                        <Button variant = "danger" onClick = {e => this.props.delPost(this.props.post.postId)} className = "delbtn">Delete</Button>
                    </div>
                    <div class="card-body"><img className="pic" src = {this.props.img.img} alt="img" /></div>
                    <div class="card-footer">

                        <div className = "createfooter">
                            <div className="footer"><i class="far fa-thumbs-up" style={{color:'blue'}}><Button className = "likebtn" variant="info" onClick = {e => this.countIncrease(this.props.post.postId)}>{this.state.counter}</Button></i></div>
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
                    <div className = "cmnts">
                        <img className="round-img-cmnts"src="/images/riverdale.jpg" alt=""/><textarea className = "comments" name="comments" placeholder="Write a comment..." rows="1" cols="50" onChange = {e => this.change(e)}/>
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