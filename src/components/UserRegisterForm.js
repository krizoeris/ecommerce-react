import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserRegisterForm = (props) => {

    const [state, setState] = useState({
        alert: []
    })

    let firstNameField, lastNameField, emailField, passwordField, confirmPasswordField

    const sendRegister = () => {
        if(confirmPasswordField.value === passwordField.value){
            fetch(process.env.REACT_APP_BACKEND_URL+'user/register', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    firstname: firstNameField.value,
                    lastname: lastNameField.value,
                    email: emailField.value,
                    password: passwordField.value
                })
            })
            .then(response => 
                setState({
                    ...state,
                    alert: ["You've successfully, Registered", "success"]
                })
            )
        } else {
            setState({
                ...state,
                alert: ["Password does not match", "danger"]
            })
        }
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
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" ref={(elem) => firstNameField = elem} placeholder="Enter First name" id="firstName" />
                </div>
                <div class="form-group col-md-6">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" ref={(elem) => lastNameField = elem} placeholder="Enter Last name" id="lastName" />
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail" class="form-label">Username</label>
                <input type="text" class="form-control" ref={(elem) => emailField = elem} placeholder="Enter Your Email" id="inputEmail"/>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" ref={(elem) => passwordField = elem} placeholder="Enter Your Password" id="inputPassword"/>
            </div>
            <div class="form-group">
                <label for="inputConfirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" ref={(elem) => confirmPasswordField = elem} placeholder="Enter Your Confirm Password" id="inputConfirmPassword"/>
            </div>
            <div>
                <button onClick={sendRegister} type="button" className="btn btn-primary w-100 mb-2">Create Account</button>
                <Link to="/login" className="btn btn-light w-100">Already own an account?</Link>
            </div>
        </form>
    )
}
export default UserRegisterForm