import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import './headercarousel.css'
import Typed from 'react-typed';
import logo from './acmlogo1.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faFacebookF, faSnapchatGhost} from "@fortawesome/free-brands-svg-icons"


class HeaderCarousel extends React.Component {
    render (){
        return( 
            <div>
                <div className="parallax">
                  <div id="introduction"><img id="logoImage" src={logo}></img>
                  <div className="d-none d-md-block"><span id="codeText">.creates('<Typed className="typed"
                        strings={["creative thinkers", "future leaders", "realife experience", "problem solvers"]}
                        typeSpeed={100}
                        backDelay={60}
                        loop
                    />');</span><br></br></div></div>
                </div>
            </div>
            
        
    );
    }
}

export default HeaderCarousel;