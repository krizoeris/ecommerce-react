import React, { useState, useContext } from 'react'
import AppContext from '../AppContext'
import {Link} from 'react-router-dom'
import AddressBook from '../components/AddressBook'
import PersonalDetails from '../components/PersonalDetails'



const Profile = (prop) => {

    const user = {id: 1,
        firstName: 'Kriztian', 
      lastName: 'Eris Labatete', 
      phone: '+971589979765', 
      email: 'kriztian.eris@gmail.com',
      password: '********'
    }


    return (

        <div class="container">
  <div class="row justify-content-right mt-4">
  <h3 style={{textAlign:'center', color:'grey'}}><i class="far fa-user-circle"></i> My Account</h3>
  </div>

  <div class="row justify-content-center mt-2">
  <h6 style={{textAlign:'center', color:'blue'}}><i class="far fa-id-badge"></i> {user.firstName} {user.lastName}</h6>
  </div>
  <hr/>

  <div class="row myRow2">
    <div class="col-md">
    <PersonalDetails />
    </div>
    <div class="col-md">
    <AddressBook />
    </div>  
    </div>
    
    <div className="card-footer">
        <Link className="btn btn-outline-secondary" to="/"><i class="fa fa-angle-left"></i> Back To Home</Link>
      </div>
  </div>
    )
}

export default Profile;
