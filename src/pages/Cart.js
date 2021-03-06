import React, { useState, useContext } from 'react'
import CartList from '../components/CartList'
import CartTotal from '../components/CartTotal'
import AppContext from '../AppContext'

const Cart = () => {

    const [globalState, setGlobalState] = useContext(AppContext)
    let cartData = globalState.cart;
    
    console.log(globalState.cart)

    const deleteProduct = id => {
        let newCart = cartData.filter(product => product._id !== id)
        setGlobalState({
            ...globalState,
            cart: newCart
        })

    }

    const cartTotal = cartData.map( product => (product.price*product.quantity)).reduce((a, b) => a + b, 0)

    const cartTotalQty = cartData.map( product => (product.quantity)).reduce((a, b) => a + b, 0)
    
    return (
        <div className="container">
            <div className="row mt-4">
                <div class="col-md-8">
                    <h3 className="mb-4">Shopping Cart ({cartTotalQty})</h3>
                    <CartList deleteProduct = {deleteProduct} />
                </div>
                <div class="col-md-4">
                    <CartTotal 
                        total={cartTotal.toLocaleString('en-US', {style: 'currency', currency: 'AED'})}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart