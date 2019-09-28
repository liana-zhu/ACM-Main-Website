import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Andrew from "./leaders/Andrew G.png";
import Ayush from "./leaders/Ayush.png";
import Cristian from "./leaders/Cristian C.png";
import David from "./leaders/David.png";
import Deric from "./leaders/Deric K.png";
import Diego from "./leaders/Diego F.png";
import Elton from "./leaders/Elton M.png";
import Emily from "./leaders/Emily P.png";
import George from "./leaders/George C.png";
import GeovannyH from "./leaders/Geovanny H.png";
import GioG from "./leaders/Gio G.png";
import GioC from "./leaders/Giovanni C.png";
import Ingelbert from "./leaders/Inelbert F.png";
import Isaac from "./leaders/Isaac V.png";
import Kalvin from "./leaders/Kalvin M.png";
import Marco from "./leaders/Marco A.png";
import Mazel from "./leaders/Mazel H.png";
import Randy from "./leaders/Randy Moss Advisor-2.jpg";
import Srivats from "./leaders/Srivats V.png";

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
          <Jumbotron className="row leaders-div">
            <div className="row">
                          <div className="god-saver d-lg-none"></div>
              <h2 className="h2-leaders centered-leader">
                ACM 2019-2020 BOARD
              </h2>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Kalvin}></img>
                <div className="officer-info">
                  <h2>Kalvin Mateo</h2>President
                </div>
              </div>
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={GioG}></img>
                <div className="officer-info">
                  <h2>Giovanni Garcia</h2>Vice-President
                </div>
              </div>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img
                  className="image-cropper profile-pic "
                  src={GeovannyH}
                ></img>
                <div className="officer-info">
                  <h2>Geovanny Huerta</h2>Treasurer
                </div>
              </div>
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={GioC}></img>
                <div className="officer-info">
                  <h2>Giovanni Castellanos</h2>VP of Internal Affairs
                </div>
              </div>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img
                  className="image-cropper profile-pic "
                  src={Ingelbert}
                ></img>
                <div className="officer-info">
                  <h2>Ingelbert Figueroa</h2>VP of External Affairs
                </div>
              </div>
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Andrew}></img>
                <div className="officer-info">
                  <h2>Andrew Gonzalez</h2>Project Manager
                </div>
              </div>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Srivats}></img>
                <div className="officer-info">
                  <h2>Srivats Venkataraman</h2>Secretary
                </div>
              </div>
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Emily}></img>
                <div className="officer-info">
                  <h2>Emily Pascua</h2>Web Master
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
              <h2 className="h2-leaders">OFFICERS AND COMITTEE</h2>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Elton}></img>
                <div className="officer-info">
                  <h2>Elton Lin</h2>Administrative officer
                </div>
              </div>
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Deric}></img>
                <div className="officer-info">
                  <h2>Deric Kwok</h2>General Comittee
                </div>
              </div>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Isaac}></img>
                <div className="officer-info">
                  <h2>Isaac Villalva</h2>General Comittee
                </div>
              </div>
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={David}></img>
                <div className="officer-info">
                  <h2>David Tang</h2>General Comittee
                </div>
              </div>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Ayush}></img>
                <div className="officer-info">
                  <h2>Ayush Singh</h2>Outreach Comittee
                </div>
              </div>
              <div className="col-leaders">
                <img
                  className="image-cropper profile-pic "
                  src={Cristian}
                ></img>
                <div className="officer-info">
                  <h2>Cristian Corrales</h2>Project Officer
                </div>
              </div>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Marco}></img>
                <div className="officer-info">
                  <h2>Marco Aguilar</h2>Web Comittee
                </div>
              </div>
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={George}></img>
                <div className="officer-info">
                  <h2>George Chan</h2>Web Comittee
                </div>
              </div>
            </div>
            <div className="row">
              <h2 className="h2-leaders">FACULTY ADVISOR</h2>
            </div>
            <div className="row-leaders">
              <div className="col-leaders">
                <img className="image-cropper profile-pic " src={Randy}></img>
                <div className="officer-info">
                  <h2>Randal Moss</h2>ACM Advisor
                </div>
              </div>
            </div>
                      <div className="space"></div>

          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Body;
