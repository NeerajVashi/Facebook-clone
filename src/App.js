import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import history from './component/History'
import Navigation from './component/navbar'
import Authenticate from './component/login/Authenticate';
import Profile from './component/profile/profile';
import Homepage from './component/homepage';
import Image from './rough/Image'
import Showalbum from './component/images/showalbum';
import SearchFriend from './component/searchFriend';
import SearchProfile from './component/search/SearchProfile';
export default class App extends Component {
    render() {
        const token = this.props.token;
        console.log('inroutes', token);
        if( token) {
            return (
                <Router >
                    <Navigation />
                    {/* <Homepage /> */}
                        <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/login' exact component={Authenticate} />
                        <Route path='/profile' exact component = {Profile} />
                        <Route path='/displayalbum' exact  component ={Showalbum} />
                        <Route path='/searchfrnd' exact  component ={SearchProfile} />
                        <Route path = '/search' component = {SearchFriend} />
                        </Switch>
                </Router>
            )
        } else {
            return (
                <Router history={history}>
                <Authenticate />
                {/* <Image /> */}
                </Router>
            )
        }

    }
}
// const HomePage = () => (
//     <div>
//         <h1>You are in Home</h1>
//     </div>
// );


// const mapStateToProps = (state) => {
//     return {
//       user: state.user,
//     };
//   }
  
// export default connect(mapStateToProps)(App);
  