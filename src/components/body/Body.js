import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import slide1 from './slides/sideshow1.png';
//import slide2 from './slides/sideshow1.png';
//import slide3 from './slides/sideshow1.png';

import Image0 from './leaders/kalvin.jpg'
import Image1 from './leaders/gio.jpg'
import Image2 from './leaders/LittleGeo.jpg'
import Image3 from './leaders/Giovanni.jpg'
import Image4 from './leaders/ingelbert.jpg'
import Image5 from './leaders/andrew.jpg'
import Image6 from './leaders/srivats.jpg'
import Image7 from './leaders/emily.jpg'

import Image8 from './space-invaders.jpg'

import Calendar from '../calendar/Calendar.js';
import FooterCarousel from '../footercarousel/FooterCarousel.js';
import NewsHome from '../news/newshome/NewsHome.js';
import HeaderCarousel from '../headercarousel/HeaderCarousel.js';
import './body.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHandshake, faUsers, faLaptopCode} from "@fortawesome/free-solid-svg-icons"

class Body extends React.Component {

    // TODO: Make this dynamic
    render (){
        let news
        const { error, isLoaded, calendarEvents } = this.props.state;
        if (error) {
            news = <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            news = <div>Loading...</div>;
          } else {
            news = <NewsHome events={this.props.state.calendarEvents}/>
        }
        return(
            <div>
                <HeaderCarousel/>
                <div className="body container">

                    <div class="container container-body">
                        <div class="row container-news">
                            <div className="news">
                                <h2 class="small-header">Upcoming Events and Recent News</h2>
                                {news}

                            </div>                            
                        </div>
                        <div className="row container-quote">
                            
                            <div class="quote-style-1">
                            <div className="god-saver d-lg-none"></div>Learning takes more than just attending classes. <br></br>It takes hands-on experience. <span className="highlight-text"><i><b>#ACM</b></i></span>
                            </div>
                            <div className="row"> <h2 className="benefits-h1">
                            <div className="hr-header">__________________________________________</div><br></br><br></br>
                            ACM BRINGS TO CSULA...</h2></div>
                            <div className="row container-benefits">
                                        <div className="col-sm"><FontAwesomeIcon className="fa-5x fa-style" icon={faHandshake}></FontAwesomeIcon><div className="benefits-text">
                                        <h2 className="benefits-h2"><b>Professional Development</b></h2>
                                        <p>Resume Workshops, Guest speakers (Google, Spawar, JPL, etc..), and Tech-Company tours.<br></br></p></div></div>
                                        <div className="col-sm"><FontAwesomeIcon className="fa-5x fa-style" icon={faLaptopCode}></FontAwesomeIcon><div className="benefits-text">
                                        <h2 className="benefits-h2"><b>Career Growth</b></h2>
                                        Leadership opportunities, After-workshop-hours additional tutoring/help, and Project workshops (Game and web development)
                                        <p></p></div></div>
                                        <div className="col-sm"><FontAwesomeIcon className="fa-5x fa-style" icon={faUsers}></FontAwesomeIcon><div className="benefits-text">
                                        <h2 className="benefits-h2"><b>Socializing and Networking</b></h2>
                                        <p>Social events (Hiking, camping, etc..), Game Nights, Movie Night<br></br></p></div></div>
                                        
                            </div>

                            <div className="row"> <h2 className="benefits-h1">AND THAT'S JUST TO NAME A FEW...

                            <br></br><br></br><div className="hr-header">__________________________________________</div></h2></div>

                            <div class="row container-projects"><div class="col-sm subcon-body ">
                                    <div className="god-saver d-lg-none"></div>
                                    <div class="quote-style-2">
                                        ACM is a <span className="highlight-text"><b><i>project-based</i></b></span> club.<br></br><span className="highlight-text-style2"><b><i>What does this mean?</i></b></span>
                                    </div>
                                </div>
                            <div class="col-sm subcon-body">
                                <div>
                                    We're comitted to creating computer-science related workshops for members. These workshops usually revolve around developing a project throughout a semester. We want everyone to get involved. To do this, we have separated our projects to two: <span className="highlight-text"><i><b>upper</b></i></span> and <span className="highlight-text"><i><b>lower</b></i></span> classmen. Although upperclassmen projects are labled more difficult, you're always free to challenge yourself. Checkout below to learn more.
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                            </div>
                        </div>


                        <div class="row full-container">
                            <div class="container">
                                <div class="row">
                                    
                                </div>
                                <div class="row">
                                    <div className="col-sm space-projects-image"></div>
                                    <div className="col-sm projects-text"><div className="container-text"><h2><b>Lower Classmen</b> | Space Invaders</h2>
                                    <p>Are you interested in creating something where results show immediately? Have you ever played videogames but always wondered, how are they made? In this condense series of workshops, you will learn the Python and through developing your very own class arcade game: Space Invaders.</p>

                                    <p><b>Technologies </b> Git/Github, Python and more python...<br></br>
                                    <b>Time </b> September 3rd 1:00 PM - 3:30 PM</p></div></div>
                                </div>
                                <div class="row">
                                    <div className="col-sm projects-text"><div className="container-text"><h2><b>Upperclassmen Classmen</b> | React Chat-application with Firebase</h2>
                                    <p>Web development is constantly evolving. Classes only teach the basics like HTML/CSS however there is far more to web development today. This workshop will test your abilities to adapt to new technologies that are regularily used in the professional workforce. In a series of workshops, you will learn the fundamentals of web application development with the popular web framework React.js.</p>

                                    <p><b>Technologies </b> Git/Github, React.js, Firebase, Node.js and HTML/CSS<br></br>
                                    <b>Time </b> September 3rd 1:00 PM - 3:30 PM</p></div></div>
                                    <div className="col-sm react-projects-image"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row row-header">
                        <div class="col-sm subcon-body">
                                <div class="quote-style-2">
                                    CSULA's largest computer science<br></br>community - <span className="highlight-text-style2"><b><i>for a reason.</i></b></span>
                                </div>
                            </div>
                            <div class="col-sm subcon-body">
                                <div>
                                    The Association for Computing Machinery (ACM) is the world's largest educational and
                                    scientific computing society, delivers resources that advance computing as a science and
                                    a profession. ACM provides the computing field's premier Digital Library and serves its
                                    members and the computing profession with leading-edge publications, conferences, and career
                                    resources.
                                    
                                </div>
                            </div>
                        
                        </div>
                    </div>

                    <h2>
                    <div className="hr-header">__________________________________________</div><br></br><br></br>
                            ACM 2019-2020 BOARD</h2>
                    <div class="row full-container">
                            <div class="container">
                                <div class="row">
                                    <div className="col-sm"><img className="image-cropper profile-pic officers" src={Image0}></img><div className="officer-info"><h2>Kalvin Mateo</h2>President</div></div>
                                    <div className="col-sm"><img className="image-cropper profile-pic officers" src={Image1}></img><div className="officer-info"><h2>Giovanny Garcia</h2>Vice-President</div></div>
                                    <div className="col-sm"><img className="image-cropper profile-pic officers" src={Image2}></img><div className="officer-info"><h2>Geovanni Huerta</h2>Treasurer</div></div>
                                </div>
                                <div class="row">
                                    <div className="col-sm"><img className="image-cropper profile-pic officers" src={Image3}></img><div className="officer-info"><h2>Geovanny Castellanos</h2>VP of Internal Affairs</div></div>
                                    <div className="col-sm"><img className="image-cropper profile-pic officers" src={Image4}></img><div className="officer-info"><h2>Ingelbert Figueroa</h2>VP of External Affairs</div></div>
                                    <div className="col-sm"><img className="image-cropper profile-pic officers" src={Image5}></img><div className="officer-info"><h2>Andrew Gonzalez</h2>Project Manager</div></div>
                                </div>
                                <div class="row">
                                    <div className="col-sm"><img className="image-cropper profile-pic officers" src={Image6}></img><div className="officer-info"><h2>Srivats V.</h2>Secretary</div></div>
                                    <div className="col-sm"><img className="image-cropper profile-pic officers" src={Image7}></img><div className="officer-info"><h2>Emily Pascua</h2>Web Master</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="hr-header">__________________________________________</div><br></br><br></br>

               </div>
            </div>
        );
    }
}

export default Body;