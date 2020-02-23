import React from 'react'
import {Link} from 'react-router-dom'

const EditAddress = (prop) => {
    return(

        <div class="container col-md-6 offset-md-3 mt-5">
        <form>
            <div class="form-row mb-4">
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
                    <input type="number" class="form-control" id="lastName" />
                </div>
            </div>
            <div class="form-group">
                <label for="address">Address 1</label>
                <input type="text" class="form-control" id="address" placeholder="Flat No., Street, Block, etc." />
            </div>
            <div class="form-row">

            <div class="form-group col-md-6">
                <label for="address">Area</label>
                <input type="text" class="form-control" id="area" placeholder="Marina, Bur Dubai, etc." />
            </div>

                <div class="form-group col-md-6">
                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" />
                </div>
               
            </div>
            <div class="form-row">
                <div class="form-group col-md-8">
                    <label for="country">Country</label>
                    <input type="text" class="form-control" id="country" placeholder="United Arab Emirates"/>
                </div>
                <div class="form-group col-md-4">
                    <label for="zip">P. O. BOX</label>
                    <input type="text" class="form-control" id="zip" placeholder="12345"/>
                </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
                <Link to="/profile" className="btn btn-warning">Save & Continue</Link>
            </div>
        </form>
        </div>
    )
}

export default EditAddress;