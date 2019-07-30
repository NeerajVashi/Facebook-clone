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
        mainImg: '/images/matalmain.jpg',
        likes: 0,
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state);
    }
    render() {
        return (
            <div>
                <div className = "mainpage-container">       {/* main page starts */}
                    <div className = "flex-item1">

                    </div>



                    <div className = "flex-item2">
                        <div class="container">
                            <div class="card">               {/* create post */}
                                <div class="card-header">Create Post</div>
                                <div class="card-body"><textarea name = "postData"
                                 rows="5" cols="55" placeholder = "What's on your mind, Aakarshit"
                                 onChange = {e => this.change(e)}></textarea></div> 
                                <div class="card-footer">
                                    <div className = "createfooter">
                                        <div className="footer"><i class="fas fa-photo-video fa-lg"></i></div>
                                        <div className="footer"><i class="fas fa-user-tag fa-lg"></i></div>
                                        <div className="footer"><i class="far fa-grin-hearts fa-lg"></i></div>
                                        <div className="footer"><i class="fas fa-ellipsis-h fa-lg"></i></div>
                                        <div className="footer"><button onClick = {e => this.onSubmit(e)}className="postbtn">Post</button></div>
                                    </div>
                                </div>
                            </div><br />                    {/* create post ends */}
                            
                            {this.props.postData.map((post) => 
                            <div key={post.postId}>                           
                            <NewsFeed  post={post}/>
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
}
const mapStateToProps = state => ({
    postData: state.user.posts
})
export default connect(mapStateToProps, { fetchPosts, addPost })(Homepage);