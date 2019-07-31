import React, { Component } from 'react'
import {editIntro} from '../../actions/profile';
import {connect} from 'react-redux';
require('./css/intro.css');

class intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.user.user[0].id
        }
      }
      handleChange = (event)=>{
        this.setState({
            [event.target.name] :event.target.value   
        })    
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.editIntro(this.state);
    }
    render() {
        const user = this.props.user.user;
        return (
            <div className="second">
                <div className="first">
                <h4>Intro</h4>
                </div>
                <i class="far fa-comment-alt sidegap2"></i>
                <div className="textintro">
                    Add a short bio to tell people more about yourself.
                </div>
                <div className="line">
                    <button className="textintro2" data-toggle="modal" data-target="#bioModal">Add Bio</button>
                </div>
                <div>
                    <ul className="introbullet">
                        <li>Worked at  <button className="textintro1">{user[0].Workedat}</button><button className="sidegap" data-toggle="modal" data-target="#myModal"><i class="far fa-edit"></i></button></li>
                        <li>Went to  <button className="textintro1">{user[0].Wentto}</button> </li>
                        <li>Lives in  <button className="textintro1">{user[0].Livesin}</button></li>
                        <li>Address  <button className="textintro1">{user[0].Address}</button></li>
                        <li>Followed by  <button className="textintro1">48 people</button></li>  
                    </ul>
                </div>
                    <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <form onSubmit={this.handleSubmit}>
                                <div class="modal-header">
                                    <h4 class="modal-title">Customize Your Intro  </h4> 
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
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
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                     <button type="submit" class="btn btn-primary">Save changes</button>
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
                                        <label >Bio :</label>
                                        <textarea class="form-control" id="bio"  name="bio"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                     <button type="button" class="btn btn-primary">Save changes</button>
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
