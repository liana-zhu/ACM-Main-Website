import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './headercarousel.scss'
import Typed from 'react-typed';
import logo from './acmlogo1.png';

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
                                strings={["creative thinkers", "future leaders", "real-life experience", "problem solvers", "hard workers"]}  
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