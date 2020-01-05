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
import {faInstagram, faFacebookF, faDiscord} from "@fortawesome/free-brands-svg-icons"

import 'bootstrap/dist/css/bootstrap.css';
class FooterCarousel extends React.Component {
  render() {
    return (
          <div className="container top-container">
            <div className="row bottom-container">
            <div className="col-sm footer-text">
            <div className="footer-leader-text"><b>Want to become a leader? Interested in:</b><br></br><br></br>
- Giving back to the community.<br></br>
- Gaining Leadership skills.<br></br>
- Knowing how to organize/lead Events.<br></br>
- How to work as a team or work with a team.<br></br>
- How to be a Lead lead others.<br></br>
- Gain Networking Opportunities.<br></br>
- Professional/self-Development.<br></br>
<br></br>
              <b>Email us:</b> acm.calstatela@gmail.com</div><br></br>
                                 
              </div>
              <div className="col-sm footer-text">
                  <span className="footer-catchy-text">It's not a bug. <span className="highlight-text"><b><i>It's a feature.</i></b></span></span><br></br>
                <b className="copy-right">© Association of Computing Machinery - California State University, Los Angeles.</b><br></br><br></br>
                 <a href="https://www.instagram.com/calstatela_acm/?hl=en"> <FontAwesomeIcon className="iconBrand" size="2x" icon={faInstagram}></FontAwesomeIcon></a>
                                  <a href="https://www.facebook.com/calstatela.acm"> <FontAwesomeIcon  className="iconBrand" size="2x" icon={faFacebookF}></FontAwesomeIcon></a>
                                  <a href="https://discordapp.com/invite/wX58JRv"><FontAwesomeIcon  className="iconBrand" size="2x" icon={faDiscord}></FontAwesomeIcon></a>
              </div>
               <div className="col-sm footer-text">
                 5151 State University Dr,<br></br>Los Angeles, CA 90032



              </div>
            </div>
          </div>
    );
  }
}

export default FooterCarousel;