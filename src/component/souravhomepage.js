import React, { Component } from 'react'

import '../css/styles.css'

import FriendCards from './friends/FriendCards';

import { sendRequest, deleteRequest } from '../actions/friends'

import NewsFeed from './newsfeed/NewsFeed'

import propTypes from 'prop-types'

import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postAction'

import { addPost } from '../actions/postAction'
import { Link } from 'react-router-dom'

class Homepage extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    state = {
        userId: 1,
        postData: '',
        likes: 0,
        img: ''
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    Imgsub = (e) => {
        this.setState({
            img: e.target.files[0]
        })
    }
    onSubmit = (e) => {
        const obj1 = {};
        const data= new FormData();
        data.append('userId',this.state.userId);
        data.append('image',this.state.img);
        obj1.userId = this.state.userId;
        obj1.postData = this.state.postData;
        obj1.likes = this.state.likes;
        e.preventDefault();
        this.props.addPost(obj1, data);
    }
    add = (senderId, sender) => {
        console.log('inside add', sender, senderId);
        this.props.sendRequest(senderId, sender)
    }

    delete = (friendId, userId) => {
        this.props.deleteRequest(friendId, userId)
    }
    render() {
        const friendRequest = this.props.user.friendRequest;
        console.log('in home friendRequest', friendRequest);
        return (
            <div>
                <div className="mainpage-container">       {/* main page starts */}
                    <div className="flex-item2 mid-first">
                        <div class="container mid-second">
                            <div class="card">               {/* create post */}
                                <div class="card-header">Create Post</div>
                                <div className="post-and-image">
                                <img src="./images/bean.jpg" className="post-user-image"/>
                                <textarea className = "postdata" name="postData"
                                placeholder = "Write something here..."
                                 onChange = {e => this.change(e)}>
                                </textarea></div>
                                <div class="card-footer">
                                    <div className = "createfooter1">
                                        <ul className = "post-footer" >
                                            <li className = "li">
                                                <div>
                                                    <div className = "fk">
                                                    <div className="space buttonwrapper1"><button className="addimg"><i class="fas fa-photo-video fa-lg" style={{color:'blue'}}></i> Photo</button> <input name="img" type="file" defaultValue={this.state.img} onChange={e => this.Imgsub(e)}/></div>
                                                    <div className="space1"><i class="fas fa-user-tag fa-lg" style={{color:'blue'}}></i><> Tag Friends</></div>
                                                    <div className="space"><i class="far fa-grin fa-lg" style={{color:'orange'}}></i><> Feeling</></div>
                                                    <div className="space _clr"><button onClick = {e => this.onSubmit(e)} className="postbtn">Post</button><></></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div><br />                    {/* create post ends */}
                            
                            {this.props.postData.map((post) => 
                            <div key={post.postId}>                           
                            <NewsFeed  post={post} img={this.props.image} />
                            </div>
                            )}       

                        </div>
                    </div>
                   
                </div>

            </div>
        )
    }
}
Homepage.propTypes = {
postData: propTypes.array.isRequired,
fetchPosts: propTypes.func.isRequired,
addPost: propTypes.func.isRequired,
image: propTypes.array.isRequired
}
const mapStateToProps = state => ({
    postData: state.user.posts,
    image: state.user.img,
    user:state.user,
})
export default connect(mapStateToProps, { fetchPosts, addPost, sendRequest, deleteRequest })(Homepage);