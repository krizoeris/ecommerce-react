import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import logo from '../img/logo.png'

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
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

                    <form class="form-inline">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search..." />
                            <div class="input-group-append">
                                <button type="button" class="btn btn-secondary btn-number">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <a class="btn btn-outline-light ml-2 d-inline" href="/cart">
                        <i class="fa fa-shopping-cart"></i>
                        <span class="badge badge-danger ml-1">0</span>
                    </a>

                    <div class="dropdown">
                        <button class="btn btn-outline-light ml-2 d-inline dropdown-toggle" type="button" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-user mr-1"></i>
                            Hello! Log In
                        </button>
                        <div class="dropdown-menu" aria-labelledby="userMenu">
                            <a class="dropdown-item" href="#">Log In</a>
                            <a class="dropdown-item" href="#">Register</a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navigation)