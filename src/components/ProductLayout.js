import React from 'react'

const ProductLayout = (prop) => {

    return(
        <div class="row m-0">
            {prop.children}
        </div>
    )
}

export default ProductLayout