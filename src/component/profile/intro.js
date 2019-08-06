import React, { Component } from 'react'
import {editIntro} from '../../actions/profile';
import {connect} from 'react-redux';

import SmallImagePanel from '../images/smallimagepanel';
require('./css/intro.css');


class intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.user.user[0].id,
        }
      }
      handleChange = (event)=>{
        this.setState({
            [event.target.name] :event.target.value   
        })    
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const ob1 ={
                id:this.props.user.user[0].id,
                workedat:this.state.Workedat,
                wentto:this.state.Wentto,
                livesin:this.state.Livesin,
                address:this.state.Address,
                interestedin :this.state.interestedin,
                language:this.state.language,
                religion:this.state.religion,
                professionalskil:this.state.professionalskil,
                college:this.state.college,
                highschool:this.state.highschool,
        }
        this.props.editIntro(ob1);
    }

    submitbio = (event) =>{
        event.preventDefault();
        const ob1 = {
            id:this.props.user.user[0].id,
            aboutyou:this.state.aboutyou,
            quotes:this.state.quote,
            lifeevents:this.state.lifeevent,
        }
        this.props.editIntro(ob1);
    }
    render() {
        const user = this.props.user.user;
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
                        <li className="margintop"><i className="fa fa-suitcase"/> Worked at  <button className="textintro1">{user[0].Workedat}</button><button className="sidegap" data-toggle="modal" data-target="#myModal"><i class="far fa-edit"></i></button></li>
                        <li className="margintop"><i className="fa fa-suitcase"/> Went to  <button className="textintro1">{user[0].Wentto}</button> </li>
                        <li className="margintop"><i className="fa fa-graduation-cap"/> Lives in  <button className="textintro1">{user[0].Livesin}</button></li>
                        <li className="margintop"><i className="fa fa-graduation-cap"/> Address  <button className="textintro1">{user[0].Address}</button></li>
                        <li className="margintop"><i className="fa fa-rss"/> Followed by  <button className="textintro1">48 people</button></li>  
                    </ul>
                </div>
                <div>
                    <SmallImagePanel/>
                </div>
                
                    <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <form method="post" onSubmit={this.handleSubmit}>
                                <div class="modal-header">
                                    <h4 class="modal-title">Customize Your Intro  </h4> 
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                <div class="form-group">
                                    <label >Worked at :</label>
                                    <input type="text" class="form-control" id="Workedat" defaultValue={this.state.Workedat} placeholder="Enter Worked at" onChange={this.handleChange} name="Workedat"/>
                                </div>
                                <div class="form-group">
                                    <label >Went to :</label>
                                    <input type="text" class="form-control" id="Wentto" placeholder="Enter went to" defaultValue={this.state.Wentto} onChange={this.handleChange} name="Wentto"/>
                                </div>
                                <div class="form-group">
                                    <label >Address :</label>
                                    <input type="text" class="form-control" id="Address" placeholder="Enter where are you from " defaultValue={this.state.Address} onChange={this.handleChange} name="Address"/>
                                </div>
                                <div class="form-group">
                                    <label >Lives in :</label>
                                    <input type="text" class="form-control" id="Livesin" placeholder="Enter lives in" onChange={this.handleChange} defaultValue={this.state.Livesin} name="Livesin"/>
                                </div>

                                <div class="form-group">
                                    <label > Interested in:</label>
                                    <input type="text" class="form-control" id="interestedin" placeholder="Interested in" onChange={this.handleChange} defaultValue={this.state.interestedin} name="interestedin"/>
                                </div>
                                <div class="form-group">
                                    <label >Language :</label>
                                    <input type="text" class="form-control" id="language" placeholder="Enter Language" onChange={this.handleChange} defaultValue={this.state.language} name="language"/>
                                </div>
                                <div class="form-group">
                                    <label >Religion :</label>
                                    <input type="text" class="form-control" id="religion" placeholder="Enter religion" onChange={this.handleChange} defaultValue={this.state.religion} name="religion"/>
                                </div>
                                <div class="form-group">
                                    <label >Professional Skills :</label>
                                    <input type="text" class="form-control" id="professionalskil" placeholder="Enter your skills" onChange={this.handleChange} defaultValue={this.state.professionalskil} name="professionalskil"/>
                                </div>
                                <div class="form-group">
                                    <label >College :</label>
                                    <input type="text" class="form-control" id="college" placeholder="Enter College" onChange={this.handleChange} defaultValue={this.state.college} name="college"/>
                                </div>
                                <div class="form-group">
                                    <label >High School :</label>
                                    <input type="text" class="form-control" id="highschool" placeholder="Enter highschool" onChange={this.handleChange} defaultValue={this.state.highschool} name="highschool"/>
                                </div>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                     <button type="submit" class="btn btn-primary" >Save changes</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div id="bioModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Add Bio  </h4> 
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label >About You :</label>
                                        <textarea class="form-control" id="aboutyou"  onChange={this.handleChange} defaultValue={this.state.aboutyou}name="aboutyou"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label >Favorite Quote :</label>
                                        <textarea class="form-control" id="quote" onChange={this.handleChange} defaultValue={this.state.quote} name="quote"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label >Life Event :</label>
                                        <textarea class="form-control" id="lifeevent"  onChange={this.handleChange} defaultValue={this.state.lifeevent} name="lifeevent"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                     <button type="button" onClick={this.submitbio} class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  }
  
export default connect(mapStateToProps , {editIntro})(intro)
