import React, { Component } from 'react'
import {Router, Switch, Route } from 'react-router-dom'
import history from './component/History'
import Navigation from './component/navbar'
import Authenticate from './component/login/Authenticate';
import Profile from './component/profile/profile';

export default class App extends Component {
    render() {
        const token = this.props.token;
        if( Object.keys(token).length > 0 ) {
            return (
                <Router history={history}>
                    <Navigation />
                    
                        <Switch>
                        <Route path='/profile' component={Profile} />
                        </Switch>
                </Router>
            )
        } else {
            return (
                <Router history={history}>
                <Authenticate />
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
  