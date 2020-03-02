import React from 'react';
import UserRegisterForm from '../components/UserRegisterForm'
import logo from '../img/logo.png'

const Register = () => {
  
  const formStyle = {
    paddingTop: "20px"
  }

  return(
    <div className="container" style={{marginTop: "30px", width: "500px"}}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={formStyle}>Kindly fill out your details for your new account!</h4>
          <h6 className="card-subtitle mb-2 text-muted" style={formStyle}>We won't share your details with anyone</h6>
          
          <UserRegisterForm />

        </div>
      </div>
    </div>
  )
}
export default Register