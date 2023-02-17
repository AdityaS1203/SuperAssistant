import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Adi,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            BoloForms
          </NavLink>
          <NavLink to='/Products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/Pricing' activeStyle>
            Pricing
          </NavLink>
          <NavLink to='/Guides' activeStyle>
            Guides
          </NavLink>
          <NavLink to='/Templates' activeStyle>
            Templates
          </NavLink>
          {/* Second Nav */}
        </NavMenu>
        <NavBtn>
          <Adi to='/installNow'>Install Now</Adi>
        </NavBtn>

        <NavBtn>
          <NavBtnLink to='/premium'>BoloForms premium</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
