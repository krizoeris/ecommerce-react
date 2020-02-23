import React from 'react'
import CartButton from './CartButton'

const ProductCard = (props) => {

  // const [item, setItem] = useState(
  //   props.product
  // )
  
  const item = props.item
  const images = props.images


  const textStyle = {
    textAlign: "center"
  }

  function stockStatus(stockBoolean) {
  return (stockBoolean > 0) ? 
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
        
        <div id={`carousel${item._id}`} class="carousel slide" data-ride="carousel"  data-interval="false">
          <ol class="carousel-indicators">
            
            {images.map(img, index => (
            <li data-target={`#carousel${item._id}`} data-slide-to={`${index}`} class="active"></li>
            ))}
            
          </ol>
        <div class="carousel-inner">
          
          {images.map(img, index => 
            <div class={`carousel-item ${index==0 && 'active'}`}>
              <img src={`${img}`} class="d-block w-100" alt="..."/>
            </div>
        )}
        </div>
        <a class="carousel-control-prev" href={`#carousel${item._id}`} role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href={`#carousel${item._id}`} role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">{item.model}</h5>
        <p class="card-text">{item.name}</p>
        <div style={textStyle}>
          <p class="card-text">AED {item.price}</p>
          <CartButton item={item}/>
        </div>
        <br/>
        <div class="card-footer" style={textStyle}>
        {stockStatus(item.stock)}
      </div>
      </div>
    </div>
    </div>
  )
}
export default ProductCard