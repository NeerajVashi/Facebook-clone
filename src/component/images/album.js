import React, { Component } from 'react';
import {connect} from 'react-redux'
require('./css/album.css');


class album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId:this.props.user.user[0].id,
            albumname:'',
            image:''
        }
      }
      handleChange1 = (event)=>{
        this.setState({
            [event.target.name] :event.target.files[0]   
        })    
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name] :event.target.value   
        })    
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.image);
        const data = new FormData();
        data.append('userId',this.props.user.user[0].id );
        data.append('albumname',this.state.albumname );
        data.append('image', this.state.image);
        //this.props.saveImage(data);
        console.log(data);
    }
    render() {
         return (
            <div>
                <button data-toggle="modal" data-target="#albumModal">Add album</button>

                <div id="albumModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <form onSubmit={this.handleSubmit}>
                                <div class="modal-header">
                                    <h4 class="modal-title">Create your Album  </h4> 
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                <div class="form-group">
                                    <label >Album name :</label>
                                    <input type="text" class="form-control" id="albumname" defaultValue={this.state.albumname} placeholder="Enter album name " onChange={this.handleChange} name="albumname"/>
                                </div>
                                
                                <div class="form-group">
                                    <label >images :</label>
                                    <input type="file" class="form-control" id="image"  onChange={this.handleChange1} defaultValue={this.state.image} name="image"/>
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


                
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(album)