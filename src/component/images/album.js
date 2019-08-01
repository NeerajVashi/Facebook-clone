import React, { Component } from 'react';
import {connect} from 'react-redux'
import {saveAlbum,fetchAlbum} from '../../actions/album';
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
    componentDidMount(){
        this.props.fetchAlbum(this.props.user.user[0].id);
    }
    
    
    render() {
        const result = [];
        const map = new Map();
        for (const item of this.props.album) {
            if(!map.has(item.albumname)){
                map.set(item.albumname, true);    // set any value to Map
                result.push({
                    albumname: item.albumname,
                    path: item.path,
                });
            }
        }
         return (
            <div>
         

            {result[0]?(<div className="grid1">
                            {result.map(item =>(   
                                <div>
                                      <button className="imageplace buttonimg6"><img src={item.path}  alt="your pic" /></button>
                                        <a href=" "><h2 className="imagetext">{item.albumname}</h2></a>
                                 </div>
                            ))} 
                    </div>):null}

                    
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return {
        album:state.user.album,
        user: state.user
    }
}
export default connect(mapStateToProps,{saveAlbum,fetchAlbum})(album)