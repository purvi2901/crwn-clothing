import { React, Fragment } from 'react';
import './header-style.scss';
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => (
    <Fragment>
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/'>
                    CONTACT
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
);

export default Header