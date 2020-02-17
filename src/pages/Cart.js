import React, {useState} from 'react'
import CartList from '../components/CartList'
import CheckoutCard from '../components/CheckoutCard'

const Cart = () => {
    const cartData = [
        { id: 1, name: 'iPhone 11', quantity: 1, price: 4000, image:"https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg" },
        { id: 2, name: 'Samsung Galaxy Note', quantity: 10, price: 3500, image:"https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-note/pdp/sm-n950/midnight-black/Note8-Front-S-Pen-Midnight-Black-1.jpg?$product-details-jpg$" },
        { id: 3, name: 'Google Pixel', quantity: 5, price: 3500, image:"https://www.gizmochina.com/wp-content/uploads/2018/03/aa.png" },
    ]

    const [cartProducts, setCartProducts] = useState(cartData)

    const deleteProduct = id => {
        setCartProducts(cartProducts.filter(product => product.id !== id))
    }

    const cartTotal = () => {
        return cartProducts.map( product => product.price).reduce((a, b) => a + b, 0)
    }
    
    return (
        <div className="container">
            <div className="row mt-4">
                <div class="col-md-8">
                    <h3 className="mb-4">Shopping Cart ({cartProducts.length})</h3>
                    <CartList cartProducts = {cartProducts} deleteProduct = {deleteProduct} />
                </div>
                <div class="col-md-4">
                    <CheckoutCard 
                        total={cartTotal()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart