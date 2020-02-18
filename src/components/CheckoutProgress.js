import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";
import ConfirmCheckout from "./ConfirmCheckout";
import CheckoutProgressBar from "./CheckoutProgressBar";

const CheckoutProgress = () => {

    const [state, setState] = useState({
        progress: 0,
    });

    const nextStep = () => {
        let step = (state.progress < 2) ? state.progress + 1 : state.progress
        setState({...state, progress: step})
    }

    const prevStep = () => {
        let step = (state.progress > 0) ? state.progress - 1 : state.progress
        setState({...state, progress: step})
    }

    return(
        <div class="mb-4">
            <CheckoutProgressBar progress={state.progress} />
            {state.progress === 0 && 
                <div>
                    <ShippingDetails nextStep={nextStep} /> 
                </div>
            }
            {state.progress == 1 &&
                <div class="container" style={{"max-width": "400px"}}>
                    <PaymentDetails nextStep={nextStep} prevStep={prevStep} />
                </div>
            }
            {state.progress == 2 && 
                <div>
                    <ConfirmCheckout /> 
                    <hr />
                    <div class="d-flex justify-content-between">
                        <Link to="/cart" className="btn btn-danger">Cancel</Link>
                        <button onClick={nextStep} className="btn btn-success">Confirm & Place Order</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CheckoutProgress