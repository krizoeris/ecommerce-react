import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import AppContext from './AppContext'
import Profile from './pages/Profile'
import EditAddress from './components/EditAddress'
import PersonalInfoForm from './components/PersonalInfoForm'
import AdminProducts from './admin/AdminProducts'
import OrderHistory from './pages/OrderHistory'

function App() {
  
  const [globalState, setGlobalState] = useState(
    {
      cart: [], // only needs to be an object if order matters
      loggedIn: sessionStorage.getItem('jwt') ? true : false,
      userId: sessionStorage.getItem('userid') ? sessionStorage.getItem('userid') : ''
    }
  );

  const PrivateRoute = ({component: Component, ...restOfProps}) => {
    return(
      <Route 
        {...restOfProps} 
        render={
          () => sessionStorage.getItem('jwt') ?
          (<Component {...restOfProps} />) :
          (<Redirect to={
            {pathname: '/'}
          } />)
        }
      />
    )
  }
  
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
          <Route path="/editaddress" component={EditAddress} />
          <Route path="/personalinfoform" component={PersonalInfoForm} />

          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/order-history" component={OrderHistory} />

          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/admin-product" component={AdminProducts} />
        </Switch>
      </div>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
