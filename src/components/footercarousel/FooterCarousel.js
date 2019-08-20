import React from 'react'
import Marquee from 'react-double-marquee'
import Image0 from './images/image0.jpg'
import Image1 from './images/image1.jpg'
import Image2 from './images/image2.jpg'
import Image3 from './images/image3.jpg'
import Image4 from './images/image4.jpg'
import Image5 from './images/image5.jpg'
import Image6 from './images/image6.jpg'
import Image7 from './images/image7.jpg'
import Image8 from './images/image8.jpg'
import Image9 from './images/image9.jpg'
import './footercarousel.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faFacebookF, faSnapchatGhost} from "@fortawesome/free-brands-svg-icons"

import 'bootstrap/dist/css/bootstrap.css';
class FooterCarousel extends React.Component {
  render() {
    return (
          <div className="container top-container">
            <div className="row top-row">
              <div className="col-sm">
                 <b>ABOUT US</b><br></br>
                 What is ACM?<br/>
                 Our Mission<br/>
                 Benefits<br/>
                 Leaders<br/>
              </div>
              <div className="col-sm">
                <b>CALENDAR</b><br></br>
                 Annual Calendar<br/>
                 Announcements/Events<br/>
              </div>
              <div className="col-sm">
                <b>MEMBERSHIP</b><br></br>
                 Types of Memberships<br/>
                 Payment Options<br/>
                 Contact Us<br/>
              </div>
            </div>
            <div className="row bottom-container">
            <div className="col-sm">
              acm.calstatela@gmail.com<br></br>
                                   <FontAwesomeIcon className="iconBrand" size="2x" icon={faInstagram}></FontAwesomeIcon> <FontAwesomeIcon  className="iconBrand" size="2x" icon={faFacebookF}></FontAwesomeIcon>  <FontAwesomeIcon  className="iconBrand" size="2x" icon={faSnapchatGhost}></FontAwesomeIcon>
              </div>
              <div className="col-sm">
                  <span className="footer-catchy-text">It's not a bug. <span className="highlight-text"><b><i>It's a feature.</i></b></span></span><br></br>
                <hr></hr>
                <b className="copy-right">© Association of Computing Machinery - California State University, Los Angeles.</b>
              </div>
               <div className="col-sm">
                 5151 State University Dr,<br></br>Los Angeles, CA 90032



              </div>
            </div>
          </div>
    );
  }
}

export default FooterCarousel;