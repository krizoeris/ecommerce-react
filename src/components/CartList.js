import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'
import CounterButton from './CounterButton'

const CartList = (prop) => {

  const [globalState, setGlobalState] = useContext(AppContext);
  const cartProducts = globalState.cart

  console.log(cartProducts)

  return(
    <div className="card">
      <div className="card-body p-0">
        <table className="table m-0">
          <thead>
            <tr>
              <th colspan="2">Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
            {
            cartProducts.length > 0 ? (
              cartProducts.map( product => (
                <tr key={product._id}>
                  <td width="50px">
                    <img src={product.images[0]} width="50" height="50" />
                  </td>
                  <td width="300px">
                    <strong><Link class="text-dark" to={`/product/${product._id}`}>{product.name}</Link></strong>
                  </td>
                  <td>
                    {/* <CounterButton quantity={product.stock} stock={product.quantity} item={product} /> */}
                    <CounterButton product={product} />
                  </td>
                  <td>
                    <strong>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'AED', })}</strong>
                  </td>
                  <td>
                    <button onClick={() => prop.deleteProduct(product._id)} className="btn btn-danger"><i class="fa fa-times"></i></button>
                  </td>
                </tr>
              ))
            ): (
              <tr>
                <td colSpan={4}>Empty Cart!</td>
              </tr>
              )
            }
          </thead>
        </table>
      </div>
      <div className="card-footer">
        <Link className="btn btn-outline-secondary" to="/categories"><i class="fa fa-angle-left"></i> Continue Shopping</Link>
      </div>
    </div>
  )
}

export default CartList