import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  
  const handleClick = () =>{
    alert('Welcome back!')
  }

  return(
    <form>
        <div class="form-group">
            <label for="inputEmail" class="form-label">Username</label>
            <input type="text" class="form-control" placeholder="Enter Your Email" id="inputEmail"/>
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
  )
}
export default LoginForm