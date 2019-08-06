import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div>
                <div className="first">
                    <i className="fa fa-globe-americas styleglobe"></i>
                    <h4>Intro</h4>
                </div>
                <div>
                    <i class="far fa-comment-alt commentimg"></i>
                </div>
                <div className="textintro">
                    Add a short bio to tell people more about yourself.
                </div>
                <div className="line">
                    <button className="textintro2" data-toggle="modal" data-target="#bioModal">Add Bio</button>
                </div>
                <div>
                    <ul className="introbullet">
                        <li className="margintop"><i className="fa fa-suitcase" /> Worked at  <button className="textintro1">{this.props.friends.Workedat}</button><button className="sidegap" data-toggle="modal" data-target="#myModal"><i class="far fa-edit"></i></button></li>
                        <li className="margintop"><i className="fa fa-suitcase" /> Went to  <button className="textintro1">{this.props.friends.Wentto}</button> </li>
                        <li className="margintop"><i className="fa fa-graduation-cap" /> Lives in  <button className="textintro1">{this.props.friends.Livesin}</button></li>
                        <li className="margintop"><i className="fa fa-graduation-cap" /> Address  <button className="textintro1">{this.props.friends.Address}</button></li>
                        <li className="margintop"><i className="fa fa-rss" /> Followed by  <button className="textintro1">48 people</button></li>
                    </ul>
                </div>
                <div></div>
            </div>
        )
    }
}
