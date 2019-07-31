import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Login, Registration } from '../../actions/userLogin'
import IsLogin from './Login.js'
import Register from './Register';
import {Link} from 'react-router-dom'
import '../../css/authenticate.css'
class Authenticate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: '',
      firstName: '',
      surName: '',
      verifyUser: '',
      day: '',
      month: '',
      year: '',
      gender: '',
      signUpPassword: '',
      isFormSubmit:false
    }
    this.userAuthentication = this.userAuthentication.bind(this);
    this.login = this.login.bind(this);
  }

  saveUser = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  confirmUser = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
    const password = this.state.user;
    if (password.length > 0) {
      if (this.state.user === this.state.verifyUser) {
        this.setState({
          confirm: true
        })
      }
    }
  }

  userAuthentication = e => {
    e.preventDefault();
    const user = {
      user:this.state.user,
      password:this.state.signUpPassword,
      firstName:this.state.firstName,
      surName:this.state.surName,
      gender:this.state.gender,
      DOB:this.state.year+'/'+this.state.month+'/'+this.state.day
    }
    if (this.state.user === this.state.verifyUser) {
      this.props.dispatch(Registration(user))
      alert("User Successfully Inserted")
    } else {
      alert("Mobile number or email address not match")
    }
  }

  login = e => {
    e.preventDefault();
    const user = { 
      user:this.state.user,
      password:this.state.password
    }
    this.props.dispatch(Login(user))
  }
  
  render() {
    return (
      <div className="auth">
        <div className="body">
          <div className="header_wrapper">
            <div className="header">
              <li className="sitename"><Link to = '/'>facebook</Link></li>
              <form onSubmit={this.login}>
                <li>Email or Phone<br /><input required id="user" value={this.state.username} type="text" onChange={e => this.saveUser(e)} /></li>
                <li>Password<br /><input required id="password" value={this.state.password} type="password" onChange={e => this.saveUser(e)} /><br /><Link to = ''>Forgotten account?</Link></li>
                {/* <li><input type="submit" name="login" value="Log In" /></li> */}
                <li> <IsLogin user = {this.props.user}/> </li>
              </form>
            </div>
          </div>
          <div className="wrapper">
            <div className="div1">
              <p> helps you connect and share with the <br />people in your life.</p>
            </div>
            <div className="div2">
              <h1>Create an account</h1>
              <p>It's free and always will be.</p>

              <form onSubmit={this.userAuthentication}>
                <li><input type="text" placeholder="First Name" id="firstName" value={this.setState.firstname} onChange={e => this.saveUser(e)} required /><input type="text" placeholder="Surname" id="surName" value={this.setState.surname} onChange={e => this.saveUser(e)} required /></li>
                <li><input id="user" type="email" placeholder="Mobile number or email address" value={this.setState.user} onChange={e => this.saveUser(e)} required /></li>
                <li><input id="verifyUser" type="email" placeholder="Re-enter mobile number or email address" value={this.setState.verifyUser} onChange={e => this.saveUser(e)} required /></li>
                <li><input id="signUpPassword" type="password" placeholder="New password" value={this.setState.signUpPassword} onChange={e => this.saveUser(e)} required /></li>
                <br />
                <p>Birthday</p>
                <li>
                  <select id='day' onChange={this.saveUser} required ><option value="">Day</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option></select>
                  <select id='month' onChange={this.saveUser}><option>Month</option><option value='jan'>Jan</option><option value='Feb'>Feb</option><option value='Mar'>March</option><option value='Apr'>Apr</option><option value='May'>May</option><option value='Jun'>Jun</option><option value='Jul'>Jul</option><option value='Aug'>Aug</option><option value='Sep'>Sep</option><option value='Oct'>Oct</option><option value='Nov'>Nov</option><option value='Dec'>Dec</option></select>
                  <select id='year' onChange={this.saveUser}><option>Year</option><option value='1970'>1970</option><option value='1971'>1971</option><option value='1972'>1972</option><option value='1973'>1973</option><option value='1974'>1974</option><option value='1975'>1975</option><option value='1976'>1976</option><option value='1977'>1977</option><option value='1978'>1978</option><option value='1979'>1979</option><option value='1980'>1980</option><option value='1981'>1981</option><option value='1982'>1982</option><option value='1983'>1983</option><option value='1984'>1984</option><option value='1985'>1985</option><option value='1986'>1986</option><option value='1987'>1987</option><option value='1988'>1988</option><option value='1989'>1989</option><option value='1990'>1990</option><option value='1991'>1991</option><option value='1992'>1992</option><option value='1993'>1993</option><option value='1994'>1994</option><option value='1995'>1995</option><option value='1996'>1996</option><option value='1997'>1997</option><option value='1998'>1998</option><option value='1999'>1999</option><option value='2000'>2000</option><option value='2001'>2001</option><option value='2002'>2002</option><option value='2003'>2003</option><option value='2004'>2004</option><option value='2005'>2005</option><option value='2006'>2006</option><option value='2007'>2007</option><option value='2008'>2008</option><option value='2009'>2009</option><option value='2010'>2010</option><option value='2011'>2011</option><option value='2012'>2012</option><option value='2013'>2013</option><option value='2014'>2014</option><option value='2015'>2015</option><option value='2016'>2016</option><option value='2017'>2017</option><option value='2018'>2018</option><option value='2019'>2019</option></select>
                </li>
                <br />
                <p>Gender</p>
                <li><input id='gender' name="gender" value='female' onChange={this.saveUser} type="radio" required />Female <input id='gender' value='male' name="gender" onChange={this.saveUser} type="radio" />Male <input id='gender' name="gender" value='other' onChange={this.saveUser} type="radio" />Other</li>
                <li id="terms">By clicking Create an account, you agree to our <Link to=''>Terms</Link>and that <br />you have read our <Link to =''>Data Policy</Link>, including our <Link to=''>Cookie Use</Link>.</li>
                {/* <li><input type="submit" value="Create an account" /></li> */}
                <li> <Register /> </li>
              </form>
              <li id="create_page"><Link to=''>Create a Page</Link> for a celebrity, band or business.</li>
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
  };
}

export default connect(mapStateToProps)(Authenticate);
