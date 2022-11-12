import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import "./sponsor.css";

class Sponsors extends React.Component{

    componentDidUpdate() {
		window.scrollTo(0, 0);
	}

    render(){
        return(
            <div>
                <div>
                    <div className="sponsors-text">
                        <p>Sponsors</p>
                    </div>
                    <div className="sponsors-card"></div>
                </div>
                {/* <div className="sponsors-border"></div> */}
                <Jumbotron>
                <div>
                    <p className="sponsors-header">Sponsor ACM to get these benefits!</p>
                    {/* logo placements */}
                    {/* <p className="text-center">*insert logo*</p>
                    <p className="text-center">*insert logo*</p>
                    <p className="text-center">*insert logo*</p>
                    <p className="text-center">*insert logo*</p> */}
                </div>
                <div className="text-info">
                    <div className="membership-description-section">
                        <h2 className="sponsors-header-text">Sponsorship Tiers</h2>
                        <div className="content-box">
                                <p className="gold-sponsor-color"><b>❖ Gold Sponsor</b></p>
                                <ul>
                                    <li className="benefit">Website Advertisement</li>
                                    <li className="benefit">Movie Voucher Advertisement</li>
                                    <li className="benefit">Social Media Advertisement</li>
                                    <li className="benefit">Semester Kickoff Event</li>
                                    <li className="benefit">Logo on event flyers</li>
                                    <li className="benefit">Product Promotion during Events/Seminars</li>
                                    <li className="benefit">Host Company Workshops</li>
                                    <li className="benefit">Exclusive ACM Merchandise</li>
                                </ul>
                                    <p className="silver-sponsor-color"><b>❖ Silver Sponsor</b></p>
                                <ul>
                                    <li className="benefit">Website Advertisement</li>
                                    <li className="benefit">Movie Voucher Advertisement</li>
                                    <li className="benefit">Social Media Advertisement</li>
                                    <li className="benefit">Semester Kickoff Event</li>
                                </ul>
                                    <p className="bronze-sponsor-color"><b>❖ Bronze Sponsor</b></p>
                                <ul>
                                    <li className="benefit">Website Advertisement</li>
                                    <li className="benefit">Movie Voucher Advertisement</li>
                                </ul>
                        </div>
                    </div>
                </div>
                    
                </Jumbotron>
                
            </div>
        )
    }
}

export default Sponsors;