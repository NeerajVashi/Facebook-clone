import React, { Component } from 'react'
import {  Tab,Tabs, TabList,TabPanel } from 'react-tabs';
import '../css/styles.css'
import Intro from './search/Intro';
import {fetchImages} from '../actions/fetchimage'
import {userPosts} from '../actions/postAction'
import {connect} from 'react-redux'
// import SeachFriends from './search/SeachFriends';
class frndsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: props.location.state.searchData
        }
        this.props.dispatch(fetchImages(this.state.friends.id));
        this.props.dispatch(userPosts(this.state.friends.id));
    }
    
    render() {
        return (
            <div>
                <div className="cover-first">
                    <div className="cover-second">
                        <div className="coverpad"></div>
                        <div className="container1">
                            <div className="coverpadx"><a href=" " data-toggle="modal" data-target="#imageModal" ><img src={this.state.friends.Cover_pic} alt="Cover_pic" /></a></div>
                        </div>
                        <div className="profilepic"></div>
                        <div className="container">
                            <div className="profilepicx"><img src={this.state.friends.Profile_pic} alt="Profile_pic" /></div>
                        </div>
                    </div>
                </div>
                <div className="username">{this.state.friends.firstName} {this.state.friends.surName}</div>
                <Tabs className="listremove">
                    <div className="option-first">
                        <div className="option-two">
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
                                <div className="container7">
                                    <div className="item1">
                                    <Intro friends = {this.state.friends}/>
                                        {/* <Intro /> */}
                                    </div>
                                    <div className="item2">
                                        {/* <Createpost /> */}
                                    </div>

                                    <div className="item3">
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>


                    <div id="imageModal" className="modal fade " role="dialog">
                        <div className="modal-dialog ">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body" >
                                    <img src={this.state.friends.Cover_pic} alt="cover pic" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <TabPanel>
                        {/* <About /> */}

                    </TabPanel>
                    <TabPanel>
                        {/* <FriendsProfile /> */}
                    </TabPanel>

                    <TabPanel>
                        <div className="shiftphoto">
                            {/* <ShowImages /> */}
                        </div>
                    </TabPanel>
                    <TabPanel></TabPanel>

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

export default connect(mapStateToProps)(frndsTable);

