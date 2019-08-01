import React, { Component } from 'react'
import {  Tab,Tabs, TabList,TabPanel } from 'react-tabs';
import Firstabout from './firstabout';

import {connect} from 'react-redux';
require('./css/about.css');
class about extends Component {
    render() {
        return (
            <div>
            <div className="coverpad1"></div>
           
            <div className="coverpadx1">
             <i className="far fa-images fontstyle1"></i>
             <h3 className="namephoto"> Photos</h3>
           

          
           
           
           <Tabs className="listremove">
           
               <TabList className="listremove">
                   <Tab><div className="box111">Overview</div></Tab>
                   <Tab><div className="box122">Work & Education</div></Tab>
                   <Tab><div className="box123">Places You've lived</div></Tab>
                   <Tab><div className="box124">Contact Info </div></Tab>
                   <Tab><div className="box125">Relationships</div></Tab>
                   <Tab><div className="box126">Bio</div></Tab>
                   <Tab><div className="box127">Life Events</div></Tab>
                   
               </TabList>
               
               <TabPanel>
                   <Firstabout/>
               </TabPanel>

               <TabPanel>
               </TabPanel>

                <TabPanel>
               </TabPanel>

               <TabPanel>
               </TabPanel>
               <TabPanel>
               </TabPanel>

               <TabPanel>
               </TabPanel>
               
               <TabPanel>
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
export default connect(mapStateToProps )(about)