import React from 'react'
import {Link} from 'react-router-dom'

const ShippingDetails = (prop) => {
    return(
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" />
                </div>
                <div class="form-group col-md-6">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-8">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group col-md-4">
                    <label for="lastName">Phone Number</label>
                    <input type="text" class="form-control" id="lastName" />
                </div>
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" />
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" />
                </div>
                <div class="form-group col-md-6">
                    <label for="state">State</label>
                    <input type="text" class="form-control" id="state" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-8">
                    <label for="country">Country</label>
                    <input type="text" class="form-control" id="country" />
                </div>
                <div class="form-group col-md-4">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" />
                </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
                <Link to="/cart" className="btn btn-outline-dark">Go back to Cart</Link>
                <button onClick={prop.nextStep} className="btn btn-warning">Save & Continue</button>
            </div>
        </form>
    )
}

export default ShippingDetails