import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Tab, Nav, Row, Col, Image, Button} from 'react-bootstrap'
import Jumbotron from "react-bootstrap/Jumbotron";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./aboutus.css";

class AboutUs extends React.Component {
	render() {
		let acmImages = ["./images/2021_2022_leaders.jpg", "./images/group.jpg"]
		let acmImageCaptions = ["2021-2022 ACM Leaders", "2019-2020 ACM Leaders"]
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
						<h1 className="our-mission-header">Our Mission</h1>
						<div className="mission-statement-points">
							<ul class="list-group list-group">
								<li class="list-group-item mission-statement-item">
									Provide computer science knowledge and resources to students.
								</li>
								
								<li class="list-group-item mission-statement-item">
									Host programming workshops that teach projects and new technologies outside of classes at CSULA.
								</li>
								
								<li class="list-group-item mission-statement-item">
									Share knowledge and advice of the computing field in our mentorship program.
								</li>
								
								<li class="list-group-item mission-statement-item">
									Provide professional development workshops to help members prepare for the workforce.
								</li>
								
								<li class="list-group-item mission-statement-item">
									Build a community through our events, promoting involvement outside of campus.
								</li>
								
								<li class="list-group-item mission-statement-item">
									Serve students and those interested in the betterment of our Los Angeles community.
								</li>
							</ul>
						</div>
					</div>
					<div className="carousel-leaders">
							<Carousel infiniteLoop>
									{acmImages.map((value, index) => {
											return <div>
													<img className='carousel-leadergroup-image' src={require('' + value)} alt="leader" />
													<p className="legend">{acmImageCaptions[index]}</p>
											</div>
									})}
							</Carousel>
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
									<Col lg={6}>
									<div className="info-content-container">
											<div className="info-header-container"><h1 className="info-header">Who are we?</h1></div>
											<div className="about-text">
												<li>
													We are a chapter of the Association for Computing Machinery (ACM) at California State University, Los Angeles (CSULA).
												</li>
												<li>
													ACM is the world's largest educational and scientific computing society, delivering resources that advance computing as a science and a profession.
												</li>
												<li>
													ACM@CSULA is the largest computer science student organization on campus.
												</li>
												<li>
													We bring together students with common interests into the field of computing.
												</li>
											</div>
										</div>
									</Col>
									<Col lg={5}><Image src={require('./images/group.jpg')} fluid /></Col>
								</Row>
							</Tab.Pane>
							<Tab.Pane eventKey="whatdoweoffer">
								<Row className="info-row">
									<Col lg={6}>
										<div className="info-content-container">
											<div className="info-header-container"><h1 className="info-header">What do we offer?</h1></div>
											<div className="offer-text">
												<li>
													We provide professional development workshops, hackathons, programming competitions, workshops, and more.
												</li>
												<li>
													We invite experienced guest speakers from various companies, including Google, Lockheed Martin, JPL, and more.
												</li>
												<li>
													We host social events like hiking, game nights, and movie nights, for students
													to network and destress from classes.
												</li>
											</div>
										</div>
									</Col>
									<Col lg={5}><Image src={require('./images/android-workshop.png')} fluid /></Col>
								</Row>
							</Tab.Pane>
							<Tab.Pane eventKey="howtojoinacm">
								<Row className="info-row">
									<Col lg={6}>
										<div className="info-content-container">
											<div className="info-header-container"><h1 className="info-header">How to join ACM?</h1></div>
											<div className="join-text">
												<li>
													Although we are an organization focused on computing, interested students, faculty, and alumni of all majors are welcomed.
												</li>
												<li>
													Join our semester's General Meetings to learn more about the club!
												</li>
												<li>
													To learn about the benefits of being an ACM member, click the button below:
												</li>
												<Button href="/membership">Membership</Button>
											</div>
										</div>
									</Col>
									<Col lg={5}><Image src={require('./images/fall-2019-general-meeting.jpg')} fluid /></Col>
								</Row>
							</Tab.Pane>
							<Tab.Pane eventKey="constitution">
								<Row className="info-row">
									<Col lg={6}>
										<div className="info-content-container">
											<div className="info-header-container"><h1 className="info-header">Our Constitution</h1></div>
											<div className="join-text">
												<p>Interested in learning more about what governs our club?</p>
												<p>Feel free to take a look at our Constitution:</p>
												<Button href="https://drive.google.com/file/d/1bl3REXemVBPAyFhuoCCKbdyWLjXaoOjl/view?usp=sharing" target="_blank">Constitution</Button>
											</div>
										</div>
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