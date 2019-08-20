import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import slide1 from './slides/sideshow1.png';
//import slide2 from './slides/sideshow1.png';
//import slide3 from './slides/sideshow1.png';
import Calendar from '../calendar/Calendar.js';
import FooterCarousel from '../footercarousel/FooterCarousel.js';
import NewsHome from '../news/newshome/NewsHome.js';
import HeaderCarousel from '../headercarousel/HeaderCarousel.js';
import './body.css'

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
            news = <NewsHome events={this.props.state.calendarEvents.reverse()}/>
        }
        return(
            <div>
                <HeaderCarousel/>
                <div className="body">

                    <div class="container container-body">
                        <div class="quote-style-1">Learning takes more than just attending classes. <br></br>It takes hands-on experience. <span className="highlight-text"><i><b>#ACM</b></i></span></div>
                        <div class="row">
                        <div class="col-sm subcon-body">
                            <div className="news">
                                <h2>What's new?</h2>
                                <hr></hr>
                                {news}
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
                                    <br></br>
                                    <br></br>
                                    <button type="button" class="btn btn-outline-light">Learn More...</button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default Body;