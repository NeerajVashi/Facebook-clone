import React from 'react'
import '../css/styles.css'
import '../css/friends.css'
// import '../css/search.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Friends from './friends/Friends'
import { getFriends } from '../actions/friends'
import { allUsers } from '../actions/userLogin'
import Postnotification from './notification/postnotification';
import io from 'socket.io-client'
import Getonlineuser from '../component/getonlineuser';

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            users: [],
        }
        const socket = io('http://localhost:8000/')
        console.log(socket);
        socket.emit('useridsend', { my: this.props.user.user[0].id });
        socket.on('userloggedin',(online,cuserid)=>{
           this.props.dispatch({
            type: 'getonlineuser',
            payload: online
        });
        })
    }
    componentDidMount() {
        this.props.dispatch(allUsers());
        const user = this.props.user.user;
        console.log('user id', user);
        this.props.dispatch(getFriends(user[0].id))
    }
    searchText = (e) => {
        this.setState({
            users: this.props.user.allUsers.filter((value) => {
                if (e.target.value === '') {
                    return ''
                } else {
                    return value.firstName.toLowerCase().indexOf(e.target.value) !== -1;
                }
            })
        })
        console.log('searching', this.state, e.target.value, 'allUsers', this.props.user.allUsers, 'users', this.props.user);
    }

    searching = (e) => {
        e.preventDefault();
        console.log('text', this.state);
    }
    myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    render() {
        
        const user = this.props.user.user;
        const onlineFriends = this.props.user.onlineuser;
        const friendRequest = this.props.user.friendRequest;
        console.log('friendRequest', friendRequest, 'length');
        return (
            <div className="top-nav">
                {/* navbar */}
                <div className="navbar" sticky="top">
                    <div class="container">
                        <Link to='/' ><div className="fb-icon"><i class="fab fa-facebook-square fa-2x"></i></div> </Link>
                        <div className="inputText">
                            <input id='search' className="searchl" type="text" placeholder="Search" onChange={e => this.searchText(e)} />

                            <Link to={{
                                pathname: '/searchfrnd',
                                state: {
                                    searchData: this.state.users
                                }
                            }}><i class="fas fa-search"></i></Link>
                            {/* <Link to='/searchfrnd'
                            ><i class="fas fa-search"></i></Link> */}
                        </div>

                        <div className="navright">
                            <div> <img src={this.props.user.user[0].Profile_pic} alt="" className="nav-user-image" /></div>
                            {/* <div ><i class="fas fa-user-circle fa-lg"></i></div> */}
                            <div className="color">
                                <Link to='/profile' > <p className="navtxt">{user[0].firstName} {user[0].surName} </p> </Link>
                                <p className="navtxt">|</p>

                                <Link to='/' > <p className="navtxt">Home </p> </Link>
                                <p className="navtxt">|</p>
                                <a href="/dropdown"><p className="navtxt">Create </p></a>
                                <p className="navtxt">|</p>
                            </div>
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
                            <div > <i className="fab fa-facebook-messenger fa-lg"></i> </div>

                            <div className="drp"><i className="fas fa-bell fa-lg"></i>
                                <div className="drp-content">
                                    <div className="notification-header">
                                        <div className='notification-notification'>Notification</div>
                                        <div className="see-all">See all</div>
                                    </div>
                                    <div className="new-activity">New Activity</div>
                                    <table>
                                        {
                                            this.props.user.postNotification.map((notification, index) => 
                                              <Postnotification notification = {notification} />
                                              )
                                        }
                                        {/* <tr className="notification-border">
                                            <td ><img src={this.props.user.user[0].Profile_pic} alt="Image of woman" className="notification-image" /></td>
                                            <td className="notification-content"><h4>Maria Ander posted somthing </h4></td>                                        </tr>
                                        <tr className="notification-border">
                                            <td ><img src={this.props.user.user[0].Profile_pic} alt="Image of woman" className="notification-image" /></td>
                                            <td className="notification-content">Maria Anders posted someting</td>                                        </tr> */}
                                    </table>
                                </div>
                            </div>




                            <div ><i className="fas fa-question-circle fa-lg"></i></div>
                            <div > <i className="fas fa-caret-down fa-lg"></i></div>
                        </div>
                    </div>
                </div>      {/* navbar ends */}
                <div>
                    {/* {
                        this.state.users.map((value) => (
                            <ul><li>{value.firstName}{value.surName}</li></ul>
                        ))
                    } */}
                    {/* {
                        this.state.users.map((value) => (
                        <ul class="list-group">
                        <li class="list-group-item" ng-repeat="item in list track by $index">{value.firstName}</li>
                        </ul>
                        ))
                    } */}
                </div>


                <Getonlineuser users = {onlineFriends} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        onlineusers:state.user.onlineuser,
        user: state.user,
    };
}

export default connect(mapStateToProps)(Navigation);

