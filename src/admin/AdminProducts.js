import React, { useState } from 'react';
import AdminEditModal from '../components/AdminEditModal'

const AdminProducts = () => {

const [state, setState] = useState({
  isLoaded: false,
  products: []
})

const getData = () => {fetch(process.env.REACT_APP_BACKEND_URL+'product/all') //change after Heroku
    .then(response => response.json())
    .then(jsonData => {
      setState({
        ...state,
        products: jsonData,
        isLoaded: true
      })
    })
  }

  if (state.products.length === 0) {
    getData()
  }

// const handleEdit = (prod) => {
// return (<AdminEditModal product={prod}/>)
// }

const handleDelete = (prod) => {
console.log(prod.model, "will be deleted")
}

  return(
    <div className="container" style={{maxHeight: "calc(100vh-9rem)", overflowY: "auto"}}>
    <div className="card">
    <div className="card-body p-0">
      <table className="table m-0">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
          {
          state.products.length > 0 ? (
            state.products.map( product => 
              <tr key={product._id}>
              <AdminEditModal product={product}/>
                <td scope="col">
                  <span>{product.model}</span>
                </td>
                <td>
                  <span>{product.name}</span>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={"#modal"+product.id}>Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={handleDelete(product)}>Delete</button>
                </td>
              </tr>
              
            )
          )
          :
          <p>ERROR FETCHING DATA / NO DATA FOUND</p>
          }


        </thead>
      </table>
    </div>
    </div>
    </div>
  )
}
export default AdminProducts;