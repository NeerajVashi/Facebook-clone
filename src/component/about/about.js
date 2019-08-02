import React, { Component } from 'react'
import Firstabout from './firstabout';
import {connect} from 'react-redux';

require('./css/about.css');
class about extends Component {
    render() {
        return (
            <div>
        
            <div>
                <div className="coverpad2"></div>
                
                <div className="coverpadx2">
                    <i className="far fa-images fontstyle1"></i>
                    <h3 className="namephoto"> About</h3>
                        <Firstabout/>
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
export default connect(mapStateToProps )(about)