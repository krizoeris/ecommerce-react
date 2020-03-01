import React from 'react'
import {Link} from 'react-router-dom'

const EditAddress = (prop) => {
    return(

        <div class="container col-md-6 offset-md-3 mt-5">
        <form>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Flat No., Street, Block, etc." />
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="address">State</label>
                    <input type="text" class="form-control" id="state" placeholder="Marina, Bur Dubai, etc." />
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

            <div class="form-group ">
                <label for="phone">Phone Number</label>
                <input type="number" class="form-control" id="phone" />
            </div>

            <hr />
            <div class="d-flex justify-content-between">
                <Link to="/profile" className="btn btn-success">Save</Link>
            </div>
        </form>
        </div>
    )
}

export default EditAddress;