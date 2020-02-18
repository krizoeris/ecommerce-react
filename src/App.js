import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
