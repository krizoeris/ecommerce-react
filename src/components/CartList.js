import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext';

const CartList = (prop) => {

  const [globalState, setGlobalState] = useContext(AppContext);
  const cartProducts = globalState.cart

  return(
    <div className="card">
      <div className="card-body p-0">
        <table className="table m-0">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
            {
            cartProducts.length > 0 ? (
              cartProducts.map( product => (
                <tr key={product._id}>
                  <td scope="col">
                    <img src={product.images[0]} width="50" height="50" />
                    <span className="ml-2">{product.name}</span>
                  </td>
                  <td scope="col">
                    <input type="number" class="form-control w-25" value={product.quantity} />
                  </td>
                  <td scope="col">
                    <strong>AED {product.price}</strong>
                  </td>
                  <td scope="col">
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