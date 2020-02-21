import React from 'react'
import ProductCardMAH from '../components/ProductCardMAH';

const ProductPageLayout = () => {
  const style = {
    marginLeft: "0px",
    marginRight: "0px",
    marginBottom: "16px"
  }
  


let cardQty = [1, 2, 3, 4, 5, 6, 7, 8]

// for below function with reqres.in, use the id themselves as id's AKA only change id={product.id}
const cardsPerDiv = cardQty.map((number) => <ProductCardMAH id={number} />)

  return(
    <div className="card-deck" style={style}>
      <div class="row">
        {cardsPerDiv}
      </div>
    </div>
  )
}
export default ProductPageLayout