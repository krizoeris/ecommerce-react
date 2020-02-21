import React from 'react'

const PaymentDetails = (prop) => {
    return(
        <form role="form mx-auto">
            <div class="form-group">
                <label for="cardNumber">Card number</label>
                <div class="input-group">
                    <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required="" />
                    <div class="input-group-append">
                        <span class="input-group-text text-muted">
                            <i class="fab fa-cc-visa mx-1"></i>
                            <i class="fab fa-cc-amex mx-1"></i>
                            <i class="fab fa-cc-mastercard mx-1"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-sm-8">
                    <label><span class="hidden-xs">Expiration</span></label>
                    <div class="input-group">
                        <input type="number" placeholder="MM" name="" class="form-control" required="" />
                        <input type="number" placeholder="YY" name="" class="form-control" required="" />
                    </div>
                </div>
                <div class="form-group col-sm-4">
                    <label data-toggle="tooltip" title="" data-original-title="Three-digits code on the back of your card">CVV</label>
                    <input type="text" required="" class="form-control" />
                </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
                <button onClick={prop.prevStep} className="btn btn-outline-dark">Go back to Shipping Details</button>
                <button onClick={prop.nextStep} className="btn btn-warning" type="submit">Continue</button>
            </div>
        </form>
    )
}

export default PaymentDetails