import React, { Component } from 'react'
import Authenticate from './component/Authenticate';
import Nav from './nav'
import {Router, Switch, Route } from 'react-router-dom'
import history from './component/History'

export default class App extends Component {
    render() {
        return (
            <Router history={history}>

                <Nav />
                    <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/login' component={Authenticate} />
                    </Switch>
            </Router>
        )
    }
}
const HomePage = () => (
    <div>
        <h1>You are in Home</h1>
    </div>
);