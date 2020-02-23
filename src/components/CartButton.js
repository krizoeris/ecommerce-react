import React, { useContext } from 'react'
import AppContext from '../AppContext';

   
function CartButton(props) {
  const textStyle = {
    textAlign: "center"
  }

  const [globalState, setGlobalState] = useContext(AppContext)

  const handleClick = () => {
    //Check if ITEM is in stock
    if (props.item.stock > 0) {
      
        //Check if product is already in cart
        if (globalState.cart.find(product => product._id == props.item._id)) { // undefined = falsey
          let cartResults = globalState.cart.find(product => product._id == props.item._id); // returns an Array always
        
          // > TRUE > add quantity to cart
          cartResults.quantity += 1;
          let oldCart = globalState.cart;
          let newCart = oldCart.filter((prod)=>prod._id !== cartResults._id);
          newCart.push(cartResults)

          setGlobalState({
            ...globalState,
            cart: newCart
          })  

        } else { 
          
          // > FALSE> add entire product to cart with quantity = 1
          props.item.quantity = 1;
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
    return (stockStatus > 0) ? 
      //Changed the buttons width to 100 and removed btn-sm
      buttonStatus = {class: 'btn btn-success w-100', icon: 'fas fa-cart-arrow-down', text: '  Add to Cart!'}
      : 
      buttonStatus = {class: 'btn-secondary w-100 disabled', icon: 'fa fas-shopping-cart', text: 'Not in stock'}
  }

  buttonStatus = stockStatus(props.item.stock)

  return ( 
    <button onClick={handleClick} type="button" style={textStyle} className={buttonStatus.class}><i class={buttonStatus.icon}></i>{buttonStatus.text}</button>
  )
}
export default CartButton