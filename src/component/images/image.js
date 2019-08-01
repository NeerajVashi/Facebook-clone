import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  Tab,Tabs, TabList,TabPanel } from 'react-tabs';
import {fetchImages,saveImage} from '../../actions/fetchimage';
import ShowAlbums from './album';
import {saveAlbum} from '../../actions/album';
import Gallery from './gallery';

require('./css/image.css');


class ShowImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId:this.props.user.user[0].id,
            image:'',
            albumname:''
        }
      }
    componentDidMount(){
        const user = this.props.user.user;
        this.props.fetchImages(user[0].id);
    }
    handleChange = (event)=>{
        event.preventDefault();
        const data = new FormData();
        data.append('userId',this.props.user.user[0].id );
        data.append('image', event.target.files[0]);
        this.props.saveImage(data);
    }
    handleChange1 = (event)=>{
        this.setState({
            [event.target.name] :event.target.value   
        })    
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData();
        data.append('userId',this.props.user.user[0].id );
        data.append('albumname',this.state.albumname );
        data.append('image', this.state.image);
        this.props.saveAlbum(data);
    }
    handleChange2 = (event)=>{
        this.setState({
            [event.target.name] :event.target.files[0]   
        })  
    }
    render() {
         return (
            <div>
                 <div className="coverpad1"></div>
                
                 <div className="coverpadx1">
                  <i className="far fa-images fontstyle1"></i>
                  <h3 className="namephoto"> Photos</h3>
                

                <div class="buttonwrapper1 imagebutton3"> 
                        <button data-toggle="modal" data-target="#albumModal" > Create Album</button>
                </div>

                 <div class="buttonwrapper1 imagebutton4"> 
                        <button><i class="fa fa-camera" ></i>  Add Photos/Video</button>
                         <input type="file" defaultValue={this.state.image} onChange={this.handleChange} name="image"/>
                </div>

                <div class="buttonwrapper1 imagebutton5"> 
                        <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                         <input type="file" defaultValue={this.state.image} onChange={this.handleChange} name="image"/>
                </div>
                
                
                <Tabs className="listremove">
                
                    <TabList className="listremove">
                        <Tab><div className="box111">Photos</div></Tab>
                        <Tab><div className="box122">albums</div></Tab>
                    </TabList>
                    
                    <TabPanel>
                        <Gallery images={this.props.images} />
                    </TabPanel>

                    <TabPanel>
                        <ShowAlbums/>
                    </TabPanel>

                </Tabs>

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
                                    <input type="text" class="form-control" id="albumname" defaultValue={this.state.albumname} placeholder="Enter album name " onChange={this.handleChange1} name="albumname"/>
                                </div>
                                
                                <div class="form-group">
                                    <label >images :</label>
                                    <input type="file" class="form-control" id="image"  onChange={this.handleChange2} defaultValue={this.state.image} name="image"/>
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
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return {
        images:state.user.images,
        user: state.user
    }
}
export default connect(mapStateToProps , {fetchImages , saveImage ,saveAlbum})(ShowImages)