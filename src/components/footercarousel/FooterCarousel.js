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
              <div className="col-sm footer-text">
               <a href="https://www.instagram.com/calstatela_acm/?hl=en"> <FontAwesomeIcon className="iconBrand" size="2x" icon={faInstagram}></FontAwesomeIcon></a>
                                  <a href="https://www.facebook.com/calstatela.acm"> <FontAwesomeIcon  className="iconBrand" size="2x" icon={faFacebookF}></FontAwesomeIcon></a>
                                  <a href="https://discordapp.com/invite/wX58JRv"><FontAwesomeIcon  className="iconBrand" size="2x" icon={faDiscord}></FontAwesomeIcon></a>
                  <br></br><br></br>
                  Contact us: <b>acm.calstatela@gmail.com</b><br></br>
                                Office hours: E&T C-245 3PM-4PM every <b>Thursday</b><br></br><br></br>

                  <span className="footer-catchy-text">It's not a bug. <span className="highlight-text"><b><i>It's a feature.</i></b></span></span><br></br>
                <b className="copy-right">© Association of Computing Machinery - California State University, Los Angeles.</b><br></br><br></br>
                     </div>
              </div>
            </div>
          </div>
    );
  }
}

export default FooterCarousel;
