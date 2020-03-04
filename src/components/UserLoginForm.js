import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../AppContext'

const LoginForm = () => {

  const [globalState, setGlobalState] = useContext(AppContext)

  const [state, setState] = useState({
        alert: []
  })

  let emailField, passwordField

  const sendLogin = () => {
    fetch(process.env.REACT_APP_BACKEND_URL+'user/login', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        email: emailField.value,
        password: passwordField.value
      })
    })
    .then(response => response.json())
    .then(result => {
      if(result.token){
        sessionStorage.setItem('jwt', result.token)
        sessionStorage.setItem('userid', result.userid)

        setGlobalState({
          ...globalState,
          loggedIn: true,
          userId: result.userid
        })
      }else{
        setState({
          ...state,
              alert: [result.msg, "danger"]
        })
      }
    })
    
  }

  return(
    <form>
        {state.alert.length !== 0 &&
            <div class={`alert alert-${state.alert[1]} alert-dismissible fade show`} role="alert">
                <strong>{state.alert[0]}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        }
        <div class="form-group">
            <label for="inputEmail" class="form-label">Username</label>
            <input type="text" ref={(elem) => emailField = elem} class="form-control" placeholder="Enter Your Email" id="inputEmail"/>
        </div>
        <div class="form-group">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" ref={(elem) => passwordField = elem} class="form-control" placeholder="Enter Your Password" id="inputPassword"/>
        </div>
        <div>
            <button type="button" onClick={sendLogin} className="btn btn-primary w-100 mb-2">Sign In</button>
            <Link to="/register" className="btn btn-light w-100">Not yet Registered? Register Now</Link>
        </div>
    </form>
  )

}
export default LoginForm