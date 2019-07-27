import React, { Component } from 'react'
import '../../css/styles.css'
export default class Post extends Component {
    render() {
        const post = this.props.post
        if (Object.keys(post).length > 0) {
            return (
                <div>
                    <div className="mainpage-container">
                        <div className="flex-item4">
                            <div class="container">
                                <div class="card">
                                    <div class="card-header">
                                        <img className="round-img" src="/images/metal.jpg" alt="Avatar" />
                                        <div>Metallica</div>
                                    </div>
                                    <div class="card-body">{post.postData}</div>
                                    <div class="card-footer">
                                        <div className="createfooter">
                                            <div className="footer"><i class="far fa-thumbs-up"> Like</i></div>
                                            <div className="footer"><i class="far fa-comment-alt"> Comment</i></div>
                                            <div><i class="fas fa-share"> Share</i></div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}
