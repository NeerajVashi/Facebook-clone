import React from 'react'
import '../css/styles.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
class Navigation extends React.Component {
    render() {
        console.log('in navbar', this.props.user)
        const user = this.props.user.user;
        return (
            <div>
                {/* navbar */}
                <div className="navbar" sticky = "top">
                    <div class = "container">
                        <Link to='/' ><div><i class="fab fa-facebook-square fa-2x"></i></div> </Link> 
                        <div className="inputText">
                            <input className="searchl" type="text" placeholder="Search" />
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="navright">
                            <div ><i class="fas fa-user-circle fa-lg"></i></div>
                            <div className = "color">
                            <Link to = '/profile' > <p className="navtxt">{user[0].firstName} {user[0].surName} </p> </Link>
                                <p className="navtxt">|</p>
                                <Link to ='/' > <p className="navtxt">Home </p> </Link>
                                <p className="navtxt">|</p>
                                <a href="/dropdown"><p className="navtxt">Create </p></a>
                                <p className="navtxt">|</p>
                            </div>
                            <div ><Link to ='addFriends' > <i className="fas fa-user-friends fa-lg"></i></Link> </div>
                            <div ><Link to ='login' > <i className="fab fa-facebook-messenger fa-lg"></i></Link> </div>
                            <div ><Link to = 'notification' > <i className="fas fa-bell fa-lg"></i></Link> </div>
                            <div ><i className="fas fa-question-circle fa-lg"></i></div>
                            <div > <i className="fas fa-caret-down fa-lg"></i></div>
                        </div>
                    </div>
                </div>      {/* navbar ends */}
            </div>          
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  }
  
  export default connect(mapStateToProps)(Navigation);
  
