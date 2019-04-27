import React from 'react';
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
  DropdownItem } from 'reactstrap';


let isOpen= false;
const toggle = ()=>{
  isOpen = !isOpen;
}

const SiteNavBar = () => (<div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><h1>  Tic-Tac-Toe </h1></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="mailto:izzakbrassea@gmail.com">Email</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/izzakbrassea/" target="_blank">Linkedin</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>

                  <DropdownItem>
                    <a href="/">Reload</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    About
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>)


export default SiteNavBar
