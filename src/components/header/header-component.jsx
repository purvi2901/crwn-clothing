import { React, Fragment } from 'react';
import './header-style.scss';
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useUserAuth } from '../../Context/UserAuthContext';
// const { user } = useUserAuth();
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../Redux/cart/cart.selectors';
// import { selectCurrentUser } from '../../Redux/user/user.selectors';
// 




const Header = ({hidden }) => {
    const { logOut, user } = useUserAuth();
    // console.log(user)
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
            console.log("user is logout");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
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
                    {user ? (
                        <Button variant="primary" onClick={handleLogout}>
                            Log out
                        </Button>

                    ) : (
                        <Link className='option' to='/login'>
                            SIGN IN
                        </Link>
                    )}
                    { user? (
                        <div className="text-center">
                            {user.email} {user.displayName}
                        </div>
                    ):(
                        <div className="text-center">
                        </div>
                    )
                    }
                    <CartIcon/>
                </div>
                {hidden ? null : <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
};



// const mapStateToProps = ({ cart: { hidden } }) => ({
//     hidden
//   });

const mapStateToProps = createStructuredSelector({
    // currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);

// export default Header