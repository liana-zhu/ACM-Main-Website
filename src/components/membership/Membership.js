import React from 'react'
import "./membership.css"
import VenmoQr from './assets/venmo-qr.jpg'
import {Tabs,Row,Col,Tab,Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-awesome-modal';

class Membership extends React.Component {
		render(){

			return (

			<div id="membership-body">
				<div className="parallax_style2">
	             </div>

				<div class="quote-style-1">

	                            <div className="god-saver d-lg-none"></div>
	                            <div className="hr-header">__________________________________________</div>
	                            <br></br>
	                            So you're <i>interested</i>?<br></br>Cool! Welcome to the <span className="highlight-text"><i><b>family</b></i></span>!
	                            <br></br>
	                            <div className="hr-header">__________________________________________</div>
	                            <br></br>
	                            <div className="membership-text">
								Classes aren't enough to give your practical experience once you hit the work-force.<br></br>
								CSULA's very own chapter of the Association for Computing Machinery takes care of its<br></br>
								members in more ways then one. We do our best to keep you updated on special events<br></br>
								as well as ongoing club activities. We were also <span className="highlight-text"><b>voted best student org. of the year</b></span>!
								<br></br>
								<br></br>
								</div>
	                            </div>
				<div className="default-padding-top" >
					<div className="parallax_style3">
					<div className="membership-parallax-text">
						<h2>ACM benefits <span className="highlight-text"><b>future leaders</b></span>  by helping them...</h2>
						❖ Develop skills with Project experience through Intensive Workshops<br></br>
						❖ Internship & Scholarship Opportunities<br></br>
						❖ Opportunities to get Involved & to be a Leader<br></br>
						❖ Resume/Internship workshops<br></br>
						❖ Tutoring for CS classes<br></br>
						❖ Conference Opportunities/Tech company tours<br></br>
						❖ Networking Opportunities<br></br>
						❖ Volunteer Opportunities<br></br>
						</div>
	             	</div>
	             	<div class="quote-style-2">
	                            <br></br>
	                            <span className="highlight-text"><i>Let's get started!</i></span>
	                            <br></br>
	                            <div className="membership-text">
								Please select one of our three membership options...
								</div><br></br>
	                            </div>			

					<div className="card">
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
						        	- Receive Newsletters weekly.<br></br>
									- Acccess to project workshops (upper/lower classmen).<br></br>
									- Access to non-project workshops.<br></br>
									- Access to Mini-hackathon.<br></br>
									- Access to tutoring.<br></br>
									- Access to Mentorship program (Mentor/Mentee).<br></br>
								<h2>How to become a member?</h2>
						        	The two steps to becoming a member are to first "Pay" and then "Sign-up". The steps are detailed below,
						        	please follow them to ensure a smooth transaction. Please note that there are <span className="highlight-text">NO REFUNDS</span> and that
						        	membership <span className="highlight-text">DOES NO</span> guarantee project space.
						        <br></br><br></br>
						        <h2><span className="highlight-text"><b><i>Step One</i></b></span> ❖ Payment</h2>
						        The first step is to make the payment. There are three types ways to make a payment (as listed below)
						        choose what is most convient for you.<br></br><br></br>
						        

						        <i>1 - Paypal</i><br></br>
						        <p>Please make sure you have a working paypal account (i.e., can make payments).<br></br> Pay with paypal by clicking the following button:

						        <div className='paypal-form-container'>
									<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
									<input type="hidden" name="cmd" value="_xclick"/>
									<input type="hidden" name="business" value="acm.calstatela@gmail.com"/>
									<input type="hidden" name="lc" value="US"/>
									<input type="hidden" name="item_name" value="ACM Membership 2019-2020"/>
									<input type="hidden" name="button_subtype" value="services"/>
									<input type="hidden" name="no_note" value="0"/>
									<input type="hidden" name="currency_code" value="USD"/>
									<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"/>
									
									<select hidden name="os0">
										<option  type="hidden" value="Regular">Faculty/Alumni $5.50 USD</option>
									</select>
								
									<input  type="hidden" name="option_select0" value="Regular"/>
									<input type="hidden" name="option_amount0" value="5.50"/>
									<button class='btn btn-info btn-membership'>Pay With PayPal</button>
									</form>
																	** Additional 50 cent processing fee.

								</div></p>

						        <i>2 - Venmo</i><br></br>
								Please scan the QR code and enter $5.00.<br></br><br></br>
								<a href={VenmoQr}>
								<button class='btn btn-info btn-membership' src={VenmoQr}>Venmo QR Code</button></a>
								<br></br><br></br>
								For more options, visit our office hours at E&T C-245 from 4:30 PM - 5:00 PM every Thursday.
						     		        <br></br>
						        <br></br>
						        <h2><span className="highlight-text"><b><i>Step Two</i></b></span> ❖ Sign-up</h2>
						        Once you're finished making the payment, please fill out the Google Form with your information
						        (button below). In the very bottom, you will be asked to provide a proof of payment. Please attach the
						        screenshot of either your cash receipt (from the treasurer) or the paypal screenshot.<br></br><br></br>

						        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrLZsGugSQvWOiViaOD9NufRGCCNjOFoBzQmbaISwnYsl3Lw/viewform?usp=sf_link" class="btn btn-info btn-membership" role="button">Registration Form</a>


						        </Tab.Pane>

						        <Tab.Pane eventKey="second">
						        	<h2><span className="highlight-text"><b><i>ACM Membership</i></b></span> ❖ ALUMNI/FACULTY TIER</h2>
						        <h2>Benefits</h2>
						        	- Receive Newsletters weekly.<br></br>
						        	- Access to Mentorship program (Only as a Mentor).<br></br>
								<h2>How to become a member?</h2>
						        	The two steps to becoming a member are to first "Pay" and then "Sign-up". The steps are detailed below,<br></br>
						        	please follow them to ensure a smooth transaction. Please note that there are <span className="highlight-text">NO REFUNDS</span>.
						        <br></br><br></br>
						        <h2><span className="highlight-text"><b><i>Step One</i></b></span> ❖ Payment</h2>
						        The first step is to make the payment. There are three types ways to make a payment (as listed below)
						        choose what is most convient for you.<br></br><br></br>
						        

						        <i>1 - Paypal</i><br></br>
						        <p>Please make sure you have a working paypal account (i.e., can make payments).Pay with paypal by clicking the following button:

						        <div className='paypal-form-container'>
									<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
									<input type="hidden" name="cmd" value="_xclick"/>
									<input type="hidden" name="business" value="acm.calstatela@gmail.com"/>
									<input type="hidden" name="lc" value="US"/>
									<input type="hidden" name="item_name" value="ACM Membership 2019-2020"/>
									<input type="hidden" name="button_subtype" value="services"/>
									<input type="hidden" name="no_note" value="0"/>
									<input type="hidden" name="currency_code" value="USD"/>
									<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"/>
									
									<select hidden name="os0">
										<option  type="hidden" value="Regular">Faculty/Alumni $5.50 USD</option>
									</select>
								
									<input  type="hidden" name="option_select0" value="Regular"/>
									<input type="hidden" name="option_amount0" value="5.50"/>
									<button class='btn btn-info btn-membership'>Pay With PayPal</button>
									</form>
																** Additional 50 cent processing fee.

								</div></p>

						        <i>2 - Venmo</i><br></br>
								Please scan the QR code and enter $5.00.<br></br><br></br>
								<a href={VenmoQr}>
								<button class='btn btn-info btn-membership' src={VenmoQr}>Venmo QR Code</button></a>
								<br></br><br></br>
								For more options, visit our office hours at E&T C-245 from 4:30 PM - 5:00 PM every Thursday.
						        <br></br>
						        <br></br>
						        <h2><span className="highlight-text"><b><i>Step Two</i></b></span> ❖ Sign-up</h2>
						        Once you're finished making the payment, please fill out the Google Form with your information<br></br>
						        (button below). In the very bottom, you will be asked to provide a proof of payment. Please attach the<br></br>
						        screenshot of either your cash receipt (from the treasurer) or the paypal screenshot.<br></br><br></br>

						        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrLZsGugSQvWOiViaOD9NufRGCCNjOFoBzQmbaISwnYsl3Lw/viewform?usp=sf_link" class="btn btn-info btn-membership" role="button">Registration Form</a>
						    
						        </Tab.Pane>
						        <Tab.Pane eventKey="third">
						        <h2><span className="highlight-text"><b><i>ACM Membership</i></b></span> ❖ GOLD TIER</h2>
						        <h2>Benefits</h2>
						        	- ACM's "It's not a bug; It's a feature" T-Shirt included.<br></br>
						        	- All benefits from student/faculty membership included.<br></br>
									<a href="https://i.imgur.com/RerJpNV.png"><img src="https://i.imgur.com/RerJpNV.png"></img></a>
								<h2>How to become a member?</h2>
						        	The two steps to becoming a member are to first "Pay" and then "Sign-up". The steps are detailed below,<br></br>
						        	please follow them to ensure a smooth transaction. Please note that there are <span className="highlight-text">NO REFUNDS</span>.<br></br>
						        <br></br><br></br>
						        <h2><span className="highlight-text"><b><i>Step One</i></b></span> ❖ Payment</h2>
						        The first step is to make the payment. There are three types ways to make a payment (as listed below)<br></br>
						        choose what is most convient for you.<br></br><br></br>
						        

						        <i>1 - Paypal</i><br></br>
						        <p>Please make sure you have a working paypal account (i.e., can make payments).<br></br> Pay with paypal by clicking the following button:

						        <div className='paypal-form-container'>
									<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
									<input type="hidden" name="cmd" value="_xclick"/>
									<input type="hidden" name="business" value="acm.calstatela@gmail.com"/>
									<input type="hidden" name="lc" value="US"/>
									<input type="hidden" name="item_name" value="ACM Membership 2019-2020"/>
									<input type="hidden" name="button_subtype" value="services"/>
									<input type="hidden" name="no_note" value="0"/>
									<input type="hidden" name="currency_code" value="USD"/>
									<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"/>
									
									<select hidden name="os0">
										<option  type="hidden" value="Regular">Gold $12.50 USD</option>
									</select>
								
									<input  type="hidden" name="option_select0" value="Regular"/>
									<input type="hidden" name="option_amount0" value="12.50"/>
									<button class='btn btn-info btn-membership'>Pay With PayPal</button>
									</form>
								** Additional 50 cent processing fee.
								</div></p>

						        <i>2 - Venmo</i><br></br>
								Please scan the QR code and enter $12.00.<br></br><br></br>
								<a href={VenmoQr}>
								<button class='btn btn-info btn-membership' src={VenmoQr}>Venmo QR Code</button></a>
								<br></br><br></br>
								For more options, visit our office hours at E&T C-245 from 4:30 PM - 5:00 PM every Thursday.
						        <br></br>
						        <br></br>
						        <h2><span className="highlight-text"><b><i>Step Two</i></b></span> ❖ Sign-up</h2>
						        Once you're finished making the payment, please fill out the Google Form with your information<br></br>
						        (button below). In the very bottom, you will be asked to provide a proof of payment. Please attach the<br></br>
						        screenshot of either your cash receipt (from the treasurer) or the paypal screenshot.<br></br><br></br>

						        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrLZsGugSQvWOiViaOD9NufRGCCNjOFoBzQmbaISwnYsl3Lw/viewform?usp=sf_link" class="btn btn-info btn-membership" role="button">Registration Form</a>
						    
						        </Tab.Pane>
						      </Tab.Content>
						    </Col>
						  </Row>
					</Tab.Container><br></br>
					</div>
					<div class="quote-style-2">
	                            <br></br>
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