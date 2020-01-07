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
import Wilson from "./leaders/wilson.jpg";
import Vacant from "./leaders/Vacant.png";

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
                          <img className="image-cropper profile-pic " src={Kalvin}></img>
                          <div className="officer-info">
                            <h2>Kalvin Mateo</h2>President
                </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Cristian}></img>
                          <div className="officer-info">
                            <h2>Cristian Corrales</h2>Vice-President
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
                            src={Vacant}
                          ></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>VP of External Affairs
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
                          <img className="image-cropper profile-pic " src={David}></img>
                          <div className="officer-info">
                            <h2>David Tang</h2>Web Officer
                </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Diego}></img>
                          <div className="officer-info">
                            <h2>Diego Flores</h2>Finance Officer
                </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Project Officer
                </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Executive Officer
                </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Digital Media Officer
                </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Coordinating Officer
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
                            src={Deric}
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
                            <h2>George Chan</h2>Web Committee
                </div>
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
                          <img className="image-cropper profile-pic " src={Wilson}></img>
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
                          <img className="image-cropper profile-pic " src={Kalvin}></img>
                          <div className="officer-info">
                            <h2>Kalvin Mateo</h2>President
                </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Cristian}></img>
                          <div className="officer-info">
                            <h2>Cristian Corrales</h2>Vice-President
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
                            src={Vacant}
                          ></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>VP of External Affairs
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
                          <img className="image-cropper profile-pic " src={David}></img>
                          <div className="officer-info">
                            <h2>David Tang</h2>Web Officer
                </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Diego}></img>
                          <div className="officer-info">
                            <h2>Diego Flores</h2>Finance Officer
                </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Project Officer
                </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Executive Officer
                </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Digital Media Officer
                </div>
                        </div>
                      </div>
                      <div className="row-leaders">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>Coordinating Officer
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
                            src={Deric}
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
                            <h2>George Chan</h2>Web Committee
                </div>
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
                          <img className="image-cropper profile-pic " src={Wilson}></img>
                          <div className="officer-info">
                            <h2>Wilson Thomas</h2>ACM Advisor
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
