import React from 'react'
import { PayPalButton } from 'react-paypal-button'
import VenmoQr from './assets/venmo-qr.jpg'

const Membership = () => {
	const paypalOptions = {
    clientId: '12345',
    intent: 'capture'
  }
 
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }
	return (
		<div className="default-padding-top">
			<div class="quote-style-1">
                            <div className="god-saver d-lg-none"></div>So you're <i>interested</i>?<br></br>Cool! Welcome to the <span className="highlight-text"><i><b>family</b></i></span>!
                            </div>
			<p className="default-padding-top"> 

				<div className="card"><h2 className="header-left">Why join ACM?</h2>

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
				<b><u>As of this semester, we will only be accepting PayPal and Venmo if you're paying online instead of cash.<br></br> All payments MUST be sent to acm.calstatela@gmail.com.
				</u></b></div>
				<div className="card"><h2>How to become an ACM Member</h2>
				The two steps to becoming a member are to first "Pay" and then "Sign-up". The steps are detailed below - please follow them to ensure a smooth transaction. Please note that there are NO REFUNDS and that membership DOES NOT guarantee project space.
				
				<h2>1. Payment</h2> The first step is to make the payment. There are two types ways to make a payment, choose what is most convient for you.
				<br></br>
				<i> 1-A. Cash Payments</i> Find the ACM Treasurer Geovanny Huerta (or set up a meeting via email: acm.calstatela@gmail.com) and once met with, give exact amount to him. He will give you a receipt. Take a picture of this receipt and proceed to the second step.
				<i> 1-B. Online Payments</i> Please make sure you have a working paypal account (i.e., can make payments). Pay with paypal by clicking the following button:
<PayPalButton
      paypalOptions={paypalOptions}
      buttonStyles={buttonStyles}
      amount={1.00}
    />				<br></br>
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
				</div>
			</p>
		</div>
	) 
}

export default Membership