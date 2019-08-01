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
                    <div className="flex-item1 left">
                        <ul className="left-panel">
                            <li className="profile"><Link to='/profile'><img src="./images/bean.jpg" className="left-user-image" /> {this.props.user.user[0].firstName}</Link></li>
                            <li><Link to='/'><i class="far fa-newspaper" style={{ color: 'blue' }}> </i>
                                <> News Feed </></Link></li>
                            <li><i class="fab fa-facebook-messenger" style={{ color: 'blue' }}></i>
                                <> Messanger</></li>
                            <li><i class="fas fa-tv" style={{ color: 'blue' }}></i>
                                <> Watch</></li>
                        </ul>
                        <ul className="left-panel">
                            <li><b>Shortcuts</b></li>
                            <li><i class="fab fa-battle-net fa-lg" style={{ color: "red" }}></i>
                                <> Battle Net</></li>
                        </ul>
                        <ul className="left-panel">
                            <li><b>Shortcuts</b></li>
                            <li><i class="fas fa-users" style={{ color: 'blue' }}>
                                <> Groups</></i></li>
                            <li><i class="fas fa-flag" style={{ color: 'orange' }}></i>
                                <> Pages</></li>
                            <li><i class="fas fa-calendar-check" style={{ color: 'red' }}></i>
                                <> Events</></li>
                            <li><i class="fas fa-database" style={{ color: 'red' }}></i>
                                <> Fundraisers</></li>
                            <li><i class="fas fa-user-friends" style={{ color: 'blue' }}></i>
                                <> Friend List</></li>
                        </ul>
                    </div>



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
                                                    <div className="space"><i class="fas fa-user-tag fa-lg" style={{color:'blue'}}></i><> Tag Friends</></div>
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
                    <div className="flex-item3">
                        <div>
                            {/* {
                                friendRequest.map((friend, i) => (
                                    <FriendCards singleuser={friend} id={i} onclick={this.add} onclickdelete={this.delete} />
                                ))
                            } */}
                            <div class="card friends-card">
                                <div className="top-container">
                                    <div className="top-flex">
                                        <div className="top-friend-text">People You May Know</div>
                                        <div className="show-all">Show all</div>
                                    </div>
                                    {
                                        friendRequest.map((friend, i) => (
                                            <FriendCards singleuser={friend} id={i} onclick={this.add} onclickdelete={this.delete} />
                                        ))
                                    }
                                    {/* <div class="row">
                                        <div class="col-sm-3">
                                            <img className=" friends-images " src="./images/bean.jpg" alt="Card image cap" />
                                        </div>
                                        <div class="col-sm-9">
                                            <ul className="friend-card-container">
                                                <li><div class="friends-name">Special title treatment</div></li>
                                                <li><div className="mutual-friend">13 Friend</div></li>
                                                <li><div className="friends-request-response"><div className="add-button"><img className="add-button-icon" src="./images/addIcon.png" /> Add Friend</div><div className="delete-button">Delete</div></div></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    {/* <div class="row">
                                        <div class="col-sm-3">
                                            <img className=" friends-images " src="./images/bean.jpg" alt="Card image cap" />
                                        </div>
                                        <div class="col-sm-9">
                                            <ul className="friend-card-container">
                                                <li><div class="friends-name">Special title treatment</div></li>
                                                <li><div className="mutual-friend">13 Friend</div></li>
                                                <li><div className="friends-request-response"><div className="add-button"><img className="add-button-icon" src="./images/addIcon.png" /> Add Friend</div><div className="delete-button">Delete</div></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <img className=" friends-images " src="./images/bean.jpg" alt="Card image cap" />
                                        </div>
                                        <div class="col-sm-9">
                                            <ul className="friend-card-container">
                                                <li><div class="friends-name">Special title treatment</div></li>
                                                <li><div className="mutual-friend">13 Friend</div></li>
                                                <li><div className="friends-request-response"><div className="add-button"><img className="add-button-icon" src="./images/addIcon.png" /> Add Friend</div><div className="delete-button">Delete</div></div></li>
                                            </ul>
                                        </div>
                                    </div> */}

                                </div>

                                {/* <div class="card-header">
                                    <img className="round-img" src="./images/bean.jpg" alt="Card image cap" />
                                    <div>Neeraj</div>
                                    <div className="friend-Name text-center">mohit</div>
                                    <div class="card-body">
                                        <div class="paragraphs">
                                            <div class="row">
                                                <div class="span4">
                                                <img className="round-img" src="./images/bean.jpg" alt="Card image cap" />
                                                    <div class="content-heading"><h3>Experience &nbsp </h3></div>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div class="card friends-card">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Button</a>
                                </div>
                            </div> */}


                        </div>
                        {/* <div class="card w-50 p-3">
                            <div class="card-footer">
                                <div className="createfooter">
                                    <div className="footer pd-2"> <img className="round-img" src="/images/bean.jpg" alt="Avatar" />Neeraj</div>
                                    <div className="footer"> <button type="button" class="btn">Add Friend</button></div>
                                    <div><button type="button" class="btn">Delete</button></div>
                                </div>
                            </div>
                        </div> */}
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