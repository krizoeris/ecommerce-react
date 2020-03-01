import React from 'react'
import {Link} from 'react-router-dom'




const AddressBook = (prop) => {

    const shipping = {firstName: 'Kriztian', 
      lastName: 'Eris Labatete', 
      phone: '+971589979765', 
      email: 'kriztian.eris@gmail.com',
      address: 'Flat 110, Al Falasi Bldg.',
      state: 'Muhaisnah 4',
      city: 'Dubai',
      country: 'United Arab Emirates',
      zip: 'P.O box 69141'
}

    return(
        <div>
            <div class="card" style={{width: '30rem'}}>
                <div class="card-header">
                    <h5 className="mt-2" style={{textAlign:'center'}}><i class="far fa-address-card"></i> Address Details
                    <Link className="btn btn-warning" to="/editaddress" style={{float:'right'}}><i class="fas fa-pencil-alt"></i> Edit</Link>
                    </h5>
                </div>

                <ul class="list-group list-group-flush mb2">
                    <li class="list-group-item"><i class="fas fa-user-circle"></i><b> Address:</b>
                        <div className="mt-2">{shipping.address}, {shipping.state}, {shipping.city}</div>
                        <div className="">{shipping.zip}, {shipping.country}</div>
                    </li>
                    <li class="list-group-item"><i class="fas fa-phone"></i><b> Phone No:</b>
                        <div className="mt-2">{shipping.phone}</div>
                    </li>
                </ul>

            </div>
            <br/>
        </div>
    )
}

export default AddressBook;           