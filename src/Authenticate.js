import React from 'react';
import './authenticate.css';
function Authenticate() {
  return (
    <div>
      <header>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="logo">facebook</div>
            </div>
            <div class="col-sm-6 hidden-xs">
              <div class="row">
                <div class="col-sm-5">
                  <div class="form-group">
                    <div class="login-top-text">
                      <label> Email or phone </label>
                    </div>
                    <input type="text" />
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="form-group">
                    <div class="login-top-text">
                      <label> Password </label>
                    </div>
                    <input type="text" />
                    <div class="login-bottom-text hidden-sm"> Forgot your password?  </div>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="form-group">
                    <div class="login-top-text">
                      <label></label>
                    </div>
                    <input type="button" value="login" class="btn btn-default btn-header-login" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <article class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="login-main">
              <h4><i class="fa fa-dashboard"></i> Gorgeous color and design</h4>
              <span>Some sample description text about the template goes here</span>

            </div>
          </div>
          <div class="col-sm-4">
            <div class="">
              <h3><i class="fa fa-shield"></i> Register now</h3>
              <hr />
              <div class="form-group">
                <label class="control-label" for="">Email Address</label>
                <input type="text" class="form-control" placeholder="Email Address" />
              </div>

              <div class="form-group">
                <label class="control-label" for="">Password</label>
                <input type="text" class="form-control" placeholder="Password" />
              </div>

              <div class="form-group">
                <label class="control-label" for="">Repeat Password</label>
                <input type="text" class="form-control" placeholder="Repeat Password" />
              </div>

              <div class="">
                <label>Birthday</label>
                <div class="form-group">
                  <div class="col-sm-4 multibox">
                    <select class="form-control">
                      <option>Day</option>
                    </select>
                  </div>
                  <div class="col-sm-4 multibox">
                    <select class="form-control">
                      <option>Month</option>
                    </select>
                  </div>
                  <div class="col-sm-4 multibox">
                    <select class="form-control">
                      <option>Year</option>
                    </select>
                  </div>
                </div>
              </div>

              <small>
                By clicking Sign Up, you agree to our Terms and that you have read our
                 Data Use Policy, including our Cookie Use.
				       </small>
              <div class="form-group">
                <label class="control-label" for=""></label>
                <input type="submit" class="btn btn-primary" />
              </div>

            </div>
          </div>
        </div>
      </article>
      <footer className="container">
        <hr/>
        <div>
          <ul>
            <li>Mobile</li>
            <li>Find Friends</li>
            <li>Badges</li>
            <li>Contact Us</li>
            <li>Locations</li>
          </ul>
        </div>
        <small class="copyrights"> © Copyrights reserved  2014</small>
      </footer>
    </div>
  );
}

export default Authenticate;
