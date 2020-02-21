import React, {useState} from 'react';
import CartButton from '../components/CartButton.js';
import CounterButton from '../components/CounterButton.js';
import {Link} from 'react-router-dom'

//new changes

const Product = (prop) => {

  const iPhone11 = {id: 1,
    name: 'Apple iPhone 11 Pro with Facetime - 64GB, 4G LTE, Space Grey', 
  brand: 'Apple', 
  model: 'iPhone 11 Pro', 
  price: 4000,
  inStock: true, 
  stock:10,
  images: ["https://cdn.shopify.com/s/files/1/0409/7245/products/spacegrey_23c77483-1603-48c1-bed7-ec778312a2fe_1024x.jpg?v=1571439026", "https://www.argomall.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/a/r/argomall-apple-iphone-11-pro-original-space-gray-1_5.jpg", "https://microless.com/cdn/products/4faec1ccb9676461bf52e2e0753b35f3-hi.jpg"],
productDetails:'A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less. And the highest‑quality video in a smartphone, so your memories look better than ever.',
productSpecs: ['iOS', '5.8-inch Notch Display', '2436x1125 Liquid Retina display', '3,046mAh', '12 Mega Pixels', 'Triple 12 Mega Pixels', 'Apple A13 Bionic', '4GB', '64GB', '188g', '4G LTE']
}
  const [state, setState] = useState(iPhone11)

  const availability =(state.stock <= 0) ? 'Out of Stock' : 'In Stock'

    
    return (
        <div class="container">

       <div class="row myRow1" style={{textAlign:'justify'}}>

       {/* Container 1 (image carousel) */}

          <div class="col-md myCol1">

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    {state.images.map((image, index) => 
      <li data-target="#carouselExampleIndicators" data-slide-to={image} className={index === 0 && "active"}></li>
    )}
  </ol>
  <div className="carousel-inner">
      {state.images.map((image, index) => 
        <div className={`carousel-item ${index === 0 && "active"}`}>
          <img src={image} class="d-block w-100" alt={index}/>
        </div>
      )}
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
          </div>


{/* Container 2 (Add to Cart) */}

          <div class="col-md myCol2">
          <h3 style={{marginTop:'3rem'}}>{state.name}</h3>    
     <h6 style={{color:'grey'}}>Brand: <a href="#">{state.brand}</a> </h6>
     <h6 style={{color:'grey'}}>Model: <a href="#">{state.model}</a> </h6>

     <ul class="list">
              <li style={{color:'#96c93d'}}>
                <span style={{color:'grey'}}>Availibility:</span>{availability}</li>
            </ul>
            
     <h6 class="title-price"><small>PRICE:</small></h6>
     <h3 style={{color:'#dd1818'}}>AED {state.price}.00</h3>
     
     <br/>
     
     

     <h6 class="title-quantity"><small>Quantity: </small></h6>
     <CounterButton quantity={state.stock} />

     <br/>
     
     
     {/* <button type="button" class="btn btn-success btn-block" style={{lineHeight: 2}}><i class="fas fa-cart-plus"></i> Add To Cart</button> */}
     <CartButton item={state} inStock={state.inStock}/>
     <br/>
     
     <Link className="btn btn-warning btn-block mt-3" to="/cart" style={{lineHeight: 2}}><i class="fas fa-eye"></i> View Shopping Cart</Link>   
          
          </div>
        </div>

<br/>

 <div className="card-footer" style={{textAlign:'justify'}}>
                <Link className="btn btn-outline-secondary" to="/categories"><i class="fa fa-angle-left"></i> Continue Shopping</Link>
            </div>

            <br/>



{/* container 3 (Product Details) */}
        <div class="row justify-content-center myRow2">    

<h4  style={{textAlign:'center', color:'grey'}}>Product Details</h4>
<div style={{width:'100%', borderTop:'1px solid silver'}}>
         <p style={{padding:'15px', textAlign:'justify'}}>
            
         {state.productDetails}
            
         </p>
         </div>
         </div>



{/* Container 4 (Product Specs) */}

         <div class="row myRow3">
         <div class="col myCol1" style={{textAlign:'justify'}}>

         <table class="table table-striped">
 
  <tbody>
  <tr>
      <th>Operating System</th>
      <td>{state.productSpecs[0]}</td>    
      
    </tr>
    <tr>
      <th>Screen Size</th>
      <td>{state.productSpecs[1]}</td>
      
      
    </tr>
    <tr>
      <th>Display Type</th>
      <td>{state.productSpecs[2]}</td>
      
      
    </tr>
    <tr>
      <th>Battery Capacity</th>
      <td>{state.productSpecs[3]}</td>
      
    </tr>
    <tr>
      <th>Front Camera</th>
      <td>{state.productSpecs[4]}</td>
      
    </tr>
    <tr>
      <th>Back Camera</th>
      <td>{state.productSpecs[5]}</td>
      
    </tr>
    <tr>
      <th>Processor</th>
      <td>{state.productSpecs[6]}</td>
      
    </tr>
    <tr>
      <th>RAM</th>
      <td>{state.productSpecs[7]}</td>
      
    </tr>
    <tr>
      <th>Capacity</th>
      <td>{state.productSpecs[8]}</td>
      
    </tr>
    <tr>
      <th>Weight</th>
      <td>{state.productSpecs[9]}</td>
      
    </tr>
    <tr>
      <th>Network</th>
      <td>{state.productSpecs[10]}</td>
      
    </tr>
  </tbody>
</table>

</div>


{/* Container 5 (Offers) */}


<div class="col align-self-center myCol2">
<h5 style= {{color:'grey'}}>We Offer:</h5>
<div class="p-3 mb-2 bg-warning text-dark" style={{textAlign:'center'}}><i class="fas fa-award"></i> &nbsp; <b>Free 1 Year Extended Warranty</b></div>
<div class="p-3 mb-2 bg-warning text-dark" style={{textAlign:'center'}}><i class="fas fa-truck"></i> &nbsp; <b>Free Delivery Within 24 Hours</b></div>
<div class="p-3 mb-2 bg-warning text-dark" style={{textAlign:'center'}}><i class="fas fa-sync-alt"></i> &nbsp; <b>Hassle Free Returns/Exchange Within 10 Days</b></div>
<div class="p-3 mb-2 bg-warning text-dark" style={{textAlign:'center'}}><i class="fas fa-thumbs-up"></i> &nbsp; <b>Best Price Guarantee</b></div>


</div>
     </div>
          
         </div>
        
      
    );

}

export default Product;
