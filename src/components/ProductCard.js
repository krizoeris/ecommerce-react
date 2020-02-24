import React from 'react'
import {Link} from 'react-router-dom'
import CartButton from './CartButton'

const ProductCard = (prop) => {

    return(
        <div class="col-md-3 p-0 ">
            <div class="card rounded-0 m-2 p-0">
                <div id={`carousel${prop.id}`} class="carousel slide" data-ride="carousel"  data-interval="false">
                    <ol class="carousel-indicators">
                    {
                        prop.images.map((value, key) =>
                            <li data-target={`#carousel${prop.id}`} data-slide-to={key} class={key === 0 && "active"}></li>
                        )
                    }
                    </ol>
                    <div class="carousel-inner">
                    {
                        prop.images.map((value, key) =>
                            <div class={`carousel-item ${key === 0 && "active"}`}>
                                <img src={value} class="d-block w-100"  height={prop.height} alt="..."/>
                            </div>
                        )
                    }
                    </div>
                    <a class="carousel-control-prev" href={`#carousel${prop.id}`} role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href={`#carousel${prop.id}`} role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="card-body">
                    <Link to={`/product/${prop.id}`}><h5 class="card-title text-util">{prop.name.substr(0, 20)+'...'}</h5></Link>
                    <p class="card-text">AED {prop.price}</p>
                    <CartButton item={prop.product}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard