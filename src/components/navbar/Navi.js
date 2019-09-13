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
            if (y > 600) {
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
                <div id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link to='/'>
                            <li className="nav-item active">
                                <a className="nav-link anchor-white return" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        <Link to="/projects">
                            <li className="nav-item">
                                <a className="nav-link anchor-white return" href="#">Projects/Programs</a>
                            </li>
                        </Link>
                        <Link to='/membership'>
                            <li className="nav-item">
                                <a className="nav-link anchor-white" href="#"><button type="button" class="btn btn-outline-light">Membership</button></a>
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