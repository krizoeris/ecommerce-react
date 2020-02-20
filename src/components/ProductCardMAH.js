import React, {useState} from 'react'
import PhonePic from '../img/iphone11.jpg'
import PhonePic2 from '../img/iphone11-gold.png'
import CartButton from './CartButton'

const ProductCard = (props) => {

  const [product, setProduct] = useState(
        {id: 1, image: PhonePic, name: "iPhone 11", text: "Sexiness embodied, price unjustified, be a Jobbs-o-holic!", inStock: true, price: 3900}
  )

  // eventually need fetch data here
  

  const textStyle = {
    textAlign: "center"
  }

  function stockStatus(stockBoolean) {
  return (stockBoolean) ? 
  <div>
    <div class="spinner-grow spinner-grow-sm text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <small class="text-muted">  IN STOCK NOW</small>
  </div>
  :
  <small class="text-muted">OUT OF STOCK</small>
  }

  return(
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{paddingBottom: "16px"}}>
      <div class="card">
        {/* image carousel */}
        <div id={`carousel${props.id}`} class="carousel slide" data-ride="carousel"  data-interval="false">
          <ol class="carousel-indicators">
            <li data-target={`#carousel${props.id}`} data-slide-to="0" class="active"></li>
            <li data-target={`#carousel${props.id}`} data-slide-to="1"></li>
          </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={PhonePic} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={PhonePic2} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <a class="carousel-control-prev" href={`#carousel${props.id}`} role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href={`#carousel${props.id}`} role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">{product.text}</p>
        <div style={textStyle}>
          <p class="card-text">{product.price}</p>
          <CartButton item={product}/>
        </div>
        <br/>
        <div class="card-footer" style={textStyle}>
        {stockStatus(product.inStock)}
      </div>
      </div>
    </div>
    </div>
  )
}
export default ProductCard