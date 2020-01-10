import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Container, Row, Col, Image} from 'react-bootstrap'
import Jumbotron from "react-bootstrap/Jumbotron";
import Calendar from "../calendar/Calendar.js";
import FooterCarousel from "../footercarousel/FooterCarousel.js";
import NewsHome from "../news/newshome/NewsHome.js";
import HeaderCarousel from "../headercarousel/HeaderCarousel.js";
import "./aboutus.css";
import Header from '../header/Header.js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faUsers,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
			<Container>
				<Row className="first-row">
					<Col className="about-text">
					<h1>Who are we?</h1>
					<p>We are a chapter of the Association for Computing Machinery (ACM) at California State University, Los Angeles (CSULA). We are CSULA's largest computer 
            science student organization. We bring together students with common passions and devotions into the field of computing. </p>
          <p>ACM is the world's largest educational and scientific computing society, delivering resources that advance computing as a science and a profession. 
            ACM provides the computing field's premier Digital Library and serves its members and the computing profession with leading-edge publications, 
            conferences, and career resources.</p>
					</Col>
					<Col lg={true}><Image style={{ height: '20rem' }} src={require('./images/group.jpg')} fluid /></Col>
					</Row>
				<Row className="second-row">
					<Col lg={true}><Image style={{ height: '20rem' }} src={require('./images/android_workshop.png')} fluid /></Col>
          <Col className="offer-text">
					<h1>What do we offer?</h1>
					<p>We provide professional development workshops, Mini-Hackathons, and tech tours. We also invite guest speakers from Google, Lockheed Martin, JPL, and other companies. </p>
          <p>We have excellent leadership opportunities and tutoring for students. We have social events, including hiking, game night, movie night, for students
            to network with each other and destress from classes. </p>
          <p>We know that learning takes more than just attending classes, so we have project workshops for students to gain hands-on experience</p>
					</Col>
					</Row>
				<Row className="third-row">
					<Col className="join-text">
					<h1>How to join ACM?</h1>
					<p>Even though we are a computer science organization, students of all majors are welcomed. Faculty and alumni are also welcomed to join ACM.</p>
          <p>At the beginning of each semester, we have a general meeting to provide people with information about current projects, programs and events. To learn 
            about the ACM member exclusive benefits, visit our membership page. </p>
					</Col>
					<Col lg={true}><Image style={{ height: '20rem' }} src={require('./images/fall_2019_general_meeting.jpg')} fluid /></Col>
					</Row>
			</Container> 
          </div>
    );
  }
}

export default AboutUs;
