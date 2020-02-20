import React, {useState} from 'react';
import CartButton from '../components/CartButton.js';
import CounterButton from '../components/CounterButton.js';
import {Link} from 'react-router-dom'



const Product = () => {
    
    return (
        <div class="container">
        <div class="row myRow">
          <div class="col-md myCol">

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0409/7245/products/spacegrey_23c77483-1603-48c1-bed7-ec778312a2fe_1024x.jpg?v=1571439026" class="d-block w-100" alt="mainphone"/>
    </div>
    <div className="carousel-item">
      <img src="https://www.argomall.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/a/r/argomall-apple-iphone-11-pro-original-space-gray-1_5.jpg" class="d-block w-100" alt="phoneback"/>
    </div>
    <div className="carousel-item">
      <img src="https://microless.com/cdn/products/4faec1ccb9676461bf52e2e0753b35f3-hi.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

            {/* <img alt="iphone11" src={'https://bab-assets2.babapi.ooo/img/othe/0441617/36/6b/iphone11g2.jpg.b02d29366b.999x590x412.jpg'}  */}
            {/* style={{maxWidth: '100%', */}
            {/* height: 'auto'}}/> */}
          </div>


          <div class="col-md myCol">
          <h3 style={{marginTop:'3rem'}}>Apple iPhone 11 with Facetime - 64GB, 4G LTE, Space Grey</h3>    
     <h5 style={{color:'red'}}>Brand: <a href="#">Apple</a> </h5>
     <h6 style={{color:'grey'}}>Model: <a href="#">iPhone 11</a> </h6>

     <ul class="list">
              <li>
                <span style={{color:'red'}}>Availibility</span> : In Stock
              </li>
            </ul>

     <h6 class="title-price"><small>PRICE: </small><h3 style={{marginTop:'0px'}}>AED 0000</h3></h6>
     <br/>

     <h6 class="title-quantity"><small>Quantity: </small></h6>
     <CounterButton />
     <br/>
     <br/>
     
     <button type="button" class="btn btn-success btn-block" style={{lineHeight: 2}}><i class="fas fa-cart-plus"></i> Add To Cart</button>
     {/* <CartButton inStock={state.stock}/> 
     Item needs to be in JSON in order for button be any use*/}
          </div>
        </div>

<br/>

 <div className="card-footer">
                <Link className="btn btn-outline-secondary" to="/categories"><i class="fa fa-angle-left"></i> Continue Shopping</Link>
            </div>

        <div class="row myRow">
          <div class="colmyCol">

<h4 style={{textAlign:'center'}}>Product Description & Specs</h4>
<div style={{width:'100%', borderTop:'1px solid silver'}}>
         <p style={{padding:'15px'}}>
             {/* <small> */}
             Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this phone allows you keep in touch even on the go. 

             With its built-in photo editor, the Galaxy S4 allows you to edit photos with the touch of a finger, eliminating extraneous background items. Usable with most carriers, this smartphone is the perfect companion for work or entertainment.
             {/* </small> */}
         </p>
         <small>
             <ul>
                 <li>Super AMOLED capacitive touchscreen display with 16M colors</li>
                 <li>Available on GSM, AT T, T-Mobile and other carriers</li>
                 <li>Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 / 2100 LTE; 700 MHz Class 17 / 1700 / 2100 networks</li>
                 <li>MicroUSB and USB connectivity</li>
                 <li>Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and Bluetooth</li>
                 <li>Wi-Fi hotspot to keep other devices online when a connection is not available</li>
                 <li>SMS, MMS, email, Push Mail, IM and RSS messaging</li>
                 <li>Front-facing camera features autofocus, an LED flash, dual video call capability and a sharp 4128 x 3096 pixel picture</li>
                 <li>Features 16 GB memory and 2 GB RAM</li>
                 <li>Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android OS</li>
                 <li>17 hours of talk time, 350 hours standby time on one charge</li>
                 <li>Available in white or black</li>
                 <li>Model I337</li>
                 <li>Package includes phone, charger, battery and user manual</li>
                 <li>Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches deep and weighs a mere 4.59 oz </li>
             </ul>  
         </small>
     </div>
          </div>
         
        </div>

        <style>
          
        </style>
      </div>
    );

}

export default Product;
// 
// 
// import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './CartItem.styles'
// 
// export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
//   return (
    // <CartItemContainer>
    //   <CartItemImage src={imageUrl} alt="item" />
    //   <ItemDetailsContainer>
        // <span>{name}</span>
        // <span>
        //   {quantity} x ${price}
        // </span>
    //   </ItemDetailsContainer>
    // </CartItemContainer>
//   )
// }
// 
// export default React.memo(CartItem)


// name:  {
    // type: String,
    // required: true
// },
//

//description: {
//    Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this phone allows you keep in touch even on the go. With its built-in photo editor, the Galaxy S4 allows you to edit photos with the touch of a finger, eliminating extraneous background items. Usable with most carriers, this smartphone is the perfect companion for work or entertainment.
// 
// Super AMOLED capacitive touchscreen display with 16M colors
// Available on GSM, AT&T, T-Mobile and other carriers
// Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 / 2100 LTE; 700 MHz Class 17 / 1700 / 2100 networks
// MicroUSB and USB connectivity
// Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and Bluetooth
// Wi-Fi hotspot to keep other devices online when a connection is not available
// SMS, MMS, email, Push Mail, IM and RSS messaging
// Front-facing camera features autofocus, an LED flash, dual video call capability and a sharp 4128 x 3096 pixel picture
// Features 16 GB memory and 2 GB RAM
// Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android OS
// 17 hours of talk time, 350 hours standby time on one charge
// Available in white or black
// Model I337
// Package includes phone, charger, battery and user manual
// Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches deep and weighs a mere 4.59 oz
// },



// images: {
    // type: Array, // Products should have a slideshow that's why it is array
    // default: []
// },



// stock:  {
    // type: Number,
    // required: true
// },



// price:  {
    // type: Number,
    // required: true
// },



// category: {Apple}
    // type: Schema.Types.ObjectId, // Connects to category
    // ref: 'category'
// },
// brand:  {
    // type: String,
    // required: true
// },
// model:  {iphone
    // type: String,
    // required: true
// },
// date: {
    // type: Date,
    // default: Date.now
// }
// });