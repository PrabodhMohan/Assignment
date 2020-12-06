import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="headerPadding bg-light" expand="md">
        <NavbarBrand className="primaryColor" href="/">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          
          <div className="ml-auto px-4 w-50 d-flex justify-content-around align-items-center">
            <NavbarText>Home</NavbarText>
            <NavbarText>My Portfolio</NavbarText>
            <NavbarText>Clients</NavbarText>
            <Button outline color="secondary" className="rounded">Get in Touch</Button>{' '}
          </div>
          
        </Collapse>
      </Navbar>
    </>
  );
}

export default Example;