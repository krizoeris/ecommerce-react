import React from 'react'
import {Link} from 'react-router-dom'

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
                                <small>Kriztian Eris Labatete</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0">
                                <small>Flat 110, Al Falasi Bldg., Muhaisnah 4, Dubai</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0">
                                <small>P.O. Box 69141, Dubai, UAE</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0">
                                <small><i class="fa fa-envelope"></i> kriztian.eris@gmail.com</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0">
                                <small><i class="fa fa-phone"></i> +971589979765</small>
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
                            <li class="list-group-item border-0 m-0 p-0 d-flex justify-content-between">
                                <small>iPhone 11</small>
                                <small>AED 4,000</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0 d-flex justify-content-between">
                                <small>Samsung Galaxy Note</small>
                                <small>AED 3,500</small>
                            </li>
                            <li class="list-group-item border-0 m-0 p-0 d-flex justify-content-between">
                                <small>Google Pixel</small>
                                <small>AED 3,500</small>
                            </li>
                            <li class="list-group-item border-top border-bottom-0 border-left-0 border-right-0 border-dark m-0 p-0 mt-2 pt-2 d-flex justify-content-between">
                                <strong>Total:</strong>
                                <strong>AED 3,000</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDetails