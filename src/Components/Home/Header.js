import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap"

//Assets
import Logo from "../../assets/mwares-logo.svg"

const Home = () => {
  return (
    <div className="sticky-top">
      <Navbar className="bg-white" light expand="md">
        <NavbarBrand href="">
          <img src={Logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={false} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavbarText>Payment Plans</NavbarText>
            </NavItem>
            <NavItem>
              <NavLink href="/register/">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="btn btn-outline-dark">
                Login
              </NavLink>
            </NavItem>
            {/* Dropdown Menu*/}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Home
