import React, { useState } from 'react'
import { useAuth0 } from '../react-auth0-spa'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <div>
      <Navbar color={'dark'} dark expand={'md'} className={'mb-5'} >
        <NavbarBrand href='/'>Lost in the World</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {!isAuthenticated && (
              <NavItem >
                <Button type={'button'} onClick={() => loginWithRedirect({ redirect_uri: 'http://localhost:3000/search' })}>Login</Button>
                
              </NavItem>
            )}
            {isAuthenticated && (
              <NavItem >
                <Button type={'button'} onClick={() => logout()}>
                Logout
                </Button>
              <Button type={'button'} href='http://localhost:3000/favorites'>
                Favorites
              </Button>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
