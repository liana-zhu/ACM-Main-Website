import React from "react";
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import Jumbotron from "react-bootstrap/Jumbotron";
import "./board.css";
import "bootstrap/dist/css/bootstrap.css";

// 2020-21 leaders
import Cristian2020 from "./2020-2021-leaders/Cristian.jpg";
import Srivats2020 from "./2020-2021-leaders/Srivats.jpg";
import Nidhi2020 from "./2020-2021-leaders/Nidhi.jpg";
import Elton2020 from "./2020-2021-leaders/Elton.jpg";
import Rita2020 from "./2020-2021-leaders/Rita.jpg";
import Grover2020 from "./2020-2021-leaders/Grover.jpg";
import Luis2020 from "./2020-2021-leaders/Luis.jpg";
import DavidT2020 from "./2020-2021-leaders/David.jpg";
import Grace2020 from "./2020-2021-leaders/Grace.jpg";
import Alvin2020 from "./2020-2021-leaders/Alvin.jpg";
import Jorge2020 from "./2020-2021-leaders/Jorge.jpg";
import Julio2020 from "./2020-2021-leaders/Julio.jpg";
import Anthony2020 from "./2020-2021-leaders/Anthony.jpg";
import Adrian2020 from "./2020-2021-leaders/Adrian.jpg";
import DavidM2020 from "./2020-2021-leaders/DavidM.jpg";
import Gregory2020 from "./2020-2021-leaders/Gregory.jpg";
import Lillian2020 from "./2020-2021-leaders/Lillian.jpg";
import Omar2020 from "./2020-2021-leaders/Omar.jpg";
import Daniel2020 from "./2020-2021-leaders/Daniel.jpg";
import Ralph2020 from "./2020-2021-leaders/Ralph.jpg";
import Robert2020 from "./2020-2021-leaders/Robert.jpg";
import Sameen2020 from "./2020-2021-leaders/Sameen.jpg";
import Tracy2020 from "./2020-2021-leaders/Tracy.jpg";
import Randy2020 from "./2020-2021-leaders/Randy Moss Advisor-2.jpg";
import Wilson2020 from "./2020-2021-leaders/wilson.jpg"
import Kalvin2020 from "./2020-2021-leaders/Kalvin M.png";

// 2019-20 leaders
import Andrew2019 from "./2019-2020-leaders/Andrew G.png";
import Ayush2019 from "./2019-2020-leaders/Ayush.png";
import Cristian2019 from "./2019-2020-leaders/Cristian C.png";
import DavidT2019 from "./2019-2020-leaders/David.jpg";
import Deric2019 from "./2019-2020-leaders/Deric K.png";
import Diego2019 from "./2019-2020-leaders/Diego F.png";
import Elton2019 from "./2019-2020-leaders/Elton M.png";
import George2019 from "./2019-2020-leaders/George C.png";
import GeovannyH2019 from "./2019-2020-leaders/Geovanny H.png";
import GioC2019 from "./2019-2020-leaders/Giovanni C.png";
import Kalvin2019 from "./2019-2020-leaders/Kalvin M.png";
import Srivats2019 from "./2019-2020-leaders/Srivats V.png";
import Grover2019 from "./2019-2020-leaders/Grover.JPG";
import Luis2019 from "./2019-2020-leaders/Luis.JPG";
import Ralph2019 from "./2019-2020-leaders/Ralph.jpg";
import Kevin2019 from "./2019-2020-leaders/Kevin F.JPG";
import Randy2019 from "./2019-2020-leaders/Randy Moss Advisor-2.jpg";
import Wilson2019 from "./2019-2020-leaders/wilson.jpg";
import Vacant from "./2019-2020-leaders/Vacant.png";

