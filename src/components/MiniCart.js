import React, {useContext} from 'react';
import AppContext from '../AppContext';

const MiniCart = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext)
  let cart = globalState.cart;
  
  // Total items in cart
  let cartQty =  cart.reduce((acc , currentProd)=>{
    const { qty } = currentProd;
  return acc +  qty;
  }, 0)

  // Total price of cart
  let cartTotal =  cart.reduce((acc , currentProd)=>{
    const { price, qty } = currentProd;
    const totalAmount = parseFloat(currentProd.price) * qty;
  return acc + totalAmount;
  }, 0)




  let cartContents = {}
  return(  
  <div style={{color: "white", border: "2px solid white"}}>
  {cart.length > 0 && cartQty}<i className="fas fa-shopping-cart"></i>
  </div>
)
}
export default MiniCart