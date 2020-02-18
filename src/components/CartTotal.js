import React from 'react'
import {Link} from 'react-router-dom'

const CartTotal = (prop) => {
    return(
        <div className="card">
            <div className="card-body">
                <h5>
                    <span>Total: </span>
                    <strong class="text-align">AED {prop.total}</strong>
                </h5>
                <hr />
                <center>
                    <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/misc/payments.png" width="50%"/>
                </center>
            </div>
            <div className="card-footer">
                <Link className="btn btn-success w-100" to="/checkout">Proceed to Checkout <i class="fa fa-arrow-circle-right"></i></Link>
            </div>
        </div>
    )
}

export default CartTotal