import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Cart from './pages/Cart'
import User from './pages/User'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import AppContext from './AppContext'
import Profile from './pages/Profile'
import EditAddress from './components/EditAddress'
import PersonalInfoForm from './components/PersonalInfoForm'



function App() {
  
  const [globalState, setGlobalState] = useState(
    {
      cart: [], // only needs to be an object if order matters
      loggedIn: false
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
          <Route path="/profile" component={Profile} />
          <Route path="/editaddress" component={EditAddress} />
          <Route path="/personalinfoform" component={PersonalInfoForm} />
          // Removed the exact attribute in User
          <Route path="/user" component={User} />
          <Route path="/user/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
