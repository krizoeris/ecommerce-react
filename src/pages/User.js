import React, { useState, useContext } from 'react'
import AppContext from '../AppContext'
import UserRegisterForm from '../components/UserRegisterForm'

const User = () => {
  const formStyle = {
    paddingTop: "20px"
  }

  const [globalState, setGlobalState] = useContext(AppContext)


  return(
    
    <div className="container">
      { globalState.loggedIn === false && 
    <div className="card" style={{margin: "3em"}}>
      <div className="card-body">
        <h4 className="card-title" style={formStyle}>Kindly fill out your details to sign in!</h4>
        <h6 className="card-subtitle mb-2 text-muted" style={formStyle}>Welcome back</h6>

        <UserRegisterForm fieldL={'E-mail'} fieldR={'Password'}/>
        
        <button className="btn btn-primary" style={{marginTop: "20px"}}>Sign in!</button>
        <button className="btn btn-light" style={{marginTop: "20px", marginLeft: "15px"}}>Forgot your details?</button>
      </div>
    </div>
      }

      { globalState.loggedIn === true && 
      // After JWT established, insert profile here
        <h3>Under Construction</h3>
      }

    </div>
    
  )
}
export default User