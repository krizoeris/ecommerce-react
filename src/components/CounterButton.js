import React, {useState, useContext} from 'react';
import AppContext from '../AppContext'

const CounterButton = (prop) => {

    const setQuantity = (prop.quantity) ? prop.quantity : 1

    // Global State
    const [globalState, setGlobalState] = useContext(AppContext) 
    // Local State
    const [state, setState] = useState({
        quantity: setQuantity
    }) 

    const cart = globalState.cart
    const cartIndex = cart.findIndex(product => product._id == prop.product._id) //find the cart object key
    
    let quantity = (cart[cartIndex]) ? cart[cartIndex].quantity : state.quantity // check if product is already in the cart - this will set 1 to the product if not in the cart


    const increaseCount= () => {
        if(state.quantity < prop.product.stock) {
            quantity = quantity + 1 // Increment quantity by 1
            setState({...state, quantity: quantity})

            if(cart[cartIndex]){
                
                cart[cartIndex].quantity = quantity // assign quantity to the cart object quantity

                setGlobalState({
                    ...globalState,
                    cart: cart
                })  
            } else {
                prop.handleQuantity(quantity) // set quantity to product.js page
            }
        }
    }
    
    const decreaseCount = () => {
        if(state.quantity !== 1) {
            quantity = quantity - 1 // Decrement quantity by 1
            setState({...state, quantity: quantity})

            if(cart[cartIndex]){
                
                cart[cartIndex].quantity = quantity // assign quantity to the cart object quantity
    
                setGlobalState({
                    ...globalState,
                    cart: cart
                })  
            } else {
                prop.handleQuantity(quantity) // set quantity to product.js page
            }
        }
    }

    return (
        <div class="d-flex w-50">
            <button onClick ={decreaseCount} type="button" className="btn btn-secondary  d-inline">-</button>
            <span class="border border-dark rounded ml-2 mr-2 pt-1 pl-4 pr-4">{quantity}</span>
            <button onClick ={increaseCount} type="button" className="btn btn-secondary  d-inline" style={{textAlign:'center'}}>+</button>   
        </div>
    );
}


export default CounterButton;

