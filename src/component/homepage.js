import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../css/styles.css'
import EnterPost from './newsfeed/EnterPost';
import Post from './newsfeed/Post';

class Homepage extends Component {

    state = {
        postData: ''
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <EnterPost />
{/* 
                <div class="dropdown">
                    <button onClick={this.myFunction} >Dropdown</button>
                    <div id="myDropdown" class="dropdown-content">
                        <div>hello</div>
                    </div>
                </div> */}
                <Post post={this.props.user.newPost} />
                {/* <div className="mainpage-container">
                    <div className="flex-item1"></div>
                    <div className="flex-item2">
                        <div class="container">
                            <div class="card">
                                <div class="card-header">Create Post</div>
                                <div class="card-body"><textarea name="post"
                                    rows="5" cols="55" placeholder="Write Something here..."
                                    onChange={e => this.change(e)}></textarea></div>
                                <div class="card-footer">
                                    <div className="createfooter">
                                        <div className="footer"><i class="fas fa-photo-video fa-lg"></i></div>
                                        <div className="footer"><i class="fas fa-user-tag fa-lg"></i></div>
                                        <div className="footer"><i class="far fa-grin-hearts fa-lg"></i></div>
                                        <div className="footer"><i class="fas fa-ellipsis-h fa-lg"></i></div>
                                        <div className="footer"><button onclick={e => this.onSubmit(e)} className="postbtn">Post</button></div>
                                    </div>
                                </div>
                            </div><br />
                            <div class="card">
                                <div class="card-header">
                                    <img className="round-img" src="/images/metal.jpg" alt="Avatar" />
                                    <div>Metallica</div>
                                </div>
                                <div class="card-body"><img src="/images/metalmain.jpg" alt="img" /></div>
                                <div class="card-footer">
                                    <div className="createfooter">
                                        <div className="footer"><i class="far fa-thumbs-up"> Like</i></div>
                                        <div className="footer"><i class="far fa-comment-alt"> Comment</i></div>
                                        <div><i class="fas fa-share"> Share</i></div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div class="card">
                                <div class="card-header">
                                    <img className="round-img" src="/images/riverdale.jpg" alt="Avatar" />
                                    <div>Riverdale</div>
                                </div>
                                <div class="card-body"><img src="/images/riverdale.jpg" alt="img" /></div>
                                <div class="card-footer">
                                    <div className="createfooter">
                                        <div className="footer"><i class="far fa-thumbs-up"> Like</i></div>
                                        <div className="footer"><i class="far fa-comment-alt"> Comment</i></div>
                                        <div><i class="fas fa-share"> Share</i></div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="card">
                                <div class="card-header">
                                    <img className="round-img" src="/images/riverdale.jpg" alt="Avatar" />
                                    <div>Riverdale</div>
                                </div>
                                <div class="card-body">Feeling on the top of cloud 9!!!</div>
                                <div class="card-footer">
                                    <div className="createfooter">
                                        <div className="footer"><i class="far fa-thumbs-up"> Like</i></div>
                                        <div className="footer"><i class="far fa-comment-alt"> Comment</i></div>
                                        <div><i class="fas fa-share"> Share</i></div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="card">
                                <div class="card-header">
                                    <img className="round-img" src="/images/bean.jpg" alt="Avatar" />
                                    <div>Mr. Bean</div>
                                </div>
                                <div class="card-body"><img src="/images/bean.jpg" alt="img" /></div>
                                <div class="card-footer">
                                    <div className="createfooter">
                                        <div className="footer"><i class="far fa-thumbs-up"> Like</i></div>
                                        <div className="footer"><i class="far fa-comment-alt"> Comment</i></div>
                                        <div><i class="fas fa-share"> Share</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-item3"></div>
                </div>
          */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Homepage);
