import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchImages,saveImage} from '../../actions/fetchimage'

require('./css/smallimage.css');
class smallimagepanel extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       image:''
    }
  }
  handleChange = (event)=>{
    event.preventDefault();
    const data = new FormData();
    data.append('userId',this.props.user.user[0].id );
    data.append('image', event.target.files[0]);
    this.props.saveImage(data); 
    }
    componentDidMount(){
        const user = this.props.user.user;
        this.props.fetchImages(user[0].id);
    }
    render() {
     // return(<div></div>)
        return (
            <div>
    <section class="profile">
    <div class="container9">
      <div class="profile-body">
        <aside class="sidebar">
          <div class="section photos">
            <header>
              <i class="fa fa-images stylephoto"></i>
              Photos
              <div class="buttonwrapper5 imagebutton6"> 
                     <button  className="achange">Add Photos</button>
                     <input type="file" defaultValue={this.state.image} onChange={this.handleChange} name="image"/>
                </div>
            
            </header>
            {this.props.images[0] ?(<div class="content">              
              
              <div class="row">
                <div class="col"><a href=" "><img src={this.props.images[0].path}  alt=" " /></a></div>
                <div class="col"><a href=" "><img src={this.props.images[1].path}   alt=" "/></a></div>
                <div class="col"><a href=" "><img src={this.props.images[2].path}   alt=" " /></a></div>
              </div>
              <div class="row">
              <div class="col"><a href=" "><img src={this.props.images[3].path}  alt=" " /></a></div>
              <div class="col"><a href=" "><img src={this.props.images[4].path}  alt=" "/></a></div>
              <div class="col"><a href=" "><img src={this.props.images[5].path} alt=" " /></a></div>
              </div>
              <div class="row">
              <div class="col"><a href=" "><img src={this.props.images[6].path}  alt=" "/></a></div>
              <div class="col"><a href=" "><img src={this.props.images[7].path}  alt=" " /></a></div>
              <div class="col"><a href=" "><img src={this.props.images[8].path}  alt=" " /></a></div>
              </div>
            </div>):null}
      </div>

          <div class="section languages">
            <div class="content">
              <div class="row">
                <div class="col">
                  <a href=" ">English (US)</a> ·
                  <a href=" ">Português (Portugal)</a> ·
                  <a href=" ">Português (Brasil)</a> ·
                  <a href=" ">Español</a> ·
                  <a href=" ">Latine</a>
                </div>
                <div class="col plus-box">
                  <i class="fa fa-plus"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="section main footer">
            <footer class="main-footer">
              <div class="content">
                <a href=" ">Privacy</a> ·
                <a href=" ">Terms</a> ·
                <a href=" ">Advertising</a> ·
                <a href=" ">Ad Choices <i class="fa fa-ad" ></i></a> ·
                <a href=" ">Cookies</a> ·
                <a href=" ">More <i class="fa fa-caret-down" ></i></a>
                <div class="row copyright">Efranelas &copy; MIT License 2019</div>
              </div>
            </footer>
          </div>
        </aside>
        </div>
    </div>
  </section>


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
export default connect(mapStateToProps ,{fetchImages,saveImage})(smallimagepanel)