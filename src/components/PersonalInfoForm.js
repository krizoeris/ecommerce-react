import React from 'react'
import {Link} from 'react-router-dom'

const PersonalInfoForm = (prop) => {
    return(
        <div class="container col-md-6 offset-md-3 mt-5">
            <form>
                <div class="form-row mb-2">
                    <div class="form-group col-md-6">
                        <label for="firstName"><i class="fas fa-user-circle"></i> First Name</label>
                        <input type="text" class="form-control" placeholder="Enter First name" id="firstName" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName"><i class="fas fa-user-circle"></i> Last Name</label>
                        <input type="text" class="form-control" placeholder="Enter Last name" id="lastName" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword" class="form-label"><i class="fas fa-key"></i> Password</label>
                    <input type="password" class="form-control" placeholder="Enter Your Password" id="inputPassword"/>
                </div>
                <div class="form-group">
                    <label for="inputConfirmPassword" class="form-label"><i class="fas fa-key"></i> Confirm Password</label>
                    <input type="confirmPassword" class="form-control" placeholder="Enter Your Confirm Password" id="inputConfirmPassword"/>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                    <Link to="/profile" className="btn btn-success">Save</Link>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfoForm;