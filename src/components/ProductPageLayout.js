import React, { useState } from 'react'
import ProductCardMAH from '../components/ProductCardMAH';

const ProductPageLayout = () => {
  const style = {
    marginLeft: "0px",
    marginRight: "0px",
    marginBottom: "16px"
  }
  
  const [ productState, setProductState ] = useState({products: []})

  const loadProducts = () => {
    fetch('http://localhost:3010/product/all')
    .then(response => response.json())
    .then(json => {
      setProductState({
        ...productState,
        products: json
      })
    })
  }

  
  //Needs pagination

if (productState.products.length === 0) {
  loadProducts()
}

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