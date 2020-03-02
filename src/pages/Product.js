import React, {useState} from 'react';
import CartButton from '../components/CartButton.js';
import CounterButton from '../components/CounterButton.js';
import {Link} from 'react-router-dom'
import { ReactComponent as LoadingAnimation} from '../img/loading.svg'


const Product = (prop) => {

  const products = {
      loaded: false,
      products: [],
      images: [],
      specs: []
  }
  const [state, setState] = useState(products)

  const loadProducts = () => {
      fetch(process.env.REACT_APP_BACKEND_URL+'product/'+prop.match.params.id)
      .then(response => response.json())
      .then(json => {
          setState({
              ...state,
              products: json,
              images: json.images,
              specs: json.specs,
              loaded: true
          })
      })
  }

  if(state.products.length === 0) {
      loadProducts()
  }

  let product = state.products
  let images = state.images
  let specs = state.specs
  
  const availability =(state.stock <= 0) ? 'Out of Stock' : 'In Stock'

  // Set the quantity from CounterButton
  const handleQuantity = (qty) => {
    setState({
      ...state,
      products: {
        ...state.products,
        quantity: qty
      }
    })
  }

  if(state.loaded === false) {
    return(
      <div style={{marginTop:"100px"}}><LoadingAnimation /></div>
    )
  } else {

    
    return (
        <div class="container mt-4">

       <div class="row myRow1" style={{textAlign:'justify'}}>

       {/* Container 1 (image carousel) */}

          <div class="col-md myCol1">

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    {images.map((image, index) => 
      <li data-target="#carouselExampleIndicators" data-slide-to={image} className={index === 0 && "active"}></li>
    )}
  </ol>
  <div className="carousel-inner">
      {images.map((image, index) => 
        <div className={`carousel-item ${index === 0 && "active"}`}>
          <img src={image} class="d-block w-100" height="550px" alt={index}/>
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
          <h3 style={{marginTop:'3rem'}}>{product.name}</h3>    
     <h6 style={{color:'grey'}}>Brand: <a href="#">{product.brand}</a> </h6>
     <h6 style={{color:'grey'}}>Model: <a href="#">{product.model}</a> </h6>

     <ul class="list">
              <li style={{color:'#96c93d'}}>
                <span style={{color:'grey'}}>Availibility:</span>{availability}</li>
            </ul>
            
     <h6 class="title-price"><small>PRICE:</small></h6>
     <h3 style={{color:'#dd1818'}}>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'AED', })}</h3>
     
     <br/>
     
     

     <h6 class="title-quantity"><small>Quantity: </small></h6>
     <CounterButton product={product} handleQuantity={handleQuantity}/>
     <br/>
     
     
     {/* <button type="button" class="btn btn-success btn-block" style={{lineHeight: 2}}><i class="fas fa-cart-plus"></i> Add To Cart</button> */}
     <CartButton item={product} inStock={product.inStock}/>
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
            
         {product.productDetails}
            
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
      <td>{specs[0]}</td>    
      
    </tr>
    <tr>
      <th>Screen Size</th>
      <td>{specs[1]}</td>
      
      
    </tr>
    <tr>
      <th>Display Type</th>
      <td>{specs[2]}</td>
      
      
    </tr>
    <tr>
      <th>Battery Capacity</th>
      <td>{specs[3]}</td>
      
    </tr>
    <tr>
      <th>Front Camera</th>
      <td>{specs[4]}</td>
      
    </tr>
    <tr>
      <th>Back Camera</th>
      <td>{specs[5]}</td>
      
    </tr>
    <tr>
      <th>Processor</th>
      <td>{specs[6]}</td>
      
    </tr>
    <tr>
      <th>RAM</th>
      <td>{specs[7]}</td>
      
    </tr>
    <tr>
      <th>Capacity</th>
      <td>{specs[8]}</td>
      
    </tr>
    <tr>
      <th>Weight</th>
      <td>{specs[9]}</td>
      
    </tr>
    <tr>
      <th>Network</th>
      <td>{specs[10]}</td>
      
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

}

export default Product;
