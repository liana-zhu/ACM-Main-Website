import React from 'react'
import { Link } from 'react-router-dom'

import './navi.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './acmlogo1.png';

import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons"


class Navi extends React.Component {
  /*componentDidMount() {
    window.addEventListener('scroll', function () {
      console.log('scrolling');
      let y = window.scrollY
      if (y > 600) {
        console.log(y)
        const element = document.getElementById('navb');
        element.classList.add("solid")
      } else {
        const element = document.getElementById('navb');
        element.classList.remove("solid");
      }
    });
    // TODO: Add class once the page is refreshed
  }*/

  render() {
    return (
      {/*<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navb">
            <nav className="container-fluid">
                    <a className="navbar-brand" href="{{ url_for('home') }}">
                            {//<img id="logo" src={logo} width="110" class="d-inline-block align-top" alt="Logo"></img>
                    }</a>
                <div id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link to='/'>
                            <li className="nav-item active">
                                <a className="nav-link anchor-white return" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        <Link to="/events">
                            <li className="nav-item">
                                <a className="nav-link anchor-white return" href="#">Events</a>
                            </li>
                        </Link>
                        <Link to="/projects">
                            <li className="nav-item">
                                <a className="nav-link anchor-white return" href="#">Projects/Programs</a>
                            </li>
                        </Link>
                        <Link to='/membership'>
                            <li className="nav-item">
                                <a className="nav-link anchor-white" href="#"><button type="button" class="btn btn-outline-light">Membership</button></a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
            <hr></hr>
        </nav>

        <Navbar>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="test" href="#home">HOME</Nav.Link>
                    <Nav.Link className="test" href="#home">EVENTS</Nav.Link>
                    <Nav.Link className="test" href="#home">PROGRAMS</Nav.Link>
                </Nav>
                <Button className="membership-navbar"variant="outline-primary" size="xsm">MEMBERSHIP</Button>
              </Navbar.Collapse>
            </Navbar>*/},

      /* Old navbar from Fall 2019     
      <Navbar className="fixed-top" id="navb" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/aboutus">
              <Nav.Link href="#home">About us</Nav.Link>
            </Link>
            <Link to="/events">
              <Nav.Link href="#home">Events</Nav.Link>
            </Link>
            <Link to="/projects">
              <Nav.Link href="#home">Projects</Nav.Link>
            </Link>
            <Link to="/professional">
              <Nav.Link href="#home">Professional</Nav.Link>
            </Link>
            <Link to="/board">
              <Nav.Link href="#home">Board</Nav.Link>
            </Link>
          </Nav>
          <Link to='/membership'>
            <Button variant="light">Membership</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>*/

      <Navbar collapseOnSelect fixed="top" id="navb" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="90"
            height="50"
            className="d-inline-block align-top"
            alt="ACM logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/aboutus"><div className="nav-dropdown-text">About Us</div></NavDropdown.Item>
              <NavDropdown.Item href="/board"><div className="nav-dropdown-text">Our Board</div></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/events">Events/Calendar</Nav.Link>
            <NavDropdown title="Projects/Programs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/projects"><div className="nav-dropdown-text">Project Workshops</div></NavDropdown.Item>
              <NavDropdown.Item href="/programs"><div className="nav-dropdown-text">Programs</div></NavDropdown.Item>
              <NavDropdown.Item href="/professional"><div className="nav-dropdown-text">Professional Workshops</div></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="/membership"><Button variant="light">Membership</Button></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navi;
