import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Container, Tab, Nav, Row, Col, Image, Button } from 'react-bootstrap'
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
				<div className="about-us-text">
					<p>About Us</p>
				</div>
			<div className="about-us-card"></div>
				
			<Container fluid>
				<Row>
					<Col>
						<div className="mission-statement-card">
							<div className="mission-statement-text">
								<p><center>Our Mission</center></p>
								<div className="mission-statement-points">
								<ul type="circle">
									<li>
										Insight and knowledge regarding the CS programs and general advice for college 
                             			students to guarantee academic progress.
									</li>
									<li>
										A means to communicate experiences, concerns, and challenges in the field and 
                            			in life with like-minded individuals and ACM leaders to promote self-improvement.
									</li>
									<li>
										Coding workshops that teach new technologies and common software engineering 
                           				pracices not taught in courses offered in the CS program.
									</li>
									<li>
										Professional development workshops tailored to help members prepare for the
										workforce.
									</li>
									<li>
										A 1-1 Mentorship Program where one of our mentors will offer their knowledge and
										insight in the field to participating mentees.
									</li>
									<li>
										Social activities, events, and competitions that promote involvement outside of campus.
									</li>
									<li>
										Ultimately serve students at Cal State LA and those interested in the betterment of 
                            			our Los Angeles community.
									</li>
								</ul>
								</div>
							</div>	
						</div>
					</Col>
				</Row>
			</Container>



			<Container>

				<Tab.Container id="top-tabs-example" defaultActiveKey="whoarewe">   
					<div  className="button-row">                   
                           	<Nav variant="tabs" >
                                <Nav.Item>
                                   	<Nav.Link className="project-nav-link anchor-blue" eventKey="whoarewe">Who are we?</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                   	<Nav.Link className="project-nav-link anchor-blue" eventKey="whatdoweoffer">What do we offer?</Nav.Link>
                                </Nav.Item>
								<Nav.Item>
	                               	<Nav.Link className="project-nav-link anchor-blue" eventKey="howtojoinacm">How to join ACM?</Nav.Link>
    	                        </Nav.Item>
        	                </Nav>
					</div>

					<Tab.Content className="project-tab-content">
						<Tab.Pane eventKey="whoarewe">
							<Row className="first-row">
								<Col className="about-text">
									<h1>Who are we?</h1>
									<p>We are a chapter of the Association for Computing Machinery (ACM) at California State University, Los Angeles (CSULA). We are CSULA's largest computer
            		science student organization. We bring together students with common passions and devotions into the field of computing. </p>
									<p>ACM is the world's largest educational and scientific computing society, delivering resources that advance computing as a science and a profession.
					ACM provides the computing field's premier Digital Library and serves its members and the computing profession with leading-edge publications,
            		conferences, and career resources.</p>
									</Col>
								<Col lg={true}><Image style={{ height: '25rem', width: '35rem' }} src={require('./images/group.jpg')} fluid /></Col>
							</Row>
						</Tab.Pane>

						<Tab.Pane eventKey="whatdoweoffer">
							<Row className="second-row">
								<Col className="offer-text">
									<h1>What do we offer?</h1>
									<p>We provide professional development workshops, Mini-Hackathons, and tech tours. We also invite guest speakers from Google, Lockheed Martin, JPL, and other companies. </p>
									<p>We have excellent leadership opportunities and tutoring for students. We have social events, including hiking, game night, movie night, for students
            		to network with each other and destress from classes. </p>
									<p>We know that learning takes more than just attending classes, so we have project workshops for students to gain hands-on experience</p>
								</Col>
								<Col lg={true}><Image style={{ height: '25rem', width: '35rem' }} src={require('./images/android_workshop.png')} fluid /></Col>
							</Row>
						</Tab.Pane>

						<Tab.Pane eventKey="howtojoinacm">
							<Row className="third-row">
								<Col className="join-text">
									<h1>How to join ACM?</h1>
									<p>Even though we are a computer science organization, students of all majors are welcomed. Faculty and alumni are also welcomed to join ACM.</p>
									<p>At the beginning of each semester, we have a general meeting to provide people with information about current projects, programs, and events. To learn
            		about the ACM member exclusive benefits, click the button below:</p><br></br>
									<Button href="/membership">Membership</Button><br></br><br></br>
								</Col>
								<Col lg={true}><Image style={{ height: '25rem', width: '35rem' }} src={require('./images/fall_2019_general_meeting.jpg')} fluid /></Col>
							</Row> 
						</Tab.Pane>

					</Tab.Content>
				</Tab.Container>
			</Container>
		</div>
		);
	}
}

export default AboutUs;

