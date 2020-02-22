import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import AppContext from './AppContext'

function App() {
  
  const [globalState, setGlobalState] = useState(
    {
      cart: [] // only needs to be an object if order matters
    }
  );
  
  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/product/:id"  isExact component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
