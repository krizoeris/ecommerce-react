import React from 'react'

const ProductCard = (prop) => {

    return(
        <div class="col-md-3 p-0 ">
            <div class="card rounded-0 m-2 p-0">
                <img src={prop.image} class="card-img-top" alt="..." height={prop.height}/>
                <div class="card-body">
                    <h5 class="card-title">{prop.name}</h5>
                    <p class="card-text">AED {prop.price}</p>
                    <a href="#" class="btn btn-primary w-100 rounded-0">Add to Cart</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard