import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Calendar from "../calendar/Calendar.js";
import FooterCarousel from "../footercarousel/FooterCarousel.js";
import NewsHome from "../news/newshome/NewsHome.js";
import HeaderCarousel from "../headercarousel/HeaderCarousel.js";
import "./body.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faUsers,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

class Body extends React.Component {
  // TODO: Make this dynamic
  render() {
    let news;
    const { error, isLoaded, calendarEvents } = this.props.state;
    if (error) {
      news = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      news = <div>Loading...</div>;
    } else {
      news = <NewsHome events={this.props.state.calendarEvents} />;
    }
    return (
      <div>
        <HeaderCarousel />
        <div className="body container">
          <div class="container container-body">
            <div class="quote-style-1">
              <div className="god-saver d-lg-none"></div>Learning takes more
              than just attending classes. <br></br>It takes hands-on
              experience.{" "}
              <span className="highlight-text">
                <i>
                  <b>#ACM</b>
                </i>
              </span>
            </div>
            <div className="row">
              {" "}
              <h2 className="benefits-h1">
                <div className="hr-header">
                  __________________________________________
                </div>
                <br></br>
                <br></br>
                ACM BRINGS TO CAL STATE LA...
              </h2>
            </div>
            <div className="row container-benefits">
              <div className="col-sm">
                <FontAwesomeIcon
                  className="fa-5x fa-style"
                  icon={faHandshake}
                ></FontAwesomeIcon>
                <div className="benefits-text">
                  <h2 className="benefits-h2">
                    <b>Professional Development</b>
                  </h2>
                  <p>
                    Resume Workshops, Guest speakers (Google, Spawar, JPL,
                    etc..), and Tech-Company tours.<br></br>
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <FontAwesomeIcon
                  className="fa-5x fa-style"
                  icon={faLaptopCode}
                ></FontAwesomeIcon>
                <div className="benefits-text">
                  <h2 className="benefits-h2">
                    <b>Career Growth</b>
                  </h2>
                  Leadership opportunities, After-workshop-hours additional
                  tutoring/help, and Project workshops (Game and web
                  development)
                  <p></p>
                </div>
              </div>
              <div className="col-sm">
                <FontAwesomeIcon
                  className="fa-5x fa-style"
                  icon={faUsers}
                ></FontAwesomeIcon>
                <div className="benefits-text">
                  <h2 className="benefits-h2">
                    <b>Socializing and Networking</b>
                  </h2>
                  <p>
                    Social events (Hiking, camping, etc..), Game Nights, Movie
                    Night<br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {" "}
              <h2 className="benefits-h1">
                AND MORE...
                <br></br>
                <br></br>
                <div className="hr-header">
                  __________________________________________
                </div>
              </h2>
            </div>
          </div>

          <div class="row row-header quote-style-4">
            <div class="col-sm subcon-body">
              <div class="quote-style-2">
                CSULA's largest computer science<br></br>community -{" "}
                <span className="highlight-text-style2">
                  <b>
                    <i>for a reason.</i>
                  </b>
                </span>
              </div>
            </div>
            <div class="col-sm subcon-body">
              <div>
                The Association for Computing Machinery (ACM) is the world's
                largest educational and scientific computing society, delivers
                resources that advance computing as a science and a profession.
                ACM provides the computing field's premier Digital Library and
                serves its members and the computing profession with
                leading-edge publications, conferences, and career resources.
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
