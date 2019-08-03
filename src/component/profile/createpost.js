import React, { Component } from 'react'

import '../../css/styles.css'

import NewsFeed from '../newsfeed/NewsFeed'

import { connect } from 'react-redux';

import { addPost ,addData,fetchPosts, delPost } from '../../actions/postAction'


class Homepage extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    state = {
        userId: this.props.user.user[0].id,
        postData: '',
        likes: 0,
        img: '',
        status: 0,
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
        console.log(this.state.postData);
        data.append('userId',this.state.userId);
        data.append('image',this.state.img);
        obj1.userId = this.state.userId;
        obj1.postData = this.state.postData;
        obj1.likes = this.state.likes;
        obj1.status = this.state.status;

        e.preventDefault();
        const image = this.state.img;
        if(image.length === 0) {
            this.props.addData(this.state);
        } else {
            this.props.addPost(obj1, data);
        }
        
    }
    
    deletePost = (id) => {
        console.log('id---->', id);
        this.props.delPost(id);
    }
    render() {
        var clonedArray = JSON.parse(JSON.stringify(this.props.postData))
        const postData = clonedArray.reverse();
        return (
            <div>
                <div className="mainpage-container1">       {/* main page starts */}



                    <div className="flex-item2 mid-first">
                        <div class="container mid-second">
                            <div class="card">               {/* create post */}
                                <div class="card-header">Create Post</div>
                                <div className="post-and-image">
                                <img src={this.props.user.user[0].Profile_pic}  alt="" className="post-user-image"/>
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
                            
                            {postData.map((post) => 
                            <div key={post.postId}>                           
                            <NewsFeed  post={post} onclick={this.deletePost}/>
                            </div>
                            )}       

                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    postData: state.user.posts,
    image: state.user.img,
    user:state.user,
})
export default connect(mapStateToProps, { fetchPosts, addPost ,addData, delPost })(Homepage);

