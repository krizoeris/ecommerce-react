import React from 'react'

const ConfirmDetails = (prop) => {
    return(
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <strong class="mb-2">Shipping Details</strong>
                        <hr />
                        <ul class="list-group">
                            <li class="list-group-item border-0 m-0 p-0">
                                <small>{prop.name}</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0">
                                <small>{prop.address[0]}</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0">
                                <small>{prop.address[1]}</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0">
                                <small><i class="fa fa-envelope"></i> {prop.email}</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0">
                                <small><i class="fa fa-phone"></i> +971{prop.phone}}</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                    <strong class="mb-2">Order Summary</strong>
                        <hr />
                        <ul class="list-group">
                            {prop.orderDetails.map(product => 
                                <li class="list-group-item border-0 m-0 p-0 d-flex justify-content-between">
                                    <small>{product.name}</small>
                                    <small>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'AED', })}</small>
                                </li>
                            )}
                            <li class="list-group-item border-top border-bottom-0 border-left-0 border-right-0 border-dark m-0 p-0 mt-2 pt-2 d-flex justify-content-between">
                                <strong>Total:</strong>
                                <strong>{prop.total.toLocaleString('en-US', {style: 'currency', currency: 'AED', })}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDetails