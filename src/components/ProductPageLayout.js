import React, { useState } from 'react'
import ProductCardMAH from '../components/ProductCardMAH';

const ProductPageLayout = (prop) => {
  const style = {
    marginLeft: "0px",
    marginRight: "0px",
    marginBottom: "16px"
  }
  
  const [ productState, setProductState ] = useState({products: prop.products})

  return(
    <div className="card-deck" style={style}>
      <div class="row">
      {productState.products.map(product => (
        <ProductCardMAH item={product} images={product.images}/>
      ))}
      </div>
    </div>
  )
}
export default ProductPageLayout