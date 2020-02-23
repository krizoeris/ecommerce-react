import React from 'react'
import {Link} from 'react-router-dom'




const AddressBook = (prop) => {

    const shipping = {firstName: 'Kriztian', 
      lastName: 'Eris Labatete', 
      phone: '+971589979765', 
      email: 'kriztian.eris@gmail.com',
      address: 'Flat 110, Al Falasi Bldg.',
      area: 'Muhaisnah 4',
      city: 'Dubai',
      country: 'United Arab Emirates',
      pobox: '69141'
}

    return(
           
            
                <div class="card">
                    <div class="card-body">
                        <h5 class="mb-1"><i class="fas fa-map-marker-alt"></i> Address Details
                        <Link className="btn btn-warning" to="/editaddress" style={{float:'right'}}><i class="fas fa-pencil-alt"></i> Edit</Link>
                        </h5>
                        <hr />
                        <ul class="list-group">
                            <li class="list-group-item border-0 m-0 p-0">
                                <b>{shipping.firstName} {shipping.lastName}</b>
                            </li>
                            <br/>
                            <li class="list-group-item border-0 m-0 p-0">
                                {shipping.address}   
                            </li>
                            <br/>
                            <li class="list-group-item border-0 m-0 p-0">
                                {shipping.area}   
                            </li>
                            <br/>
                            <li class="list-group-item border-0 m-0 p-0">
                                P.O. Box {shipping.pobox}, {shipping.city}   
                            </li>
                            <br/>
                            <li class="list-group-item border-0 m-0 p-0">
                                {shipping.country}
                            </li>
                            <br/>
                            <li class="list-group-item border-0 m-0 p-0">
                                <i class="fa fa-envelope"></i> {shipping.email}
                            </li>
                            <br/>
                            <li class="list-group-item border-0 m-0 p-0">
                                <i class="fa fa-phone"></i> {shipping.phone}
                            </li>
                            <br/>
                        </ul>
                    </div>
                </div>

    
                )
            }

export default AddressBook;           