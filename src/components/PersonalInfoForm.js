import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'
import {ReactComponent as Loading} from '../img/loading.svg'


const PersonalInfoForm = (prop) => {

    const user = prop.user

    return(
        <form>
            <div class="form-row mb-2">
                <div class="form-group col-md-6">
                    <label for="firstName"><i class="fas fa-user-circle"></i> First Name</label>
                    <input type="text" class="form-control"  id="firstName" value={user.firstname}/>
                </div>
                <div class="form-group col-md-6">
                    <label for="lastName"><i class="fas fa-user-circle"></i> Last Name</label>
                    <input type="text" class="form-control" id="lastName" value={user.lastname}/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail" class="form-label"><i class="fas fa-mail"></i> Email</label>
                <input type="email" class="form-control"  id="inputEmail" value={user.email}/>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="form-label"><i class="fas fa-key"></i> Password</label>
                <input type="password" class="form-control" id="inputPassword"/>
            </div>
            <div class="form-group">
                <label for="inputConfirmPassword" class="form-label"><i class="fas fa-key"></i> Confirm Password</label>
                <input type="confirmPassword" class="form-control" id="inputConfirmPassword"/>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
                <button className="btn btn-success">Save</button>
            </div>
        </form>
    )
}

export default PersonalInfoForm;