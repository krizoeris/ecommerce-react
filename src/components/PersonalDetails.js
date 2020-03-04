import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'
import {ReactComponent as Loading} from '../img/loading.svg'
import Modal from '../components/Modal'
import UserFormEdit from './PersonalInfoForm'

const PersonalDetails = () => {

    const [globalState, setGlobalState] = useContext(AppContext)

    const [state, setState] = useState({
      loaded: false,
      user: []
    })

    const userId = globalState.userId

    if(state.user.length === 0) {
      fetch(process.env.REACT_APP_BACKEND_URL+'user/'+userId)
      .then(response => response.json())
      .then(json => 
        setState({
          ...state,
          user: json,
          loaded: true
        })
      )
    }

    return(
      <div>
        <div class="card">
          <div class="card-header">
            <h5 className="mt-2" style={{textAlign:'center'}}><i class="far fa-address-card"></i> Personal Info
              {state.loaded && <button className="btn btn-warning" data-toggle="modal" data-target="#editUser"  style={{float:'right'}}><i class="fas fa-pencil-alt"></i> Edit</button> }
            </h5>
          </div>
          {state.loaded ?

          <ul class="list-group list-group-flush mb2">
            <li class="list-group-item"><i class="fas fa-user-circle"></i><b> First Name:</b>
              <div className="mt-2">{state.user.firstname}</div>
            </li>
            <li class="list-group-item"><i class="far fa-user-circle"></i><b> Last Name:</b>
              <div className="mt-2">{state.user.lastname}</div>
            </li>
            <li class="list-group-item"><i class="fas fa-envelope"></i><b> Email:</b>
              <div className="mt-2">{state.user.email}</div>
            </li>

            <Modal target="editUser" title="Update User">
                <UserFormEdit user={state.user} />
            </Modal>
          </ul>

          :
          
          <div>
            <Loading />
          </div>

          }
        </div>
        <br/>
      </div>
    )
}

export default PersonalDetails;           