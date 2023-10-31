import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import kaffLogo from "../assets/kaff_logo.png";
import { NavLink } from 'react-router-dom';
import "./comp.css"
function MyNavbar() {
  return (
    <>
      
      <Navbar expand="lg" className="bg-body-tertiary w-[100%]  h-[10%]">
        <Container >
          <Navbar.Brand href="/">
            <img
              alt=""
              src={kaffLogo}
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            KAFF Solutions
          </Navbar.Brand>
          <Nav className="me-auto ">
          <NavLink to="/" className="nav">Home</NavLink>
            <NavLink to="/about" className="nav">About</NavLink>
            <NavLink to="/service" className="nav">Services</NavLink>
            <NavLink to="/expertise" className="nav">Our Expertise</NavLink>
            <NavLink to="/contacts"className="nav">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;