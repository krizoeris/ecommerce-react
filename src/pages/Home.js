import React from 'react'
import PageCarousel from '../components/PageCarousel'
import TopJumbotron from '../components/TopJumbotron'
import ProductPageLayout from '../components/ProductPageLayout'

const Home = (prop) => {
  return (
    <div className="container">
      <TopJumbotron/>
      <ProductPageLayout/>
      <PageCarousel/>
      </div>
  )
}

export default Home