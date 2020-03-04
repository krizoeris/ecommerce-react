import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import AddressBook from '../components/AddressBook'
import PersonalDetails from '../components/PersonalDetails'

const Profile = (prop) => {
    return (
      <div class="container">
        <div class="mt-4">
          <h3 style={{textAlign:'center', color:'grey'}}><i class="far fa-user-circle"></i> My Account</h3>
        </div>
        <Link className="btn btn-outline-secondary" to="/"><i class="fa fa-angle-left"></i> Back To Home</Link>
        <hr/>

        <div class="row">
          <div class="col-md-6">
            <PersonalDetails />
          </div>
          <div class="col-md-6">
            <AddressBook />
          </div>  
        </div>

      </div>
    )
}

export default Profile;
