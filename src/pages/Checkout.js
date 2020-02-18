import React from 'react'
import CheckoutProgress from '../components/CheckoutProgress'

const Checkout = () => {
    return(
        <div class="container" style={{"max-width": "700px"}}>
            <h3 className="mb-4 mt-4">Checkout</h3>
            <CheckoutProgress />
        </div>
    )
}

export default Checkout