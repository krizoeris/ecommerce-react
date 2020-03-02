import React from 'react';
import UserRegisterForm from '../components/UserRegisterForm';
import {Link} from 'react-router-dom';

const Register = () => {
  
  const formStyle = {
    paddingTop: "20px"
  }

  return(
    <div className="container">
      <div className="card" style={{margin: "3em"}}>
        <div className="card-body">
          <h4 className="card-title" style={formStyle}>Kindly fill out your details for your new account!</h4>
          <h6 className="card-subtitle mb-2 text-muted" style={formStyle}>We won't share your details with anyone</h6>
          <UserRegisterForm fieldL={'First Name'} fieldR={'Last Name'}/>
          <br></br>
          <UserRegisterForm fieldL={'E-mail'} fieldR={'Password'}/>
          <button className="btn btn-success" style={{marginTop: "20px"}}>Create Account</button>
          <Link to='/user'>
          <button className="btn btn-light" style={{marginTop: "20px", marginLeft: "15px"}}>Already own an account?</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Register