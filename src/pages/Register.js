import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png'

const Register = () => {
  
  const formStyle = {
    paddingTop: "20px"
  }

  return(
    <div className="container" style={{marginTop: "20px", width: "500px"}}>
      <img src={logo} width="60px" className="d-block mx-auto mb-4"/>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={formStyle}>Kindly fill out your details for your new account!</h4>
          <h6 className="card-subtitle mb-2 text-muted" style={formStyle}>We won't share your details with anyone</h6>
          
          <form>
              <div class="form-group">
                  <label for="inputEmail" class="form-label">Username</label>
                  <input type="text" class="form-control" placeholder="Enter Your Password" id="inputEmail"/>
              </div>
              <div class="form-group">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" placeholder="Enter Your Password" id="inputPassword"/>
              </div>
              <div class="form-group">
                  <label for="inputConfirmPassword" class="form-label">Confirm Password</label>
                  <input type="confirmPassword" class="form-control" placeholder="Enter Your Confirm Password" id="inputConfirmPassword"/>
              </div>
              <div>
                  <button className="btn btn-primary w-100 mb-2">Create Account</button>
                  <Link to="/login" className="btn btn-light w-100">Already own an account?</Link>
              </div>
          </form>

        </div>
      </div>
    </div>
  )
}
export default Register