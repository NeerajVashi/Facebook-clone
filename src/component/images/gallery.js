import React, { Component } from 'react'

 class gallery extends Component {
    render() {
        return (
                <div className="grid">
                            {this.props.images.map(item =>(
                                <img src={item.path}  alt="your pic" /> 
                            ))} 
                    </div>
        )
    }
}

export default gallery