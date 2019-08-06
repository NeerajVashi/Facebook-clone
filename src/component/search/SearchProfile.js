import React, { Component } from 'react'
import SeachFriends from './SeachFriends'

import {Link} from 'react-router-dom'
export default class SearchProfile extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            friends:props.location.state.searchData
        }
    }
    render() {
        console.log('ehllo');
        return (
            <div>
                {this.state.friends.map((friend, index) =>
                <SeachFriends friend = {friend} key = {index} />)}
            </div>
        )
        // return (
        //     <div>
        //         Helloooo
        //         <h1>
        //             <Link to = '/search' >Link</Link>Hello
        //         </h1>
        //     </div>
        // )
    }
}
