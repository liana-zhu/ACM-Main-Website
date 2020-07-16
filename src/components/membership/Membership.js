import React from 'react'
import "./membership.css"
import VenmoQr from './assets/venmo-qr.jpg'
import { Tabs, Row, Col, Tab, Nav, Button, Card, Jumbotron, Container, Image, Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-awesome-modal';
import Carousel from 'react-bootstrap/Carousel';
import Gold from './CeckoutComponents/GoldCheckout.js'
import Regular from './CeckoutComponents/RegularCheckout.js'
import Faculty_Alumni from './CeckoutComponents/FacultyCheckout.js'

/*
To install, go to project directory and run this on command line:
$ npm install react-multi-carousel --save
*/
//Imports for multi carousel
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

class Membership extends React.Component {

	componentDidUpdate() {
		window.scrollTo(0, 0);
	  }

	//   constructor(props) {
	// 	super(props)
	// 	this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
	//   }
	
	//   componentDidMount() {
	// 	const handler = e => this.setState({matches: e.matches});
	// 	window.matchMedia("(min-width: 768px)").addListener(handler);
	//   }

	render() {
		//const responsive is used for multi carousel
		const responsive = {
			desktop: {
				breakpoint: { max: 3000, min: 1024 },
				items: 2,
				slidesToSlide: 2, // optional, default to 1.
			},
			tablet: {
				breakpoint: { max: 1024, min: 464 },
				items: 1,
				slidesToSlide: 1, // optional, default to 1.
			},
			mobile: {
				breakpoint: { max: 464, min: 0 },
				items: 1,
				slidesToSlide: 1, // optional, default to 1.
			},
		};
		return (
			<div id="membership-body">
				<div className="default-padding-top" >
					<div className="card">
						<center>
						<div className="carousel_container" style={{display: 'flex', justifyContent: 'center'}}>
							<Carousel>
								<Carousel.Item>
									<img
									// className="d-block image"
									className="image"
									src={require('./images/jpl_tour.png')} fluid
									alt="ACM Cal State LA members touring JPL"
									/>
								</Carousel.Item>
								{/* <Carousel.Item>
									<img
									// className="d-block image"
									className="image"
									src={require('./images/trophy.png')} fluid
									alt="Trophy award to ACM Cal State LA for best Student Organization Of the Year"
									/>
								</Carousel.Item> */}
							<Carousel.Item>
								<img
								// className="d-block image"
								className="image"
								src={require('./images/space_invaders.png')} fluid
								alt="ACM Cal State LA Space Invaders Workshop"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								// className="d-block image"
								className="image"
								src={require('./images/accord_workshop.png')} fluid
								alt="ACM Cal State LA Accord Workshop"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								// className="d-block image"
								className="image"
								src={require('./images/hackathon_spring_2019.png')} fluid
								alt="ACM Cal State LA Hackathon"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								// className="d-block image"
								className="image"
								src={require('./images/movie_fundraiser.png')} fluid
								alt="ACM Cal State LA Movie Fundraiser"
								/>
							</Carousel.Item>
							</Carousel>
						</div>
						</center>
						<Accordion defaultActiveKey="regular">
						{/* <Card>
							<Card.Header style={{backgroundColor: "#000000"}}>
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="gold" style={{fontSize: "30px"}}
							className="highlight-text">
							<b>Gold</b>
							</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="gold">
							<Card.Body  style={{backgroundColor: "#161616"}}>
								<Gold/>
							</Card.Body>
							</Accordion.Collapse>
						</Card> */}
						<Card>
							<Card.Header style={{backgroundColor: "#000000"}}>
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="regular" style={{fontSize: "30px"}}
							className="highlight-text">
							Regular
							</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="regular">
							<Card.Body  style={{backgroundColor: "#424242"}}>
								<Regular/>
							</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Card.Header style={{backgroundColor: "#000000"}}>
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="faculty/alumni" style={{fontSize: "30px"}}
							className="highlight-text">
							Faculty/Alumni
							</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="faculty/alumni">
							<Card.Body  style={{backgroundColor: "#424242"}}>
								<Faculty_Alumni/>
							</Card.Body>
							</Accordion.Collapse>
						</Card>
						</Accordion>
						<br></br>
					</div>
					<div class="quote-style-2 membership-footer-text">
						<span
							className="highlight-text"><i>Thank you for your support!</i></span>
						<br></br>
						<div className="membership-text">
							You're done! Expect to hear from us!
								</div><br></br>
					</div>
				</div>
			</div>
		)
	}
}

export default Membership
