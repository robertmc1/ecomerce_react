import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo2 from '../logo2.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Boton';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expend-sm navbar-dark px-sm">
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
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
