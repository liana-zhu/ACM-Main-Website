import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './headercarousel.scss'
import Typed from 'react-typed';
import logo from './acmlogo1.png';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import {faInstagram, faFacebookF, faSnapchatGhost} from "@fortawesome/free-brands-svg-icons"


class HeaderCarousel extends React.Component {
    render (){
        return( 
            <div className="parallax">
                <div className="middler">
                    <div id="introduction">
                        <img id="logoImage" src={logo} alt="logo"/>
                        <div className="d-none d-md-block">
                            <span id="codeText">
                                .creates('<Typed className="typed"
                                strings={["creative thinkers", "future leaders", "real-life experience", "problem solvers"]}
                                typeSpeed={100}
                                backDelay={60}
                                loop/>');
                            </span>
                        </div>
                    </div>
                </div>

            </div>
    );
    }
}

export default HeaderCarousel;