import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Loading} from '../img/loading.svg'
import AppContext from '../AppContext'
import ConfirmDetails from '../components/ConfirmCheckout'

const OrderHistory = () => {

    const [globalState, setGlobalState] = useContext(AppContext)
    
    const [state, setState] = useState({
        toggledRow: [],
        orders: [],
        loaded: false
    })

    const userId = globalState.userId
    const orders = state.orders

    if(state.orders.length === 0) {
        fetch(process.env.REACT_APP_BACKEND_URL+'order/user/'+userId)
        .then(response => response.json())
        .then(json => setState({
            ...state,
            orders: json,
            loaded: true
        }))
    }

    const handleShowOrderDetails = index => {
        let rows = state.toggledRow
        if(rows.includes(index)) {
            rows = rows.filter(row => row !== index)
            setState({
                ...state,
                toggledRow: rows
            })
        } else {
            rows.push(index)
            setState({
                ...state,
                toggledRow: rows
            })
        }
    }

    return (
        <div className="container mt-4">
            <h3 style={{textAlign:'center', color:'grey'}}><i class="fa fa-file-invoice"></i> Order History</h3>
            <Link className="btn btn-outline-secondary" to="/"><i class="fa fa-angle-left"></i> Back To Home</Link>
            <hr/>
            {state.loaded &&
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th width="30px"></th>
                        <th>Date</th>
                        <th>Order No.</th>
                        <th>Total</th>
                    </tr>
                </thead>
                    {orders.map((order, index) => 
                        <tbody>
                            <tr onClick={() => handleShowOrderDetails(index)}>
                                <td width="40px"><i class={`fas fa-${(state.toggledRow.includes(index)) ? `minus` : `plus`}`}></i></td>
                                <td>{order.date}</td>
                                <td>{order._id}</td>
                                <td>{order.total.toLocaleString('en-US', {style: 'currency', currency: 'AED', })}</td>
                            </tr>
                            {state.toggledRow.includes(index) &&
                                <tr className="bg-light">
                                    {console.log("success")}
                                    <td colspan="4">
                                        <div class="m-4">
                                            <ConfirmDetails 
                                                orderDetails={order.orderDetail}
                                                name={order.name}
                                                address={order.address}
                                                email={order.email}
                                                phone={order.phone}
                                                total={order.total}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    )}
            </table>
            }
            {!state.loaded &&
                <div style={{marginTop: "40px"}}>
                    <Loading />
                </div>
            }
        </div>
    )
}

export default OrderHistory
