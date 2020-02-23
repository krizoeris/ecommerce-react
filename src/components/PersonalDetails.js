import React from 'react'
import {Link} from 'react-router-dom'





const PersonalDetails = (prop) => {

    const user = {firstName: 'Kriztian', 
      lastName: 'Eris Labatete', 
      phone: '+971589979765', 
      email: 'kriztian.eris@gmail.com',
      password: '********'
    }

    return(
        <div>
        <div class="card" style={{width: '30rem'}}>
        <div class="card-header">
          <h5 className="mt-2" style={{textAlign:'center'}}><i class="far fa-address-card"></i> Personal Info
          <Link className="btn btn-warning" to="/personalinfoform" style={{float:'right'}}><i class="fas fa-pencil-alt"></i> Edit</Link>
        </h5>
        </div>
        <ul class="list-group list-group-flush mb2">
          <li class="list-group-item"><i class="fas fa-user-circle"></i><b> First Name:</b>
         <div className="mt-2">{user.firstName}
         
         </div>
          </li>

          <li class="list-group-item"><i class="far fa-user-circle"></i><b> Last Name:</b>
          <div className="mt-2">{user.lastName}
          </div>
          </li>

          <li class="list-group-item"><i class="fas fa-phone"></i><b> Phone No:</b>
          <div className="mt-2">{user.phone}
          </div>
          </li>

          <li class="list-group-item"><i class="fas fa-envelope"></i><b> Email:</b>
          <div className="mt-2">{user.email}
          </div>
          </li>
          <li class="list-group-item">
          <button type="button" class="btn btn-danger"><i class="fas fa-key"></i> Change Password</button>
          </li>
         </ul>
      </div>
      <br/>
      </div>
                )
            }

export default PersonalDetails;           