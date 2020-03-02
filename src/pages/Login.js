import React, { useState, useContext } from 'react'
import AppContext from '../AppContext'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Login = () => {
  const formStyle = {
    paddingTop: "20px"
  }

  const [globalState, setGlobalState] = useContext(AppContext)


  return(
    
    <div className="container" style={{marginTop: "20px", width: "500px"}}>
    <img src={logo} width="60px" className="d-block mx-auto mb-4"/>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={formStyle}>Kindly fill out your details to sign in!</h4>
          <h6 className="card-subtitle mb-2 text-muted" style={formStyle}>Welcome back</h6>

          <form>
              <div class="form-group">
                  <label for="inputEmail" class="form-label">Username</label>
                  <input type="text" class="form-control" placeholder="Enter Your Password" id="inputEmail"/>
              </div>
              <div class="form-group">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" placeholder="Enter Your Password" id="inputPassword"/>
              </div>
              <div>
                  <button className="btn btn-primary w-100 mb-2">Sign In</button>
                  <Link to="/register" className="btn btn-light w-100">Not yet Registered? Register Now</Link>
              </div>
          </form>

        </div>
      </div>
    </div>
    
  )
}
export default Login