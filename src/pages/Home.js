import React, { useState } from 'react'
import PageCarousel from '../components/PageCarousel'
import TopJumbotron from '../components/TopJumbotron'
import ProductPageLayout from '../components/ProductPageLayout'
import { ReactComponent as LoadingAnimation} from '../img/loading.svg'

const Home = () => {

  const [state, setState] = useState({
    loaded: false,
    products: []
  })

  // loadProduct function was origanally inside of ProductPageLayout
  // It was put here to show loading
  const loadProducts = () => {
    fetch(process.env.REACT_APP_BACKEND_URL+'product/all')
    .then(response => response.json())
    .then(json => {
      setState({
        ...state,
        products: json,
        loaded: true
      })
    })
  }
  
  //Needs pagination
  if(state.products.length === 0) {
    loadProducts()
  }

  if(state.loaded === false) {
    return(
      <div style={{marginTop:"100px"}}><LoadingAnimation /></div>
    )
  } else {
    return (
      <div className="container">
        <TopJumbotron/>
        <ProductPageLayout products={state.products} />
      </div>
    )
  }
}

export default Home