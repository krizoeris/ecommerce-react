import React, {useContext} from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import logo from '../img/logo.png'
import AppContext from '../AppContext';


const Navigation = () => {
    
    const [globalState, setGlobalState] = useContext(AppContext)
    let cart = globalState.cart;
    
    // Total items in cart
    let cartQuantity =  cart.reduce((acc , currentProd)=>{
      const { quantity } = currentProd;
    return acc +  quantity;
    }, 0)  

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="60" height="60" alt="" />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories">Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Product</NavLink>
                        </li>
                    </ul>

                    <form className="form-inline">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-secondary btn-number">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <Link className="btn btn-outline-light ml-2 d-inline" to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="badge badge-danger ml-1">{cartQuantity}</span>
                    </Link>

                    <div className="dropdown">
                        <button className="btn btn-outline-light ml-2 d-inline dropdown-toggle" type="button" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user mr-1"></i>
                            Hello! Log In
                        </button>
                        <div className="dropdown-menu" aria-labelledby="userMenu">
                            <Link className="dropdown-item" to="/profile">My Profile</Link>
                            <Link className="dropdown-item" to="/user">Log In</Link>
                            <Link className="dropdown-item" to="/user/register">Register</Link>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navigation)