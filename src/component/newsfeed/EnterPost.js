import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../../css/styles.css'
import {newPost} from '../../actions/post'
class EnterPost extends Component {
    constructor (props) {
        super(props)
        this.state = {
            postData:''
        }
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(newPost(this.state))
    }
    render() {
        return (
            <div>
                <div className="mainpage-container">
                    <div className="flex-item1"></div>
                    <div className="flex-item2">
                        <div class="container">
                            <div class="card">
                                <div class="card-header">Create Post</div>
                                <div class="card-body"><textarea name="postData"
                                    rows="5" cols="55" placeholder="Write Something here..."
                                    onChange={e => this.change(e)}></textarea></div>
                                <div class="card-footer">
                                    <div className="createfooter">
                                        <div className="footer"><i class="fas fa-photo-video fa-lg"></i></div>
                                        <div className="footer"><i class="fas fa-user-tag fa-lg"></i></div>
                                        <div className="footer"><i class="far fa-grin-hearts fa-lg"></i></div>
                                        <div className="footer"><i class="fas fa-ellipsis-h fa-lg"></i></div>
                                        <div className="footer"><button onClick={e => this.onSubmit(e)} className="postbtn">Post</button></div>
                                    </div>
                                </div>
                            </div><br />
                             </div>
                    </div>
                    <div className="flex-item3"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  }
  
export default connect(mapStateToProps)(EnterPost);
  