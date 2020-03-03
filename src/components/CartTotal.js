import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'

const CartTotal = (prop) => {

    const [globalState, setGlobalState] = useContext(AppContext)

    return(
        <div className="card">
            <div className="card-body">
                <h5>
                    <span>Total: </span>
                    <strong class="text-align">{prop.total}</strong>
                </h5>
                <hr />
                <center>
                    <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/misc/payments.png" width="50%"/>
                </center>
            </div>
            <div className="card-footer">
                <Link className="btn btn-success w-100" to={globalState.cart.length === 0 ?  console.log("nothing to checkout") : ((globalState.loggedIn) ? "/checkout" : "/login")}>Proceed to Checkout <i class="fa fa-arrow-circle-right"></i></Link>
            </div>
        </div>
    )
}

export default CartTotal