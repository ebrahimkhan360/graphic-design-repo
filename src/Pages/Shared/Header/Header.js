import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <header>

            <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark"  variant="dark">
  <Container>
  
  <Navbar.Brand as={Link} to="/"> <img src={logo} width={50} height={20} alt=""/>Graphic Designer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>

      {
       user ?
         <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
       :
         <Nav.Link as={Link} to="login">
              Login
             </Nav.Link>
       }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

</>
        </header>
    );
};

export default Header;