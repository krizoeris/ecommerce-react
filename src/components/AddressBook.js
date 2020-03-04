import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'
import {ReactComponent as Loading} from '../img/loading.svg'
import Modal from '../components/Modal'
import AddressFormEdit from './EditAddress'

const AddressBook = (prop) => {

    const [globalState, setGlobalState] = useContext(AppContext)

    const [state, setState] = useState({
      loaded: false,
      shipping: []
    })

    const userId = globalState.userId

    if(state.loaded === false) {
      fetch(process.env.REACT_APP_BACKEND_URL+'shipping/user/'+userId)
      .then(response => response.json())
      .then(result => setState({
          ...state,
          shipping: (result[0]) ? result[0] : [],
          loaded: true
        })
      )
    }

    const shipping = state.shipping
    console.log(shipping)
    return(
        <div class="card">
            <div class="card-header">
                <h5 className="mt-2" style={{textAlign:'center'}}><i class="far fa-address-card"></i> Address Details
                {state.loaded && <button className="btn btn-warning" data-toggle="modal" data-target="#editAddress" style={{float:'right'}}><i class="fas fa-pencil-alt"></i> Edit</button> }
                </h5>
            </div>
            {state.loaded ?
            <ul class="list-group list-group-flush mb2">
                <li class="list-group-item"><i class="fas fa-user-circle"></i><b> Address:</b>
                    <div className="mt-2">{shipping.address} {shipping.state} {shipping.city}</div>
                    <div className="">{shipping.zip} {shipping.country}</div>
                </li>
                <li class="list-group-item"><i class="fas fa-phone"></i><b> Phone No:</b>
                    <div className="mt-2">+971{shipping.phone}</div>
                </li>

                <Modal target="editAddress" title="Update Address">
                    <AddressFormEdit shipping={state.shipping} />
                </Modal>
                
            </ul>
            
            :
            <div>
                <Loading />
            </div>
            }
        </div>
    )
}

export default AddressBook;           