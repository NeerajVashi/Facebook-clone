import React, { Component } from 'react'
import {connect} from 'react-redux';
import {editIntro} from '../../actions/profile';

class firstabout extends Component {
  constructor(props) {
    super(props)
    this.state = {
        id:this.props.user.user[0].id,
    }
  }
  componentDidMount(){
    document.getElementById("defaultOpen").click();
            
  }
  openCity=(evt, cityName) =>{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  handleChange = (event)=>{
    this.setState({
        [event.target.name] :event.target.value   
    })  
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    const ob1 ={
            id:this.props.user.user[0].id,
            workplace:this.state.workplace,
            currentcity:this.state.currentcity,
            othercity:this.state.othercity,
            Ph_Number:this.state.Ph_Number,
            publickey:this.state.publickey,
            website:this.state.website,
            socaillink:this.state.socaillink,
            Marital_Status:this.state.relationship,
            familymember:this.state.familymember,
            nickname:this.state.nickname,
    }
    this.props.editIntro(ob1);
}



    render() {
      
      const user = this.props.user.user;
      
        return (
            <div>
            <div>
              <div class="tab">
                <button class="tablinks" onClick={e=>this.openCity(e, 'Overview')} id="defaultOpen">Overview</button>
                <button class="tablinks" onClick={e=>this.openCity(e, 'WorkandEducation')}>Work and Education</button>
                <button class="tablinks" onClick={e=>this.openCity(e, 'PlacesYouhaveVisited')}>Places You've Visited</button>
                <button class="tablinks" onClick={e=>this.openCity(e, 'ContactandBasicDetails')}>Contact and Basic Details</button>
                <button class="tablinks" onClick={e=>this.openCity(e, 'FamilyandRelationships')}>Family and Relationships</button>
                <button class="tablinks" onClick={e=>this.openCity(e, 'DetailsAboutYou')}>Details About You</button>
                <button class="tablinks" onClick={e=>this.openCity(e, 'LifeEvents')}>Life Events</button>
              </div>
              
              <div id="Overview" class="tabcontent overview">
                <p className="nameline2">BASIC INFORMATION</p>
                <div className="basicinfo">
                  <p>Birth Date</p><h5>November 23</h5>
                  <p>Birth Year</p><h5>1997</h5>
                  <p>Gender</p><h5>{user[0].gender}</h5>
                  <p>Interested in</p><h5>{user[0].interestedin}</h5>
                  <p>Language</p><h5>{user[0].language}</h5>
                  <p>Religion</p><h5>{user[0].religion}</h5>

                </div>
              </div>

              <div id="WorkandEducation" class="tabcontent WorkandEducation">
                <button className="sidegap1" data-toggle="modal" data-target="#workModal"><i class="far fa-edit"></i></button>
                  <p className="nameline2">Work</p>
                  <p>{user[0].workat}</p>
                  <div className="aline1">
                    <a href=" ">+ Add a workplace</a>
                  </div>
                  <p className="nameline2">PROFESSIONAL SKILLS</p>
                  <p>{user[0].professionalskil}</p>
                  <div className="aline1">
                    <a href=" ">+ Add a professional skills</a>
                  </div>
                  <p className="nameline2">COLLEGE</p>
                  <p>{user[0].college}</p>
                  <div className="aline1">
                    <a href=" ">+ Add a college</a>
                  </div>

                  <p className="nameline2">HIGH SCHOOL</p>
                  <p>{user[0].highschool}</p>
                  <div className="aline1">
                    <a href=" ">+ Add a high school</a>
                  </div>    
              </div>

              <div id="PlacesYouhaveVisited" class="tabcontent PlacesYouhaveVisited">
                <p className="nameline2">CURRENT CITY AND HOMETOWN</p>
              
                <p className="nameline2">OTHER PLACES LIVED</p>
                <div className="aline1">
                  <a href=" ">+ Add a Place</a>
                </div>
              </div>

              <div id="ContactandBasicDetails" class="tabcontent ContactandBasicDetails">
               <p className="nameline3">CONTACT INFORMATION </p>
                <div className="basicinfo4">
                  <p>Mobile Phones</p><h5>{user[0].Ph_Number}</h5>
                  <p>Email</p><h5>sourabhsingla1997@gmail.com</h5>
                </div>
                <div className="aline1">
                  <a href=" ">+ Add other phones</a>
                </div>
                <div className="aline1">
                {user[0].Address}
                  <a href=" ">+ Add your address</a>
                </div>
                <div className="aline1">
                {user[0].publickey}
                
                  <a href=" ">+ Add a public key</a>
                </div>
                <p className="nameline2">WEBSITES AND SOCIAL LINKS</p>
                {user[0].website}
                {user[0].sociallink}
                
                <div className="aline1">
                  <a href=" ">+ Add a website</a>
                </div>
                <div className="aline1">
                  <a href=" ">+ Add a social link</a>
                </div>
                
              </div>
              
              <div id="FamilyandRelationships" class="tabcontent FamilyandRelationships">
                <p className="nameline2">RELATIONSHIP </p>
                <p>{user[0].Marital_Status}</p>
                <p className="nameline2">FAMILY MEMBERS </p>
                {user[0].familymember}
                
                <div className="aline1">
                  <a href=" ">+ Add a Family member</a>
                </div>
                
              </div>
              
              <div id="DetailsAboutYou" class="tabcontent DetailsAboutYou">
                <p className="nameline2">ABOUT YOU</p>
                <p >{user[0].aboutyou}</p>
                <p className="nameline2">OTHER NAMES</p>
                {user[0].nickname}
                <div className="aline1">
                  <a href=" ">+ Add a nickname , a birth name</a>
                </div>
                <p className="nameline2">FAVORITE QUOTES</p>
              <p>{user[0].quotes}</p> 
                
              </div>
              
              <div id="LifeEvents" class="tabcontent LifeEvents">
                <p className="nameline2">LIFE EVENTS</p>
                <div className="aline1">
                  <a href=" ">+ Add a life event</a>
                </div>
                <p>{user[0].lifeevents}</p>
              </div>
              
              </div>

              <div id="workModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <form method="post" onSubmit={this.handleSubmit}>
                                <div class="modal-header">
                                    <h4 class="modal-title">Customize Your Intro  </h4> 
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                <div class="form-group">
                                    <label >Work Place :</label>
                                    <input type="text" class="form-control" id="workplace" defaultValue={this.state.workplace} placeholder="Enter Work Place" onChange={this.handleChange} name="workplace"/>
                                </div>
                                <div class="form-group">
                                    <label >Current City :</label>
                                    <input type="text" class="form-control" id="currentcity" placeholder="Enter current city" defaultValue={this.state.currentcity} onChange={this.handleChange} name="currentcity"/>
                                </div>
                                <div class="form-group">
                                    <label >Other City :</label>
                                    <input type="text" class="form-control" id="othercity" placeholder="Enter other city " defaultValue={this.state.othercity} onChange={this.handleChange} name="othercity"/>
                                </div>
                                <div class="form-group">
                                    <label >Phone no. :</label>
                                    <input type="text" class="form-control" id="Ph_Number" placeholder="Enter phone no." onChange={this.handleChange} defaultValue={this.state.Ph_Number} name="Ph_Number"/>
                                </div>

                                <div class="form-group">
                                    <label > Public key:</label>
                                    <input type="text" class="form-control" id="publickey" placeholder="public key" onChange={this.handleChange} defaultValue={this.state.publickey} name="publickey"/>
                                </div>
                                <div class="form-group">
                                    <label >website:</label>
                                    <input type="text" class="form-control" id="website" placeholder="Enter website" onChange={this.handleChange} defaultValue={this.state.website} name="website"/>
                                </div>
                                <div class="form-group">
                                    <label >social link :</label>
                                    <input type="text" class="form-control" id="sociallink" placeholder="Enter social link" onChange={this.handleChange} defaultValue={this.state.sociallink} name="sociallink"/>
                                </div>
                                <div class="form-group">
                                    <label >relationship:</label>
                                    <input type="text" class="form-control" id="relationship" placeholder="Enter your status" onChange={this.handleChange} defaultValue={this.state.relationship} name="relationship"/>
                                </div>
                                <div class="form-group">
                                    <label >family members :</label>
                                    <input type="text" class="form-control" id="familymember" placeholder="Enter family member" onChange={this.handleChange} defaultValue={this.state.familymember} name="familymember"/>
                                </div>
                                <div class="form-group">
                                    <label >Nick Name:</label>
                                    <input type="text" class="form-control" id="nickname" placeholder="Enter Nick Name" onChange={this.handleChange} defaultValue={this.state.nickname} name="nickname"/>
                                </div>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                     <button type="submit" class="btn btn-primary" >Save changes</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>



            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps,{editIntro})(firstabout)
