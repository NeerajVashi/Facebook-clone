import React from 'react'
import '../css/styles.css'
import '../css/friends.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Friends from './friends/Friends'
import {getFriends} from  '../actions/friends'

class Navigation extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            search: '',
        }
        const user = this.props.user.user;
        this.props.dispatch(getFriends(user[0].id))
    }
    // componentDidMount() {
    //     const user = this.props.user.user;
    //     this.props.dispatch(getFriends(user[0].id))
    // }
    searchText = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    searching = (e) => {
        e.preventDefault();
        console.log('text', this.state);
    }
    myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    render() {
        console.log('in navbar', this.props.user)
        const user = this.props.user.user;
        const friendRequest = this.props.user.friendRequest;
        console.log('friendRequest', friendRequest, 'length');
        return (
            <div>
                {/* navbar */}
                <div className="navbar" sticky="top">
                    <div class="container">
                        <Link to='/' ><div><i class="fab fa-facebook-square fa-2x"></i></div> </Link>
                        <div className="inputText">
                            <input id = 'search' className="searchl" type="text" placeholder="Search" onChange = {e => this.searchText(e)}/>
                            <i onClick = { e => this.searching(e)} class="fas fa-search"></i>
                        </div>
                        <div className="navright">
                            <div ><i class="fas fa-user-circle fa-lg"></i></div>
                            <div className="color">
                                <Link to='/profile' > <p className="navtxt">{user[0].firstName} {user[0].surName} </p> </Link>
                                <p className="navtxt">|</p>
                                <div class="dropdown">
                                    <i onClick={this.myFunction} className="fas fa-user-friends fa-lg"></i>
                                    <div id="myDropdown" class="dropdown-content">
                                    <Friends friendRequest={friendRequest} />
                                        {/* <div>
                                            {(length > 0) ? (friendRequest.map((friend, i) => (
                                                <Friends key={i} onclick={this.myFunction} />
                                            ))) : <div></div>
                                            }
                                        </div> */}
                                    </div>
                                </div>
                                <Link to='/' > <p className="navtxt">Home </p> </Link>
                                <p className="navtxt">|</p>
                                <a href="/dropdown"><p className="navtxt">Create </p></a>
                                <p className="navtxt">|</p>
                            </div>
                            <div ><Link to='login' > <i className="fab fa-facebook-messenger fa-lg"></i></Link> </div>
                            <div ><Link to='notification' > <i className="fas fa-bell fa-lg"></i></Link> </div>
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

