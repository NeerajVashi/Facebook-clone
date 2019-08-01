import React, { Component } from 'react'

import '../css/styles.css'

import NewsFeed from './newsfeed/NewsFeed'

import propTypes from 'prop-types'

import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postAction'

import { addPost } from '../actions/postAction'

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
    render() {
        return (
            <div>
                <div className = "mainpage-container">       {/* main page starts */}
                    <div className = "flex-item1">
                        <ul className = "left-panel">
                            <li><i class="fas fa-user"></i> Aakarshit Handa</li>
                            <li><i class="far fa-newspaper" style={{color:'blue'}}> </i>
                            <> News Feed </></li>
                            <li><i class="fab fa-facebook-messenger" style={{color:'blue'}}></i>
                            <> Messanger</></li>
                            <li><i class="fas fa-tv" style={{color:'blue'}}></i>
                            <> Watch</></li>
                        </ul>
                        <ul className = "left-panel">
                            <li><b>Shortcuts</b></li>
                            <li><i class="fab fa-battle-net fa-lg" style={{color:"red"}}></i>
                            <> Battle Net</></li>
                        </ul>
                        <ul className = "left-panel">
                            <li><b>Shortcuts</b></li>
                            <li><i class="fas fa-users" style={{color:'blue'}}>
                            <> Groups</></i></li>
                            <li><i class="fas fa-flag" style={{color:'orange'}}></i>
                            <> Pages</></li>
                            <li><i class="fas fa-calendar-check" style={{color:'red'}}></i>
                            <> Events</></li>
                            <li><i class="fas fa-database" style={{color:'red'}}></i>
                            <> Fundraisers</></li>
                            <li><i class="fas fa-user-friends" style={{color:'blue'}}></i>
                            <> Friend List</></li>
                        </ul>
                    </div>



                    <div className = "flex-item2">
                        <div class="container">
                            <div class="card">               {/* create post */}
                                <div class="card-header">Create Post</div>
                                <>
                                <textarea className = "postdata" name="postData"
                                placeholder = "What's on your mind, Aakarshit?"
                                 onChange = {e => this.change(e)}>
                                </textarea></>
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
                    <div className = "flex-item3">
                        
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
})
export default connect(mapStateToProps, { fetchPosts, addPost })(Homepage);