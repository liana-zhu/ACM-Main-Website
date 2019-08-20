import React from 'react'
import {Link} from 'react-router-dom'

import './navi.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './acmlogo1.png';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faFacebookF, faSnapchatGhost} from "@fortawesome/free-brands-svg-icons"


class Navi extends React.Component {
    componentDidMount(){
        window.addEventListener('scroll', function() {
        console.log('scrolling');
            let y = window.scrollY
            if (y > 100) {
                console.log(y)
                const element = document.getElementById('navb');
                element.classList.add("solid")
             } else {
                const element = document.getElementById('navb');
              element.classList.remove("solid");
            }
          });
        // TODO: Add class once the page is refreshed
    }

    render (){
        return(<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navb">
            <nav className="container-fluid">
                    <a className="navbar-brand" href="{{ url_for('home') }}">
                            {//<img id="logo" src={logo} width="110" class="d-inline-block align-top" alt="Logo"></img>
                    }</a>
                <div className="navbar-header">
                    <button id="colorchange" className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link to='/home'>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        <Link to='/aboutus'>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About Us<span className="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        <Link to='/calendar'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Calendar</a>
                            </li>
                        </Link>
                        <Link to='/membership'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Membership</a>
                            </li>
                        </Link>
                        <Link to='/contactus'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                                {/*
                                <div class="d-flex flex-row ml-3 mr-3 mb-3 about_us_text_computer"><i
                                    class="fas fa-envelope-open col-6 mt-2"></i><a
                                    href="mailto:acm.calstatela@gmail.com">Email Us</a>
                            </div>
                                */}
                            </li>
                        </Link>

                    </ul>
                </div>
            </nav>
            <hr></hr>
        </nav>);
    }
}

export default Navi;