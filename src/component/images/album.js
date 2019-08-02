import React, { Component } from 'react';
import {connect} from 'react-redux'
import {saveAlbum,fetchAlbum} from '../../actions/album';
import {Link} from 'react-router-dom'
require('./css/album.css');


class album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId:this.props.user.user[0].id,
            albumname:'',
            image:'',
            clickImage:[]
        }
      }
    componentDidMount(){
        this.props.fetchAlbum(this.props.user.user[0].id);
    }
    
    myFunction = (e) => {
        console.log('event id ', e);
        const album1 = this.props.album.filter((item) => {
            if(item.albumname === e) {
                return item.path;
            }
        })
        this.setState({
            clickImage:album1
        })
        console.log(album1);
        var x = document.getElementById("myDIV");
        var y = document.getElementById("album-display");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
        } else {
          x.style.display = "none";
          y.style.display = "block";
        }
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
         

<div id="myDIV">
{result[0]?(<div className="grid1">
                            {result.map(item =>(   
                                <div>
                             <button  onClick ={e => this.myFunction(item.albumname)} className="imageplace buttonimg6"><img src={item.path}  alt="your pic" /></button>
                                        <a href=" "><h2 className="imagetext">{item.albumname}</h2></a>
                                 </div>

                            ))} 
                    </div>):null}
</div>
       <div id = "album-display">
       <div className="grid1">
                            {this.state.clickImage.map(item =>(   
                                <div>
                             <button  className="imageplace buttonimg6"><img src={item.path}  alt="your pic" /></button>
                                 </div>

                            ))} 
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                         
       </div>
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