// 2018-19 leaders
import Erving2018 from "./2018-2019-leaders/erving.jpg"
import Andrew2018 from "./2018-2019-leaders/andrew.jpg"
import Brian2018 from "./2018-2019-leaders/brian.jpg"
import DavidS2018 from "./2018-2019-leaders/david.jpg"
import Deric2018 from "./2018-2019-leaders/deric.jpg"
import Diego2018 from "./2018-2019-leaders/diego.jpg"
import Emily2018 from "./2018-2019-leaders/emily.jpg"
import GioG2018 from "./2018-2019-leaders/gio.jpg"
import GioC2018 from "./2018-2019-leaders/Giovanni.jpg"
import Ingelbert2018 from "./2018-2019-leaders/ingelbert.jpg"
import Kalvin2018 from "./2018-2019-leaders/kalvin.jpg"
import GeovannyH2018 from "./2018-2019-leaders/LittleGeo.jpg"
import Pranil2018 from "./2018-2019-leaders/pranil.jpg"
import Ryan2018 from "./2018-2019-leaders/ryan.jpg"
import Srivats2018 from "./2018-2019-leaders/srivats.jpg"
import Wilson2018 from "./2018-2019-leaders/wilson.jpg"

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
                    <Nav.Link className="project-nav-link anchor-white" eventKey="first">2020-2021</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="project-nav-link anchor-white" eventKey="second">2019-2020</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="project-nav-link anchor-white" eventKey="third">2018-2019</Nav.Link>
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
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Cristian2020} alt="Cristian 2020"></img>
                          <div className="officer-info">
                            <h2>Cristian<br/>Corrales</h2>President
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Srivats2020} alt="Srivats 2020"></img>
                          <div className="officer-info">
                            <h2>Srivats<br/>Venkataraman</h2>Vice President
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic" src={Nidhi2020} alt="Nidhi 2020"></img>
                          <div className="officer-info">
                            <h2>Nidhi<br/>Lakshmanan</h2>Treasurer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic" src={Elton2020} alt="Elton 2020"></img>
                          <div className="officer-info">
                            <h2 className="name">Elton<br/>Lin</h2>Secretary
                          </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Rita2020} alt="Rita 2020"></img>
                          <div className="officer-info">
                            <h2>Rita<br/>Sanchez</h2>VP of Internal Affairs
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Grover2020} alt="Grover 2020"></img>
                          <div className="officer-info">
                            <h2>John<br/>Grover</h2>VP of External Affairs
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Luis2020} alt="Luis 2020"></img>
                          <div className="officer-info">
                            <h2>Luis<br/>Gonzalez</h2>Project Manager
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={DavidT2020} alt="David T 2020"></img>
                          <div className="officer-info">
                            <h2>David<br/>Tang</h2>Webmaster
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Grace2020} alt="Grace 2020"></img>
                          <div className="officer-info">
                            <h2>Grace<br/>Lin</h2>Executive Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Julio2020} alt="Julio 2020"></img>
                          <div className="officer-info">
                            <h2>Julio<br/>Santamaria</h2>Digital Media Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Alvin2020} alt="Alvin 2020"></img>
                          <div className="officer-info">
                            <h2>Alvin<br/>Lew</h2>Project Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Jorge2020} alt="Jorge 2020"></img>
                          <div className="officer-info">
                            <h2>Jorge<br/>Mata</h2>Project Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Anthony2020} alt="Anthony 2020"></img>
                          <div className="officer-info">
                            <h2>Anthony<br/>Viramontes</h2>Web Officer
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                      <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Tracy2020} alt="Tracy 2020"></img>
                          <div className="officer-info">
                            <h2>Tracy<br/>Troung</h2>Design Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={DavidM2020} alt="David M 2020"></img>
                          <div className="officer-info">
                            <h2>David<br/>Melendez</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Gregory2020} alt="Gregory 2020"></img>
                          <div className="officer-info">
                            <h2>Gregory<br/>Celestino</h2>Project Committee</div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Lillian2020} alt="Lillian 2020"></img>
                          <div className="officer-info">
                            <h2>Lillian<br/>Leung</h2>Project Committee
                            </div>
                        </div>

                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Omar2020} alt="Omar 2020"></img>
                          <div className="officer-info">
                            <h2>Omar<br/>Eclicerio</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Robert2020} alt="Robert 2020"></img>
                          <div className="officer-info">
                            <h2>Robert<br/>De La Costa</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Sameen2020} alt="Sameen 2020"></img>
                          <div className="officer-info">
                            <h2>Sameen<br/>Khan</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Adrian2020} alt="Adrian 2020"></img>
                          <div className="officer-info">
                            <h2>Adrian<br/>Salgado</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Daniel2020} alt="Daniel 2020"></img>
                          <div className="officer-info">
                            <h2>Daniel<br/>Ramirez</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ralph2020} alt="Ralph 2020"></img>
                          <div className="officer-info">
                            <h2>Ralph<br/>Belleca</h2>Web Committee
                            </div>
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders">ADVISORS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Randy2020} alt="Randy 2020"></img>
                          <div className="officer-info">
                            <h2>Randal<br/>Moss</h2>Faculty Advisor
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Wilson2020} alt="Wilson 2020"></img>
                          <div className="officer-info">
                            <h2>Wilson<br/>Thomas</h2>Advisor
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kalvin2020} alt="Kalvin 2020"></img>
                          <div className="officer-info">
                            <h2>Kalvin<br/>Mateo</h2>Advisor
                            </div>
                        </div>
                      </div>
                      <div className="space"></div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="row">
                        <div className="god-saver d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader">
                          ACM 2019-2020 BOARD
                          </h2>
                      </div>
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kalvin2019} alt="Kalvin 2019"></img>
                          <div className="officer-info">
                            <h2>Kalvin<br/>Mateo</h2>President
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Cristian2019} alt="Cristian 2019"></img>
                          <div className="officer-info">
                            <h2>Cristian<br/>Corrales</h2>Vice President
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GeovannyH2019} alt="Geovanny 2019"></img>
                          <div className="officer-info">
                            <h2>Geovanny<br/>Huerta</h2>Treasurer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Srivats2019} alt="Srivats 2019"></img>
                          <div className="officer-info">
                            <h2 className="name">Srivats<br/>Venkataraman</h2>Secretary
                          </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GioC2019} alt="Gio C 2019"></img>
                          <div className="officer-info">
                            <h2>Giovanni<br/>Castellanos</h2>VP of Internal Affairs
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant} alt="Vacant"></img>
                          <div className="officer-info">
                            <h2>Vacant </h2>VP of External Affairs
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Andrew2019} alt="Andrew 2019"></img>
                          <div className="officer-info">
                            <h2>Andrew<br/>Gonzalez</h2>Project Manager
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant} alt="Vacant"></img>
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
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Elton2019} alt="Elton 2019"></img>
                          <div className="officer-info">
                            <h2>Elton<br/>Lin</h2>Administrative Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Diego2019} alt="Diego 2019"></img>
                          <div className="officer-info">
                            <h2>Diego<br/>Flores</h2>Finance Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={DavidT2019} alt="David T 2019"></img>
                          <div className="officer-info">
                            <h2>David<br/>Tang</h2>Web Officer
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Deric2019} alt="Deric 2019"></img>
                          <div className="officer-info">
                            <h2>Deric<br/>Kwok</h2>General Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ayush2019} alt="Ayush 2019"></img>
                          <div className="officer-info">
                            <h2>Ayush<br/>Singh</h2>Outreach Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kevin2019} alt="Kevin 2019"></img>
                          <div className="officer-info">
                            <h2>Kevin<br/>Flores</h2>Outreach Committee</div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Grover2019} alt="Grover 2019"></img>
                          <div className="officer-info">
                            <h2>John<br/>Grover</h2>Project Committee
                            </div>
                        </div>

                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Luis2019} alt="Luis 2019"></img>
                          <div className="officer-info">
                            <h2>Luis<br/>Gonzalez</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={George2019} alt="George 2019"></img>
                          <div className="officer-info">
                            <h2>George<br/>Chan</h2>Web Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ralph2019} alt="Ralph 2019"></img>
                          <div className="officer-info">
                            <h2>Ralph<br/>Belleca</h2>Web Committee
                            </div>
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders">ADVISORS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Randy2019} alt="Randy 2019"></img>
                          <div className="officer-info">
                            <h2>Randal<br/>Moss</h2>Advisor
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Wilson2019} alt="Wilson 2019"></img>
                          <div className="officer-info">
                            <h2>Wilson<br/>Thomas</h2>Advisor
                            </div>
                        </div>
                      </div>
                      <div className="space"></div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="row">
                        <div className="god-saver d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader">
                          ACM 2018-2019 BOARD
                          </h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Wilson2018} alt="Wilson 2018"></img>
                          <div className="officer-info">
                            <h2>Wilson<br/>Thomas</h2>President
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Pranil2018} alt="Pranil 2018"></img>
                          <div className="officer-info">
                            <h2>Pranil<br/>Dahal</h2>Vice President
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={DavidS2018} alt="David S 2018"></img>
                          <div className="officer-info">
                            <h2>David<br/>San</h2>Treasurer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GeovannyH2018} alt="Geovanny H 2018"></img>
                          <div className="officer-info">
                            <h2>Geovanny<br/>Huerta</h2>Secretary
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GioG2018} alt="Gio G 2018"></img>
                          <div className="officer-info">
                            <h2>Giovanni<br/>Garcia</h2>VP of Internal Affairs
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant} alt="Vacant"></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>VP of External Affairs
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Brian2018} alt="Brian 2018"></img>
                          <div className="officer-info">
                            <h2>Brian<br/>Hernandez</h2>Project Manager
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant} alt="Vacant"></img>
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
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kalvin2018} alt="Kalvin 2018"></img>
                          <div className="officer-info">
                            <h2>Kalvin<br/>Mateo</h2>Administrative Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Diego2018} alt="Diego 2018"></img>
                          <div className="officer-info">
                            <h2>Diego<br/>Flores</h2>Finance Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GioC2018} alt="Gio C 2018"></img>
                          <div className="officer-info">
                            <h2>Giovanni<br/>Castellanos</h2>Digital Media Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Deric2018} alt="Deric 2018"></img>
                          <div className="officer-info">
                            <h2>Deric<br/>Kwok</h2>Project Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ryan2018} alt="Ryan 2018"></img>
                          <div className="officer-info">
                            <h2>Ryan<br/>Dunning</h2>Web/Networking Officer
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Emily2018} alt="Emily 2018"></img>
                          <div className="officer-info">
                            <h2>Emily<br/>Pascua</h2>Web/Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Srivats2018} alt="Srivats 2018"></img>
                          <div className="officer-info">
                            <h2>Srivats<br/>Venkataraman</h2>Web/Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ingelbert2018} alt="Ingelbert 2018"></img>
                          <div className="officer-info">
                            <h2>Ingelbert<br/>Figueroa</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Andrew2018} alt="Andrew 2018"></img>
                          <div className="officer-info">
                            <h2>Andrew<br/>Gonzalez</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Erving2018} alt="Erving 2018"></img>
                          <div className="officer-info">
                            <h2>Erving<br/>Lopez</h2>Project Committee
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
