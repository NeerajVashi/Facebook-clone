import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  Tab,Tabs, TabList,TabPanel } from 'react-tabs';
import {fetchImages,saveImage} from '../../actions/fetchimage';
import ShowAlbums from './album';

require('./css/image.css');


class ShowImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId:this.props.user.user[0].id,
            image:''
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
    render() {
         return (
            <div>
                 <div className="coverpad1"></div>
                
                 <div className="coverpadx1">
                  <i class="far fa-images fontstyle1"></i>
                  <h3 className="namephoto"> Photos</h3>
                   
                 <div class="buttonwrapper1 imagebutton3"> 
                        <button><i class="fa fa-camera" ></i>Add images</button>
                         <input type="file" defaultValue={this.state.image} onChange={this.handleChange} name="image"/>
                </div>
  
                <Tabs className="listremove">
                <TabList className="listremove">
                <Tab><div className="box111">Photos</div></Tab>
                <Tab><div className="box122">albums</div></Tab>
                </TabList>
                <TabPanel>

                    <div className="grid">
                            {this.props.images.map(item =>(
                                <img src={item.path}  alt="your pic" height="50%"/> 
                            ))} 
                </div>
                </TabPanel>

                <TabPanel>
                <ShowAlbums/>
                </TabPanel>

                </Tabs>
  

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
export default connect(mapStateToProps , {fetchImages , saveImage})(ShowImages)