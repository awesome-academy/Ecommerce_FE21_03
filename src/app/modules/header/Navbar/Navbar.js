import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import NavbarCartMobile from './NavbarCartMobile';
import NavbarDropdown from './NavbarDropdown';

function HeaderNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="md">
      <Container>
        <NavbarBrand tag={RRNavLink} to="/">
          <img src={`${process.env.PUBLIC_URL}assets/images/logo.png`} alt="NavbarBrand" />
        </NavbarBrand>
        <NavbarCartMobile />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link-menu" tag={RRNavLink} to="/" title="Trang chủ">Trang chủ</NavLink>
            </NavItem>
            <NavbarDropdown title="Rượu Đỏ" />
            <NavbarDropdown title="Rượu Trắng" />
            <NavItem>
              <NavLink className="nav-link-menu" tag={RRNavLink} to="/introduction" title="Thông tin">Thông tin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-menu" tag={RRNavLink} to="/blog" title="Blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-menu" tag={RRNavLink} to="/contact" title="Liên hệ">Liên hệ</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
