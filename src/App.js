import React, { Component } from 'react'
import {Router, Switch, Route } from 'react-router-dom'
import history from './component/History'
import Navigation from './component/navbar'
import Authenticate from './component/login/Authenticate';
import Profile from './component/profile/profile';
import Homepage from './component/homepage';
import Image from './rough/Image'
import Showalbum from './component/images/showalbum';

export default class App extends Component {
    render() {
        const token = this.props.token;
        console.log('inroutes', token);
        if( token) {
            return (
                <Router history={history}>
                    <Navigation />
                    {/* <Homepage /> */}
                        <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/login' exact component={Authenticate} />
                        <Route path='/profile' component = {Profile} />
                        <Route path='/displayalbum' component ={Showalbum} />
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
  