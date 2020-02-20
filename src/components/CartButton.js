import React, { useContext } from 'react'
import AppContext from '../AppContext';

   
function CartButton(props) {
  const textStyle = {
    textAlign: "center"
  }

  const [globalState, setGlobalState] = useContext(AppContext)

  const handleClick = () => {
    //Check if ITEM is in stock
    if (props.item.inStock) {
      
      // Check if cart is empty
      if (globalState.cart.length > 0) {
        //Check if product is already in cart
        let cartResults = globalState.cart.find(product => product.id == props.item.id) // returns an Array always
        
        if(cartResults.length > 0) {
          // > TRUE > add qty to cart
          cartResults[0].qty += 1

        } else { 
          
          // > FALSE> add entire product to cart with qty = 1
          props.item.qty = 1
          let newCart = [...globalState.cart, props.item];
          setGlobalState({
            ...globalState,
            cart: newCart
          })
        } 
      } else {
        props.item.qty = 1
        let newCart = [...globalState.cart, props.item];
        setGlobalState({
          ...globalState,
          cart: newCart
        })
      }
    } // in future can add alert for 'not in stock'
  }






  let buttonStatus = {}

  const stockStatus = (stockStatus) => {
    return stockStatus ? 
      buttonStatus = {class: 'btn btn-success btn-sm', icon: 'fas fa-cart-arrow-down', text: '  Add to Cart!'}
      : 
      buttonStatus = {class: 'btn-secondary btn-sm disabled', icon: 'fa fas-shopping-cart', text: 'Not in stock'}
  }

  buttonStatus = stockStatus(props.item.inStock)

  return ( 
    <button onClick={handleClick} type="button" style={textStyle} className={buttonStatus.class}><i class={buttonStatus.icon}></i>{buttonStatus.text}</button>
  )
}
export default CartButton