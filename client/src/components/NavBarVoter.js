import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const NavBarVoter = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={require('../images/logo.svg')} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        HOME
                    </NavLink>
                    <NavLink to='/CandidateDetails' activeStyle>
                        CANDIDATES
                    </NavLink>
                    <NavLink to='/Vote' activeStyle>
                        VOTE
                    </NavLink>
                    <NavLink to='/Register' activeStyle>
                        REGISTER
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBarVoter;