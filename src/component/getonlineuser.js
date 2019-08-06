import React, { Component } from 'react'
import {connect} from 'react-redux'

require('../css/styles.css')
class getonlineuser extends Component {
   render() {
       const online =this.props.users;
       const userid=this.props.user.user[0].id;
       return (
           <div className="chat-sidebar ">
               <h3>Online users</h3>
               {online.map(item=>
                   item.id!==userid ?
                   <div className="sidebar-name"><img src={item.userimage} className="post-user-image1" alt=""/> <span></span>{item.Name}<i class="fa fa-circle floatingright" aria-hidden="true"></i></div> :null
                   )}
           </div>
       )
   }
}
const mapStateToProps = (state) => {
   return {
       user: state.user
   };
}
export default connect(mapStateToProps)(getonlineuser);