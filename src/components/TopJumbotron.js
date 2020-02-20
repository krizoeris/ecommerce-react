import React from 'react'
import bannerImg from '../img/banner.jpg'

const TopJumbotron = () => {
  const imgStyle = {
      backgroundImage: `url(${bannerImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // backgroundPosition: "50% 50%",
      zIndex: "-2"
    }

  const imgOverlay = {
    // backgroundColor: "#000",
    // opacity: "0.6",
    // position: "absolute",
    // zIndex: "-1",
    // top: "0",
    // left: "0",
    // right: "0",
    // bottom: "0",
    // height: "inherit",
  }
  
  return(
    <div class="jumbotron" style={ imgStyle }>
    <div style={ imgOverlay }>
      <h1 class="display-4">Get connected</h1>
      <p class="lead">Our store offers one of the widest selection of phones at a price that's right for you</p>
      <hr class="my-4"/>
      <p>We offer phones from all brands and models. if you don't know where to start, try using our quiz below!</p>
      <p class="lead">
        <a class="btn btn-dark btn-md" href="#" role="button">Find your match</a>
      </p>
    </div>
    </div>
  )
}

export default TopJumbotron