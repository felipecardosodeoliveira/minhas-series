
import React from 'react';

import { Link } from 'react-router-dom';

import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
} from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNav = () =>
        setIsOpen((oldState) => !oldState);

    return (
        <>
            <Navbar className="px-4" color="light" light expand="md">
                <NavbarBrand tag={Link} to="/" >
                    Minhas Séries
                </NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/generos">
                                Gêneros
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Header;
