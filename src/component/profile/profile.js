import React, { Component } from 'react'
import Intro from './intro';
import {  Tab,Tabs, TabList,TabPanel } from 'react-tabs';

import './css/profilepage.css';
import Createpost from './createpost';
import {connect} from 'react-redux';
import {updateCover,updateProfile} from '../../actions/profile';
import ShowImages from '../images/image';


class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId:this.props.user.user[0].id,
            Cover_pic:'',
            Profile_pic:''
        }
      }
      
    handleChange = (event)=>{
        event.preventDefault();
        const data = new FormData();
        data.append('userId',this.props.user.user[0].id );
        data.append('Cover_pic', event.target.files[0]);
        
        this.props.updateCover(data);
    }
    handleChangeProfile= (event)=>{
        event.preventDefault();
        
        const data1 = new FormData();
        data1.append('userId',this.props.user.user[0].id );
        data1.append('Profile_pic', event.target.files[0]);
        this.props.updateProfile(data1);
    }
    render() {
        const user = this.props.user.user;
        return (
            <div >
                <div className="coverpad"></div>
                <div className="container1">
                    <div className="coverpadx"><a href=" " data-toggle="modal" data-target="#imageModal" ><img src={user[0].Cover_pic} alt="Cover_pic" /></a></div>
                    <div class="imagebutton buttonwrapper">
                        <button><i class="fa fa-camera" ></i>Update Cover Photo</button>
                         <input type="file" defaultValue={this.state.Cover_pic} onChange={this.handleChange} name="Cover_pic"/>
                    </div>
                </div>
                
                <div className="profilepic"></div>
                <div className="container3">
                <div className="profilepicx"><img src={user[0].Profile_pic} alt="Profile_pic" /></div>
                <div class="imagebutton1 buttonwrapper1">
                        <button><i class="fa fa-camera" ></i>Update </button>
                         <input type="file" defaultValue={this.state.Profile_pic} onChange={this.handleChangeProfile} name="Profile_pic"/>
                </div>
                </div>
                


                <div className="username">{user[0].firstName} {user[0].surName}</div>
                <Tabs className="listremove">
                <TabList className="listremove">
                <Tab><div className="box11">Timeline</div></Tab>
                <Tab><div className="box12">About</div></Tab>
                <Tab><div className="box13">Friends</div></Tab>
                <Tab><div className="box14">Photos</div></Tab>
                <Tab><select className="select1">
                    <option selected className="option1">More</option>
                    <option value="dasd" className="option1">Videos</option>
                    <option value="das" className="option1">Places</option>
                    <option value="dad" className="option1">Pages</option>
                </select></Tab>
                </TabList>
                <TabPanel>
                <div className="container">
                    <div className="item1">
                        <Intro/>
                    </div>

                    <div className="item2">    
                    <Createpost/>
                    </div>
                    <div className="item3">
                    </div>
                </div>
                </TabPanel>
                <div id="imageModal" className="modal fade " role="dialog">
                        <div className="modal-dialog ">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body" >
                                    <img src={user[0].Cover_pic} alt="cover pic" />
                                </div>
                            </div>

                        </div>
                </div>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                
                <TabPanel>
                <div>
                    <ShowImages/>
                </div>
                </TabPanel>
               
                </Tabs>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  }
  
export default connect(mapStateToProps,{updateCover,updateProfile})(home) 

//http://localhost:8080/auth/signup/updateprofilepic/