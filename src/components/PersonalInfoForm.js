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
            <div class="form-row mb-3">
                <div class="form-group col-md-8">
                    <label for="email"><i class="fas fa-envelope"></i> Email</label>
                    <input type="email" class="form-control" placeholder="Enter Your Email" id="email" />
                </div>
                <div class="form-group col-md-4">
                    <label for="lastName"><i class="fas fa-phone"></i> Phone Number</label>
                    <input type="number" class="form-control" placeholder="Enter Your Phone Number" id="lastName" />
                </div>
            </div>
           
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label"><i class="fas fa-key"></i> Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="Enter Your Password" id="inputPassword"/>
                </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
                <Link to="/profile" className="btn btn-warning">Save & Continue</Link>
            </div>
        </form>
        </div>
    )
}

export default PersonalInfoForm;