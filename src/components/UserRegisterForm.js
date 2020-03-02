import React from 'react';
import { Link } from 'react-router-dom'

const UserRegisterForm = (props) => {
  return(
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" placeholder="Enter First name" id="firstName" />
            </div>
            <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" placeholder="Enter Last name" id="lastName" />
            </div>
        </div>
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
  )
}
export default UserRegisterForm