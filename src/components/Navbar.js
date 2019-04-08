import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo2 from '../logo2.svg';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expend-sm bg-primary navbar-dark px-sm">
                    {/*  
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to='/'>
                        <img src={logo2} alt="store" className="navbar-brand" />
                    </Link>
                    <ul className="navbar-nav aslign-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                Products
                            </Link>
                        </li>
                    </ul>
                    <Link to='/cart' className="ml-auto">
                        <button>
                            <i className="fas fa-cart-plus" />
                            my cart
                        </button>
                    </Link>
                </nav>
            </div>
        )
    }
}

