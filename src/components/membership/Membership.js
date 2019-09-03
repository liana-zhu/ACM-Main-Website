import React from 'react'
import "./membership.css"
import VenmoQr from './assets/venmo-qr.jpg'
<<<<<<< Updated upstream
import 'bootstrap/dist/css/bootstrap.css';
=======
import {Tabs,Row,Col,Tab,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-awesome-modal';
>>>>>>> Stashed changes

class Membership extends React.Component {
	 constructor(props) {
        super(props);
        this.state = {
            visible : false
	        }
	    }

	    openModal() {
	        this.setState({
	            visible : true
	        });
	    }

	    closeModal() {
	        this.setState({
	            visible : false
	        });
	    }
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

<<<<<<< Updated upstream
					<div className="card" id="membership-pills">
						<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
						  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
						  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
						  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
						</div>
						<div class="tab-content" id="v-pills-tabContent">
						  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
						  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
						  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
						  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
						</div>

					<h2 className="header-left">Why join ACM?</h2>

							Classes aren't enough to give your practical experience once you hit the work-force. CSULA's very own chapter of the Association for<br></br> Computing Machinery takes care of its members in more ways then one. We do our best to keep you updated on special events as well as ongoing club activities.
							<br></br><br></br>
							<h2 className="header-left">What ACM offers...</h2>
							❖ Develop skills with Project experience through Intensive Workshops<br></br>
							❖ Internship & Scholarship Opportunities<br></br>
							❖ Opportunities to get Involved & to be a Leader<br></br>
							❖ Resume/Internship workshops<br></br>
							❖ Tutoring for CS classes<br></br>
							❖ Conference Opportunities/Tech company tours<br></br>
							❖ Networking Opportunities<br></br>
							❖ Volunteer Opportunities<br></br>
					</div>
					<div className="card"><h2>Membership Details/Payment Info</h2>

					As of Fall 2019, we have a "basic" $5 Membership fee which includes all of the following benefits:<br></br>
					❖ Access to join either upperclassmen/lowerclassmen workshop.<br></br>
					❖ Complementary pizza.<br></br>
					❖ Access to all professional speaker events (Google, Spawar, JPL, more!)<br></br>
					❖ Tutoring and mentorship opportunities 
					<br></br>
					<br></br>

					We also have a $12 Membership fee which includes all of the following benefits:<br></br>
					❖ The same benefits as in the basic membership.<br></br>
					❖ And a 'It's not a bug. It's a feature' members t-shirt.<br></br>
					<br></br>
					<b><u>As of this semester, we will only be accepting PayPal and Venmo if you're paying online instead of cash.<br></br> All payments MUST be sent to acm.calstatela@gmail.com.
					</u></b></div>
					<div className="card"><h2>How to become an ACM Member</h2>
					The two steps to becoming a member are to first "Pay" and then "Sign-up". The steps are detailed below - please follow them to ensure a smooth transaction. Please note that there are NO REFUNDS and that membership DOES NOT guarantee project space.
					
					<h2>1. Payment</h2> The first step is to make the payment. There are two types ways to make a payment, choose what is most convient for you.
					<br></br>
					<i> 1-A. Cash Payments</i> Find the ACM Treasurer Geovanny Huerta (or set up a meeting via email: acm.calstatela@gmail.com) and once met with, give exact amount to him. He will give you a receipt. Take a picture of this receipt and proceed to the second step.
					<i> 1-B. Online Payments</i> Please make sure you have a working paypal account (i.e., can make payments). Pay with paypal by clicking the following button:
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
						<table>
						<tr>
						<td>
						<input type="hidden" name="on0" value="Tiers"/>
						Tiers
						</td>
						</tr>
						<tr>
						<td>
						<select name="os0">
						<option value="Faculty/Alumni">Faculty/Alumni $5.50 USD</option>
						<option value="Student">Student $5.50 USD</option>
						<option value="Student+">Student+ $12.50 USD</option>
						</select>
						</td>
						</tr>
						</table>
						<input  type="hidden" name="option_select0" value="Faculty/Alumni"/>
						<input type="hidden" name="option_amount0" value="5.50"/>
						<input type="hidden" name="option_select1" value="Student"/>
						<input type="hidden" name="option_amount1" value="5.50"/>
						<input type="hidden" name="option_select2" value="Student+"/>
						<input type="hidden" name="option_amount2" value="12.50"/>
						<input type="hidden" name="option_index" value="0"/>
						<button class='btn btn-info btn-membership'>Pay With PayPal</button>
						</form>
					</div>
					<br></br>
					You can also pay with venmo using this QR code:
					<div className='venmo-container'>
						<div className='venmo-qr'>
							<img src={VenmoQr}/>
						</div>
					</div>
					
					Once finished, take a screenshot of your paypal invoice or venmo invoice. You can either take a screenshot of the confirmation email OR your transaction history - whatever proves that you have made the purchase. 
					<br></br>
					<br></br><br></br>

					<h2>2. Fill out the Membership Registration Form</h2>
					Once you're finished making the payment, please fill out the Google Form with your information (button below). In the very bottom, you will be asked to provide a proof of payment. Please attach the screenshot of either your cash receipt (from the treasurer) or the paypal screenshot.
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSfrLZsGugSQvWOiViaOD9NufRGCCNjOFoBzQmbaISwnYsl3Lw/viewform?usp=sf_link" class="btn btn-info btn-membership" role="button">Registration Form</a>
					<h2>3. Additional steps</h2>
					Once you have made the payment and filled the google form, you're done! You should expect to recieve emails from us with further information in the following days. If you have any additional questions, you can contact us through our email acm.calstatela@gmail.com or through discord (https://discordapp.com/invite/wX58JRv).
					<i> </i>
					<i> </i>
					<h2>Thank you for supporting ACM!</h2>
=======
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
						        <i>3 - Cash (Least Prefered)</i><br></br>
						        Find the ACM Treasurer Geovanny Huerta (or set up a meeting via email: acm.calstatela@gmail.com)and once met with, give exact amount to him. He will give you a receipt. Take a picture of this receipt and proceed to the second step.
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
						        <i>3 - Cash (Least Prefered)</i><br></br>
						        Find the ACM Treasurer Geovanny Huerta (or set up a meeting via email: acm.calstatela@gmail.com) <br></br>and once met with, give exact amount to him. He will give you a receipt. Take a picture of this receipt and proceed to the second step.
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
						        	- All benefits from student membership included.<br></br>
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
						        <i>3 - Cash (Least Prefered)</i><br></br>
						        Find the ACM Treasurer Geovanny Huerta (or set up a meeting via email: acm.calstatela@gmail.com) <br></br>and once met with, give exact amount to him. He will give you a receipt. Take a picture of this receipt and proceed to the second step.
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
>>>>>>> Stashed changes
					</div>
					<div class="quote-style-2">
	                            <br></br>
	                            <span className="highlight-text"><i>Thank you for your support!</i></span>
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