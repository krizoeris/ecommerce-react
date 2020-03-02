import React from 'react'
import ConfirmDetails from '../components/ConfirmCheckout'

const OrderHistory = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Order History</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th width="50px"></th>
                        <th>Date</th>
                        <th>Order No.</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-toggle="collapse" data-target="#collapseExample" aria-expanded="false">
                        <td width="40px"><i class="fas fa-plus"></i></td>
                        <td>09/03/2020</td>
                        <td>51231123</td>
                        <td>AED 1000</td>
                    </tr>
                    <tr className="collapse" id="collapseExample">
                        <td colspan="4">
                            <div class="m-4">
                                <ConfirmDetails />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
