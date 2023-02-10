import React from "react";
import "./navi.scss";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./acmlogo1.png";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faDiscord,
  faLinkedin,
  faFacebookSquare,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faInstagram, faFacebookF, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons"

class Navi extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" id="navb" expand="lg" variant="dark">
        <Navbar.Brand id="homepage" href="/">
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
            <NavDropdown title="about us" className="collapsible-nav-dropdown">
              <NavDropdown.Item href="/aboutus">
                <div className="nav-dropdown-text">about us</div>
              </NavDropdown.Item>
              <NavDropdown.Item href="/board">
                <div className="nav-dropdown-text">our board</div>
              </NavDropdown.Item>
              <NavDropdown.Item href="/contactus">
                <div className="nav-dropdown-text">faq</div>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="programs" className="collapsible-nav-dropdown">
              <NavDropdown.Item href="/projects">
                <div className="nav-dropdown-text">project workshops</div>
              </NavDropdown.Item>
              <NavDropdown.Item href="/programs">
                <div className="nav-dropdown-text">pro-dev</div>
              </NavDropdown.Item>
              <NavDropdown.Item href="/professional">
                <div className="nav-dropdown-text">events</div>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/events">calendar</Nav.Link>
            <Nav.Link href="/sponsor">sponsors</Nav.Link>
            {/* <Nav.Link href="/contactus">contact us</Nav.Link> */}
          </Nav>
          <Nav className="socials">
            <Navbar.Brand
              id="instagram"
              href="https://www.instagram.com/calstatela_acm/?hl=en"
            >
              <FontAwesomeIcon
                className="iconBrandNav"
                size="2x"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </Navbar.Brand>
            <Navbar.Brand
              id="facebook"
              href="https://www.facebook.com/calstatela.acm"
            >
              <FontAwesomeIcon
                className="iconBrandNav"
                size="2x"
                icon={faFacebookF}
              ></FontAwesomeIcon>
            </Navbar.Brand>
            <Navbar.Brand
              id="discord"
              href="https://discordapp.com/invite/wX58JRv"
            >
              <FontAwesomeIcon
                className="iconBrandNav"
                size="2x"
                icon={faDiscord}
              ></FontAwesomeIcon>
            </Navbar.Brand>
            <Navbar.Brand
              id="LinkedIn"
              href="https://www.linkedin.com/in/acm-cal-state-la-2a92b4260/"
            >
              <FontAwesomeIcon
                className="iconBrandNav"
                size="2x"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </Navbar.Brand>
          </Nav>
          <div class="membership-btn">
            <Nav.Link href="/membership">
              <Button variant="light">Membership</Button>
            </Nav.Link>
          </div>
          {/* <Nav.Link href="https://calstatelaacm-portal.web.app/#/"><Button variant="light">ACM Portal</Button></Nav.Link> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navi;
