import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'
import {ReactComponent as Loading} from '../img/loading.svg'

const ShippingDetails = (prop) => {

    const [globalState, setGlobalState] = useContext(AppContext)

    const [state, setState] = useState({
      loaded: false,
      shipping: [],
      newShipping: false
    })

    const userId = globalState.userId

    let firstNameField, lastNameField, emailField, phoneField, addressField, cityField, stateField, countryField, zipField

    const handleShipping = () => {
        if(state.newShipping) {
            fetch(process.env.REACT_APP_BACKEND_URL+'user/register', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    first_name: firstNameField.value,
                    last_name: lastNameField.value,
                    email: emailField.value,
                    phone: phoneField.value,
                    address: addressField.value,
                    city: cityField.value,
                    state: stateField.value,
                    country: countryField.value,
                    zip: zipField.value
                })
            })
            .then(response => 
                setState({
                    ...state,
                    alert: ["You've successfully, Registered", "success"]
                })
            )
        }
    }

    if(state.loaded === false) {
      fetch(process.env.REACT_APP_BACKEND_URL+'shipping/user/'+userId)
      .then(response => response.json())
      .then(result => setState({
          ...state,
          shipping: (result[0]) ? result[0] : [],
          newShipping: (result[0]) ? false : true,
          loaded: true
        })
      )
    }

    const shipping = state.shipping
    console.log(shipping)

    return(
        <div>
            {state.loaded ?
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" ref={(elem) => firstNameField = elem} value={shipping.first_name} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" ref={(elem) => lastNameField = elem} value={shipping.last_name}/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" ref={(elem) => emailField = elem} value={shipping.email}/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="lastName">Phone Number</label>
                        <input type="text" class="form-control"ref={(elem) => phoneField = elem} value={shipping.phone} />
                    </div>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" ref={(elem) => addressField = elem} placeholder="1234 Main St" value={shipping.address} />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="city">City</label>
                        <input type="text" class="form-control" ref={(elem) => cityField = elem} value={shipping.city} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="state">State</label>
                        <input type="text" class="form-control" ref={(elem) => stateField = elem} value={shipping.state} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <label for="country">Country</label>
                        <input type="text" class="form-control" ref={(elem) => countryField = elem} value={shipping.country} />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" ref={(elem) => zipField = elem} value={shipping.zip} />
                    </div>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                    <Link to="/cart" className="btn btn-outline-dark">Go back to Cart</Link>
                    <button onClick={handleShipping} className="btn btn-warning">Save & Continue</button>
                </div>
            </form>
            :
            <div>
                <Loading />
            </div>
            }
        </div>
    )
}

export default ShippingDetails