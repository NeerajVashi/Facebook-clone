import React, { Component } from 'react'

export default class Showalbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            album:props.location.state.currentData,
            albums:props.location.state.albums
        }
    }
    render() {
        console.log('item', this.state);
        return (
            <div></div>
        )
    }
}
