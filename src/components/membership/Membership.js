import React from 'react'
import "./membership.css"
import VenmoQr from './assets/venmo-qr.jpg'
import { Tabs, Row, Col, Tab, Nav, Button, Card, Jumbotron, Container, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-awesome-modal';

/*
To install, go to project directory and run this on command line:
$ npm install react-multi-carousel --save
*/
//Imports for multi carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Membership extends React.Component {
	render() {
		//const responsive is used for multi carousel
		const responsive = {
			desktop: {
				breakpoint: { max: 3000, min: 1024 },
				items: 3,
				slidesToSlide: 3, // optional, default to 1.
			},
			tablet: {
				breakpoint: { max: 1024, min: 464 },
				items: 2,
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
						<Container className="justify-content-md-center">
						<div className="past-container">
							<Carousel
								swipeable={false}
								draggable={false}
								showDots={true}
								responsive={responsive}
								ssr={true} // means to render carousel on server-side.
								infinite={true}
								autoPlay={this.props.deviceType !== "mobile" ? true : false}
								autoPlaySpeed={5000}
								keyBoardControl={true}
								customTransition="all .5"
								transitionDuration={500}
								containerClass="carousel-container"
								deviceType={this.props.deviceType}
								dotListClass="custom-dot-list-style"
								itemClass="carousel-item-padding-40-px">
								<div><Image style={{ height: '30rem' }} src={require('./images/awards_ceremony.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/upperclassmen_workshop.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/Hackathon.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/venom.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/intro_web_workshop.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/joker.png')} thumbnail /></div>
							</Carousel><p id="semicolon" /* Semicolon is required for Carousel*/>;</p>
                        </div>
						</Container>
						<Tab.Container id="left-tabs-example" defaultActiveKey="first">
							<Row>
								<Col sm={3}>
									<Nav variant="pills" className="flex-column">
										<Nav.Item>
											<Nav.Link className="tab-container" eventKey="first">Regular</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="tab-container" eventKey="second">Faculty/Alumni</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="tab-container" eventKey="third">Gold</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
								<Col sm={9}>
									<Tab.Content className="tab-content">
										<Tab.Pane eventKey="first">
											<h2><span className="highlight-text"><b><i>ACM Membership</i></b></span> ❖ REGULAR TIER</h2>
											<h2>Benefits</h2>
											- Receive weekly newsletters.<br></br>
											- Access to project workshops (upper/lower classmen).<br></br>
											- Access to professional development workshops.<br></br>
											- Access to Mini-Hackathon.<br></br>
											- Access to tutoring.<br></br>
											- Access to Mentorship program (Mentor/Mentee).<br></br>
											<h2>How to become a member?</h2>
											The steps below are: "Payment" and "Sign-up". Please note that there are <span className="highlight-text">NO REFUNDS</span> and that
						        	membership <span className="highlight-text">DOES NOT</span> guarantee project space.
						        <br></br>

											<h2>Questions/Concerns?</h2>
											<p>Send an email to acm.calstatela@gmail.com</p>

											<h2><span className="highlight-text"><b><i>Step One</i></b></span> ❖ Payment</h2>
											The first step is to make a payment. Choose the most convenient method of payment for you.<br></br><br></br>

											<i>1 - Paypal</i><br></br>
											<p>Please make sure you have a working PayPal account (i.e., can make payments) before clicking the button below:
			
						        <div className='paypal-form-container'>
													<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
														<input type="hidden" name="cmd" value="_xclick" />
														<input type="hidden" name="business" value="acm.calstatela@gmail.com" />
														<input type="hidden" name="lc" value="US" />
														<input type="hidden" name="item_name" value="ACM Membership 2019-2020" />
														<input type="hidden" name="button_subtype" value="services" />
														<input type="hidden" name="no_note" value="0" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />

														<select hidden name="os0">
															<option type="hidden" value="Regular">Faculty/Alumni $5.50 USD</option>
														</select>

														<input type="hidden" name="option_select0" value="Regular" />
														<input type="hidden" name="option_amount0" value="5.50" />
														<button class='btn btn-info btn-membership'>Pay With PayPal</button>
													</form>
													** Additional 50 cent processing fee.

								</div></p>

											<i>2 - Venmo</i><br></br>
											Please scan the QR code and enter $5.00.<br></br><br></br>
											<a href={VenmoQr}>
												<button class='btn btn-info btn-membership' src={VenmoQr}>Venmo QR Code</button></a>
											<br></br><br></br>


											<h2><span className="highlight-text"><b><i>Step Two</i></b></span> ❖ Sign-up</h2>
											Your proof of payment can be a screenshot of your PayPal/Venmo payment.
								Once you have your proof of payment, sign up by clicking on the button below: <br></br><br></br>

											<a href="https://docs.google.com/forms/d/e/1FAIpQLSfrLZsGugSQvWOiViaOD9NufRGCCNjOFoBzQmbaISwnYsl3Lw/viewform?usp=sf_link" class="btn btn-info btn-membership" role="button">Registration Form</a>

										</Tab.Pane>

										<Tab.Pane eventKey="second">
											<h2><span className="highlight-text"><b><i>ACM Membership</i></b></span> ❖ ALUMNI/FACULTY TIER</h2>
											<h2>Benefits</h2>
											- Receive weekly newsletters.<br></br>
											- Access to Mentorship program (Only as a Mentor).<br></br>
											<h2>How to become a member?</h2>
											The steps below are: "Payment" and "Sign-up". Please note that there are <span className="highlight-text">NO REFUNDS</span>.
						        <br></br>

											<h2>Questions/Concerns?</h2>
											<p>Send an email to acm.calstatela@gmail.com</p>

											<h2><span className="highlight-text"><b><i>Step One</i></b></span> ❖ Payment</h2>
											The first step is to make a payment. Choose the most convenient method of payment for you.<br></br><br></br>

											<i>1 - Paypal</i><br></br>
											<p>Please make sure you have a working PayPal account (i.e., can make payments) before clicking the button below:
			
						        <div className='paypal-form-container'>
													<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
														<input type="hidden" name="cmd" value="_xclick" />
														<input type="hidden" name="business" value="acm.calstatela@gmail.com" />
														<input type="hidden" name="lc" value="US" />
														<input type="hidden" name="item_name" value="ACM Membership 2019-2020" />
														<input type="hidden" name="button_subtype" value="services" />
														<input type="hidden" name="no_note" value="0" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />

														<select hidden name="os0">
															<option type="hidden" value="Regular">Faculty/Alumni $5.50 USD</option>
														</select>

														<input type="hidden" name="option_select0" value="Regular" />
														<input type="hidden" name="option_amount0" value="5.50" />
														<button class='btn btn-info btn-membership'>Pay With PayPal</button>
													</form>
													** Additional 50 cent processing fee.

								</div></p>

											<i>2 - Venmo</i><br></br>
											Please scan the QR code and enter $5.00.<br></br><br></br>
											<a href={VenmoQr}>
												<button class='btn btn-info btn-membership' src={VenmoQr}>Venmo QR Code</button></a>
											<br></br><br></br>

											<h2><span className="highlight-text"><b><i>Step Two</i></b></span> ❖ Sign-up</h2>
											Your proof of payment can be a screenshot of your PayPal/Venmo payment.
								Once you have your proof of payment, sign up by clicking on the button below:<br></br><br></br>

											<a href="https://docs.google.com/forms/d/e/1FAIpQLSfrLZsGugSQvWOiViaOD9NufRGCCNjOFoBzQmbaISwnYsl3Lw/viewform?usp=sf_link" class="btn btn-info btn-membership" role="button">Registration Form</a>

										</Tab.Pane>
										<Tab.Pane eventKey="third">
											<h2><span className="highlight-text"><b><i>ACM Membership</i></b></span> ❖ GOLD TIER</h2>
											<h2>Benefits</h2>
											- ACM's "It's not a bug; It's a feature" T-Shirt included.<br></br>
											- All benefits from student/faculty membership included.<br></br>
											<a href="https://i.imgur.com/RerJpNV.png"><img className="shirt-image" src="https://i.imgur.com/RerJpNV.png"></img></a>
											<h2>How to become a member?</h2>
											The steps below are: "Payment" and "Sign-up". Please note that there are <span className="highlight-text">NO REFUNDS</span>.
						        <br></br>


											<h2>Questions/Concerns?</h2>
											<p>Send an email to acm.calstatela@gmail.com</p>

											<h2><span className="highlight-text"><b><i>Step One</i></b></span> ❖ Payment</h2>
											The first step is to make a payment. Choose the most convenient method of payment for you.<br></br><br></br>

											<i>1 - Paypal</i><br></br>
											<p>Please make sure you have a working PayPal account (i.e., can make payments) before clicking the button below:
			
						        <div className='paypal-form-container'>
													<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
														<input type="hidden" name="cmd" value="_xclick" />
														<input type="hidden" name="business" value="acm.calstatela@gmail.com" />
														<input type="hidden" name="lc" value="US" />
														<input type="hidden" name="item_name" value="ACM Membership 2019-2020" />
														<input type="hidden" name="button_subtype" value="services" />
														<input type="hidden" name="no_note" value="0" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />

														<select hidden name="os0">
															<option type="hidden" value="Regular">Gold $12.50 USD</option>
														</select>

														<input type="hidden" name="option_select0" value="Regular" />
														<input type="hidden" name="option_amount0" value="12.50" />
														<button class='btn btn-info btn-membership'>Pay With PayPal</button>
													</form>
													** Additional 50 cent processing fee.
								</div></p>

											<i>2 - Venmo</i><br></br>
											Please scan the QR code and enter $12.00.<br></br><br></br>
											<a href={VenmoQr}>
												<button class='btn btn-info btn-membership' src={VenmoQr}>Venmo QR Code</button></a>
											<br></br><br></br>

											<h2><span className="highlight-text"><b><i>Step Two</i></b></span> ❖ Sign-up</h2>
											Your proof of payment can be a screenshot of your PayPal/Venmo payment.
								Once you have your proof of payment, sign up by clicking on the button below:<br></br><br></br>

											<a href="https://docs.google.com/forms/d/e/1FAIpQLSfrLZsGugSQvWOiViaOD9NufRGCCNjOFoBzQmbaISwnYsl3Lw/viewform?usp=sf_link" class="btn btn-info btn-membership" role="button">Registration Form</a>

										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container><br></br>
					</div>
					<div class="quote-style-2 membership-footer-text">
						<span
							className="highlight-text"><i>Thank you for your support!</i></span>
						<br></br>
						<div className="membership-text">
							You're done! Expect to hear from us!
								</div><br></br>
					</div>				</div>
			</div>
		)
	}
}

export default Membership
