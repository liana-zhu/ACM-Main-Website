import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Tab, Nav, Row, Col, Image, Button} from 'react-bootstrap'
import Jumbotron from "react-bootstrap/Jumbotron";
import "./aboutus.css";

class AboutUs extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div className="about-us-text">
						<p>About Us</p>
					</div>
					<div className="about-us-card"></div>
				</div>
				<Jumbotron>
					<div className="mission-statement-text">
						<h1>Our Mission</h1>
						<div className="mission-statement-points">
							<ul type="circle">
								<li>
									Provide insight and knowledge regarding the CS programs to guarantee academic progress.
								</li>
								<li>
									Communicate experiences and challenges in the field	with ACM leaders to promote self-improvement.
								</li>
								<li>
									Coding workshops that teach new technologies and common software not taught in courses offered in the CS program.
								</li>
								<li>
									Professional development workshops tailored to help members prepare for the	workforce.
								</li>
								<li>
									A Mentorship Program where our mentors will offer their knowledge in the field to participating mentees.
								</li>
								<li>
									Social activities, events, and competitions that promote involvement outside of campus.
								</li>
								<li>
									Ultimately, serve students at Cal State LA and those interested in the betterment of our Los Angeles community.
								</li>
							</ul>
						</div>
					</div>
				</Jumbotron>
				<div className="bottom-section">
					<Tab.Container id="top-tabs-example" defaultActiveKey="whoarewe">
						<Nav variant="tabs" >
							<Nav.Item>
								<Nav.Link className="project-nav-link anchor-blue" eventKey="whoarewe">ACM</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="project-nav-link anchor-blue" eventKey="whatdoweoffer">Offer</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="project-nav-link anchor-blue" eventKey="howtojoinacm">Join</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="project-nav-link anchor-blue" eventKey="constitution">Our Constitution</Nav.Link>
							</Nav.Item>
						</Nav>
						<Tab.Content>
							<Tab.Pane eventKey="whoarewe">
								<Row className="info-row">
									<Col lg={6} className="about-text">
										<h1>Who are we?</h1>
										<li>
											We are a chapter of the Association for Computing Machinery (ACM) at California State University, Los Angeles (CSULA).
										</li>
										<li>
											We are CSULA's largest computer
											science student organization.
										</li>
										<li>
											We bring together students with common passions and devotions into the field of computing.
										</li>
										<li>
											ACM is the world's largest educational and scientific computing society, delivering resources that advance computing as a science and a profession.
										</li>
										<li>
											ACM provides the computing field's premier Digital Library and serves its members and the computing profession with leading-edge publications,
											conferences, and career resources.
										</li>
									</Col>
									<Col lg={5}><Image src={require('./images/group.jpg')} fluid /></Col>
								</Row>
							</Tab.Pane>
							<Tab.Pane eventKey="whatdoweoffer">
								<Row className="info-row">
									<Col lg={6} className="offer-text">
										<h1>What do we offer?</h1>
										<li>
											We provide professional development workshops, Mini-Hackathons, and tech tours.
										</li>
										<li>
											We also invite guest speakers from Google, Lockheed Martin, JPL, and other companies.
										</li>
										<li>
											We have social events, including hiking, game night, and movie night, for students
											to network with each other and destress from classes.
										</li>
										<li>
											We know that learning takes more than just attending classes, so we have project workshops for students to gain hands-on experience.
										</li>
									</Col>
									<Col lg={5}><Image src={require('./images/android-workshop.png')} fluid /></Col>
								</Row>
							</Tab.Pane>
							<Tab.Pane eventKey="howtojoinacm">
								<Row className="info-row">
									<Col lg={6} className="join-text">
										<h1>How to join ACM?</h1>
										<li>
											Even though we are a computer science organization, students of all majors are welcomed.
										</li>
										<li>
											Faculty and alumni are also welcomed to join ACM.
										</li>
										<li>
											At the beginning of each semester, we have a general meeting to provide people with information about current projects, programs, and events.
										</li>
										<li>
											To learn
											about the ACM member exclusive benefits, click the button below:
										</li>
										<Button href="/membership">Membership</Button>
									</Col>
									<Col lg={5}><Image src={require('./images/fall-2019-general-meeting.jpg')} fluid /></Col>
								</Row>
							</Tab.Pane>
							<Tab.Pane eventKey="constitution">
								<Row className="info-row">
									<Col lg={6} className="join-text">
										<h1>Our Constitution</h1>
										<p>Interested in learning about what governs our club?</p>
										<p>We are making our constitution public for everyone to see.</p>
										<Button href="https://drive.google.com/file/d/1Eop_ll-w1BNkqHk4QP1mzVbHZ7-TsgV9/view?usp=sharing" target="_blank">Constitution</Button>
									</Col>
									<Col lg={4}><Image src={require('./images/logo.png')} fluid /></Col>
								</Row>
							</Tab.Pane>
						</Tab.Content>
					</Tab.Container>
				</div>
			</div>
		);
	}
}

export default AboutUs;