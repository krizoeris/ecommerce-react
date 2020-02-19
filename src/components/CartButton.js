import React from 'react'


function CartButton(props) {
  const textStyle = {
    textAlign: "center"
  }

  let buttonStatus = {}

  const stockStatus = (stockStatus) => {
    return stockStatus ? 
      buttonStatus = {class: 'btn btn-success btn-sm', icon: 'fas fa-cart-arrow-down', text: '  Add to Cart!'}
      : 
      buttonStatus = {class: 'btn-secondary btn-sm disabled', icon: 'fa fas-shopping-cart', text: 'Not in stock'}
  }

  buttonStatus = stockStatus(props.inStock)

  return ( 
    <button type="button" style={textStyle} className={buttonStatus.class}><i class={buttonStatus.icon}></i>{buttonStatus.text}</button>
  )
}
export default CartButton