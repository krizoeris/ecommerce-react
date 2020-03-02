import React, { useState, useContext } from 'react'
import AppContext from '../AppContext'
import UserLoginForm from '../components/UserLoginForm'
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

          <UserLoginForm />

        </div>
      </div>
    </div>
    
  )
}
export default Login