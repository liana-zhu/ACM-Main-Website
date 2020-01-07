import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Andrew2019 from "./2019-2020-leaders/Andrew G.png";
import Ayush from "./2019-2020-leaders/Ayush.png";
import Cristian from "./2019-2020-leaders/Cristian C.png";
import DavidT from "./2019-2020-leaders/David.png";
import Deric2019 from "./2019-2020-leaders/Deric K.png";
import Diego2019 from "./2019-2020-leaders/Diego F.png";
import Elton from "./2019-2020-leaders/Elton M.png";
import Emily2019 from "./2019-2020-leaders/Emily P.png";
import George from "./2019-2020-leaders/George C.png";
import GeovannyH2019 from "./2019-2020-leaders/Geovanny H.png";
import GioG2019 from "./2019-2020-leaders/Gio G.png";
import GioC2019 from "./2019-2020-leaders/Giovanni C.png";
import Ingelbert2019 from "./2019-2020-leaders/Inelbert F.png";
import Isaac from "./2019-2020-leaders/Isaac V.png";
import Kalvin2019 from "./2019-2020-leaders/Kalvin M.png";
import Marco from "./2019-2020-leaders/Marco A.png";
import Mazel from "./2019-2020-leaders/Mazel H.png";
import Randy from "./2019-2020-leaders/Randy Moss Advisor-2.jpg";
import Srivats2019 from "./2019-2020-leaders/Srivats V.png";
import Wilson2019 from "./2019-2020-leaders/wilson.jpg";
import Vacant from "./2019-2020-leaders/Vacant.png";

import Alexis from "./2018-2019-leaders/alexis.jpg"
import Andrew2018 from "./2018-2019-leaders/andrew.jpg"
import Brian from "./2018-2019-leaders/brian.jpg"
import DavidS from "./2018-2019-leaders/david.jpg"
import Deric2018 from "./2018-2019-leaders/deric.jpg"
import Diego2018 from "./2018-2019-leaders/diego.jpg"
import Emily2018 from "./2018-2019-leaders/emily.jpg"
import GioG2018 from "./2018-2019-leaders/gio.jpg"
import GioC2018 from "./2018-2019-leaders/Giovanni.jpg"
import Ingelbert2018 from "./2018-2019-leaders/ingelbert.jpg"
import Kalvin2018 from "./2018-2019-leaders/kalvin.jpg"
import GeovannyH2018 from "./2018-2019-leaders/LittleGeo.jpg"
import Pranil from "./2018-2019-leaders/pranil.jpg"
import Ryan from "./2018-2019-leaders/ryan.jpg"
import Srivats2018 from "./2018-2019-leaders/srivats.jpg"
import Wilson2018 from "./2018-2019-leaders/wilson.jpg"

import { Tabs, Row, Col, Tab, Nav, Button } from 'react-bootstrap'
import Jumbotron from "react-bootstrap/Jumbotron";
import Calendar from "../calendar/Calendar.js";
import FooterCarousel from "../footercarousel/FooterCarousel.js";
import NewsHome from "../news/newshome/NewsHome.js";
import "./board.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faUsers,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="body container">
          <Jumbotron className="row leaders-div">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">2019-2020</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">2018-2019</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Row>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="row">
                        <div className="god-saver d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader">
                          ACM 2019-2020 BOARD
                          </h2>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kalvin2019}></img>
                          <div className="officer-info">
                            <h2>Kalvin Mateo</h2>President
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Cristian}></img>
                          <div className="officer-info">
                            <h2>Cristian Corrales</h2>Vice President
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={GeovannyH2019}
                          ></img>
                          <div className="officer-info">
                            <h2>Geovanny Huerta</h2>Treasurer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GioC2019}></img>
                          <div className="officer-info">
                            <h2>Giovanni Castellanos</h2>VP of Internal Affairs
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={Vacant}
                          ></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>VP of External Affairs
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Andrew2019}></img>
                          <div className="officer-info">
                            <h2>Andrew Gonzalez</h2>Project Manager
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Srivats2019}></img>
                          <div className="officer-info">
                            <h2>Srivats Venkataraman</h2>Secretary
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Webmaster
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Elton}></img>
                          <div className="officer-info">
                            <h2>Elton Lin</h2>Administrative Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={DavidT}></img>
                          <div className="officer-info">
                            <h2>David Tang</h2>Web Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Diego2019}></img>
                          <div className="officer-info">
                            <h2>Diego Flores</h2>Finance Officer
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Isaac}></img>
                          <div className="officer-info">
                            <h2>Isaac Villalva</h2>General Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={Deric2019}
                          ></img>
                          <div className="officer-info">
                            <h2>Deric Kwok</h2>General Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={George}></img>
                          <div className="officer-info">
                            <h2>George Chan</h2>Web Committee</div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Ralph Belleca</h2>Web Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ayush}></img>
                          <div className="officer-info">
                            <h2>Ayush Singh</h2>Outreach Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Kevin Flores</h2>Outreach Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Mazel}></img>
                          <div className="officer-info">
                            <h2>Mazel Fernandez</h2>Outreach Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Luis Gonzalez</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>John Grover</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders">ADVISORS</h2>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Randy}></img>
                          <div className="officer-info">
                            <h2>Randal Moss</h2>ACM Advisor
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Wilson2019}></img>
                          <div className="officer-info">
                            <h2>Wilson Thomas</h2>ACM Advisor
                            </div>
                        </div>
                      </div>
                      <div className="space"></div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="row">
                        <div className="god-saver d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader">
                          ACM 2018-2019 BOARD
                          </h2>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Wilson2018}></img>
                          <div className="officer-info">
                            <h2>Wilson Thomas</h2>President
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Pranil}></img>
                          <div className="officer-info">
                            <h2>Pranil Dahal</h2>Vice President
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={DavidS}
                          ></img>
                          <div className="officer-info">
                            <h2>David San</h2>Treasurer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GioG2018}></img>
                          <div className="officer-info">
                            <h2>Giovanni Garcia</h2>VP of Internal Affairs
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={Vacant}
                          ></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>VP of External Affairs
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Brian}></img>
                          <div className="officer-info">
                            <h2>Brian Hernandez</h2>Project Manager
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GeovannyH2018}></img>
                          <div className="officer-info">
                            <h2>Geovanny Huerta</h2>Secretary
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Webmaster
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kalvin2018}></img>
                          <div className="officer-info">
                            <h2>Kalvin Mateo</h2>Administrative Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Diego2018}></img>
                          <div className="officer-info">
                            <h2>Diego Flores</h2>Finance Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ryan}></img>
                          <div className="officer-info">
                            <h2>Ryan Dunning</h2>Web/Networking Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Deric2018}></img>
                          <div className="officer-info">
                            <h2>Deric Kwok</h2>Project Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GioC2018}></img>
                          <div className="officer-info">
                            <h2>Giovanni Castellanos</h2>Digital Media Officer
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Emily2018}></img>
                          <div className="officer-info">
                            <h2>Emily Pascua</h2>Web/Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={Srivats2018}
                          ></img>
                          <div className="officer-info">
                            <h2>Srivats Venkataraman</h2>Web/Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ingelbert2018}></img>
                          <div className="officer-info">
                            <h2>Ingelbert Figueroa</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Andrew2018}></img>
                          <div className="officer-info">
                            <h2>Andrew Gonzalez</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Alexis}></img>
                          <div className="officer-info">
                            <h2>Alexis</h2>General Committee
                            </div>
                        </div>
                      </div>
                      <div className="space"></div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Board;
