import React from 'react'
import "./contactus.css"
import {Card} from 'react-bootstrap'
import logo from './acmlogo1.png';
import ig_logo from './ig_logo.png'
import fb_logo from './fb_logo.png'
import discord_logo from './discord_logo.png'

class ContactUs extends React.Component {
	render() {
		return (
			<div className="contact-us-page">
				<div className="contact-us-card">
					<Card className="text-center">
						<img
							src={logo}
							className="contact-us-logo"
							alt="ACM logo"
						/>
						<p>
							<b>Reach us at: </b>
							{/* <a href="mailto:acm.calstatela@gmail.com" target="_top">acm.calstatela@gmail.com</a> */}
							acm.calstatela@gmail.com
						</p>
						{/* <p>
							<b>Office Hours:</b> Thursdays, 3-4 pm @ET C-245
						</p> */}
						<p> 
							There will not be office hours.
						</p>
					</Card>
				</div>

				<div className="contact-us-card">
					<Card className="text-center">
					<div>
						<h2>Social Media</h2>
							<a href="https://www.instagram.com/calstatela_acm/?hl=en">
								{/* <FontAwesnomeIcon className="iconBrand" size="2x" icon={faInstagram}></FontAwesomeIcon> */}
								<img
								src={ig_logo}
								className="contact-us-logo-2"
								alt="IG Logo"
								/>
							</a>
							<a href="https://www.facebook.com/calstatela.acm"> 
							{/* <FontAwesomeIcon  className="iconBrand" size="2x" icon={faFacebookF}></FontAwesomeIcon> */}
								<img
								src={fb_logo}
								className="contact-us-logo-2"
								alt="IG Logo"
								/>
							</a>
							<a href="https://discordapp.com/invite/wX58JRv">
								{/* <FontAwesomeIcon  className="iconBrand" size="2x" icon={faDiscord}></FontAwesomeIcon> */}
								<img
								src={discord_logo}
								className="contact-us-logo-2"
								alt="IG Logo"
								/>
							</a>
						</div>
					</Card>
				</div>

				<div className="contact-us-card">
					<Card className="text-center" text="white">
						<h1>Contact Us</h1>
						<form action="mailto:acm.calstatela@gmail.com?Subject=Contacting%20You%20From%20Website" method="POST" enctype="text/plain">
							<div className="txtb">
								<label for="name" className="card-bg">Full Name :</label>
								<input type="text" id="name" name="name" className="card-bg" placeholder="Enter Your Name" />
							</div>

							<div className="txtb">
								<label for="email" className="card-bg">Email: </label>
								<input type="text" id="email" name="email" className="card-bg" placeholder="Enter Your Email" />
							</div>

							<div className="txtb">
								<label for="phoneNo" className="card-bg">Phone Number :</label>
								<input type="text" id="phoneNo" name="phoneNo" className="card-bg" placeholder="Enter Your Phone Number" />
							</div>

							<div className="txtb">
								<label for="message" className="card-bg">Message: </label>
							<textarea id="body" name="message" className="card-bg"></textarea>
							</div>
							<input type="submit" value="Send" id="btn-form" />
						</form>
					</Card>
				</div>
			</div>
		)
	}
}

export default ContactUs