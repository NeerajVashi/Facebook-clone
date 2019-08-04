import React, { Component } from 'react'
import {connect} from 'react-redux'
import {friends} from '../../actions/friends'
import Friends from './friends';
require('./css/friendsprofile.css');
class friendsProfile extends Component {
    componentDidMount() {
        // const userId = {
        //     senderId:,
        //     receiverId:,
        // }
        this.props.dispatch(friends(this.props.user.user[0].id));
    }
    render() {
        const friends = this.props.user.friends;
        return (
            <div>
                <div className="coverpad10"></div>
                
                <div className="coverpadx10">
                
                <div className="first6">
                <i class="fas fa-user-friends"></i>
                <h4>Friends</h4>
                </div>
                

                <div className="grid5">
                    {
                        friends.map((friend, index) => <Friends friend = {friend} key = {index} />)
                    }
                    {/* <div>
                        <a class=" _8t lfloat _ohe" href=" " data-hovercard-prefer-more-content-show="1">
                            <img class="img" alt="" src="/images/bean.jpg" width="200px" height="200px" role="img"/>
                        </a>
                        <a href=" " >Sourabh</a><br/>
                        <a href=" "  >44 mutual friends</a>     
                   
                        <div class="FriendButton" >
                            <button  type="button" width="100px">
                                <i class="fas fa-user-friends"></i>Friends
                            </button>                    
                        </div>                
                    </div>                                   


                    <div>
                        <a class=" _8t lfloat _ohe" href=" " data-hovercard-prefer-more-content-show="1">
                            <img class="img" alt="" src="/images/bean.jpg" width="200px" height="200px" role="img"/>
                        </a>
                        <a href=" " >Sourabh</a><br/>
                        <a href=" "  >44 mutual friends</a>     
                    
                        <div class="FriendButton" >
                            <button  type="button" width="100px">
                            <i class="fas fa-user-friends"></i>Friends
                            </button>                    
                        </div>                
                    </div>                 


                    <div>
                        <a class=" _8t lfloat _ohe" href=" " data-hovercard-prefer-more-content-show="1">
                            <img class="img" alt="" src="/images/bean.jpg" width="200px" height="200px" role="img"/>
                        </a>
                        <a href=" " >Sourabh</a><br/>
                        <a href=" "  >44 mutual friends</a>     
                  
                        <div class="FriendButton" >
                            <button  type="button" width="100px">
                            <i class="fas fa-user-friends"></i>Friends
                            </button>                    
                        </div>                
                    </div>                 

                    <div>
                        <a class=" _8t lfloat _ohe" href=" " data-hovercard-prefer-more-content-show="1">
                            <img class="img" alt="" src="/images/bean.jpg" width="200px" height="200px" role="img"/>
                        </a>
                        <a href=" " >Sourabh</a><br/>
                        <a href=" "  >44 mutual friends</a>     

                        <div class="FriendButton" >
                            <button  type="button" width="100px">
                            <i class="fas fa-user-friends"></i>Friends
                            </button>                    
                        </div>                
                    </div>                 


                    <div>
                        <a class=" _8t lfloat _ohe" href=" " data-hovercard-prefer-more-content-show="1">
                            <img class="img" alt="" src="/images/bean.jpg" width="200px" height="200px" role="img"/>
                        </a>
                        <a href=" " >Sourabh</a><br/>
                        <a href=" "  >44 mutual friends</a>     
                    
                        <div class="FriendButton" >
                            <button  type="button" width="100px">
                            <i class="fas fa-user-friends"></i>Friends
                            </button>                    
                        </div>                
                    </div>                  */}

                </div>
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
  
export default connect(mapStateToProps)(friendsProfile) 
