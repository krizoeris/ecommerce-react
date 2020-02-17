import React from 'React'
import ShippingDetails from 'ShippingDetails'
import PaymentDetails from 'PaymentDetails'

const Checkout = () => {
    return(
        <div class="container">
            <h3 className="mb-4 mt-4">Checkout</h3>
            <ShippingDetails />
            <PaymentDetails />
            <PlaceOrderButton />
        </div>
    )
}

export default Checkout