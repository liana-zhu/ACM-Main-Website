import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Cristian2020 from "./2020-2021-leaders/Cristian.jpg";
import Srivats2020 from "./2020-2021-leaders/Srivats.jpg";
import Nidhi from "./2020-2021-leaders/Nidhi.jpg";
import Elton2020 from "./2020-2021-leaders/Elton.jpg";
import Rita from "./2020-2021-leaders/Rita.jpg";
import Grover2020 from "./2020-2021-leaders/Grover.jpg";
import Luis2020 from "./2020-2021-leaders/Luis.jpg";
import David2020 from "./2020-2021-leaders/David.jpg";
import Grace from "./2020-2021-leaders/Grace.jpg";
import Alvin from "./2020-2021-leaders/Alvin.jpg";
import Jorge from "./2020-2021-leaders/Jorge.jpg";
import Anthony from "./2020-2021-leaders/Anthony.jpg";
import Adrian from "./2020-2021-leaders/Adrian.jpg";
import DavidM from "./2020-2021-leaders/DavidM.jpg";
import Gregory from "./2020-2021-leaders/Gregory.jpg";
import Lillian from "./2020-2021-leaders/Lillian.jpg";
import Omar from "./2020-2021-leaders/Omar.jpg";
import Ralph2020 from "./2020-2021-leaders/Ralph.jpg";
import Robert from "./2020-2021-leaders/Robert.jpg";
import Sameen from "./2020-2021-leaders/Sameen.jpg";
import Tracy from "./2020-2021-leaders/Tracy.jpg";

import Andrew2019 from "./2019-2020-leaders/Andrew G.png";
import Ayush from "./2019-2020-leaders/Ayush.png";
import Cristian from "./2019-2020-leaders/Cristian C.png";
import DavidT from "./2019-2020-leaders/David.jpg";
import Deric2019 from "./2019-2020-leaders/Deric K.png";
import Diego2019 from "./2019-2020-leaders/Diego F.png";
import Elton from "./2019-2020-leaders/Elton M.png";
import George from "./2019-2020-leaders/George C.png";
import GeovannyH2019 from "./2019-2020-leaders/Geovanny H.png";
import GioC2019 from "./2019-2020-leaders/Giovanni C.png";
import Kalvin2019 from "./2019-2020-leaders/Kalvin M.png";
import Randy from "./2019-2020-leaders/Randy Moss Advisor-2.jpg";
import Srivats2019 from "./2019-2020-leaders/Srivats V.png";
import Grover from "./2019-2020-leaders/Grover.JPG";
import Luis from "./2019-2020-leaders/Luis.JPG";
import Ralph from "./2019-2020-leaders/Ralph.jpg";
import Kevin from "./2019-2020-leaders/Kevin F.JPG";
import Wilson2019 from "./2019-2020-leaders/wilson.jpg";
import Vacant from "./2019-2020-leaders/Vacant.png";

//Alexis is Erving
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

import { Row, Col, Tab, Nav } from 'react-bootstrap'
import Jumbotron from "react-bootstrap/Jumbotron";
import "./board.css";

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
                          <img className="image-cropper profile-pic " src={Cristian2020}></img>
                          <div className="officer-info">
                            <h2>Cristian<br/>Corrales</h2>President
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Srivats2020}></img>
                          <div className="officer-info">
                            <h2>Srivats<br/>Venkataraman</h2>Vice President
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={Nidhi}
                          ></img>
                          <div className="officer-info">
                            <h2>Nidhi<br/>Lakshmanan</h2>Treasurer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Elton2020}></img>
                          <div className="officer-info">
                            <h2 className="name">Elton<br/>Lin</h2>Secretary
                          </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={Rita}
                          ></img>
                          <div className="officer-info">
                            <h2>Rita<br/>Sanchez</h2>VP of Internal Affairs
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Grover2020}></img>
                          <div className="officer-info">
                            <h2>John<br/>Grover</h2>VP of External Affairs
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Luis2020}></img>
                          <div className="officer-info">
                            <h2>Luis<br/>Gonzalez</h2>Project Manager
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={David2020}></img>
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
                          <img className="image-cropper profile-pic " src={Grace}></img>
                          <div className="officer-info">
                            <h2>Grace<br/>Lin</h2>Executive Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Julio<br/>Santamaria</h2>Digital Media Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Alvin}></img>
                          <div className="officer-info">
                            <h2>Alvin<br/>Lew</h2>Project Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Jorge}></img>
                          <div className="officer-info">
                            <h2>Jorge<br/>Mata</h2>Project Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Anthony}></img>
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
                          <img className="image-cropper profile-pic " src={Tracy}></img>
                          <div className="officer-info">
                            <h2>Tracy<br/>Troung</h2>Design Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={DavidM}
                          ></img>
                          <div className="officer-info">
                            <h2>David<br/>Melendez</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Gregory}></img>
                          <div className="officer-info">
                            <h2>Gregory<br/>Celestino</h2>Project Committee</div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Lillian}></img>
                          <div className="officer-info">
                            <h2>Lillian<br/>Leung</h2>Project Committee
                            </div>
                        </div>

                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Omar}></img>
                          <div className="officer-info">
                            <h2>Omar<br/>Eclicerio</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Robert}></img>
                          <div className="officer-info">
                            <h2>Robert<br/>De La Costa</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Sameen}></img>
                          <div className="officer-info">
                            <h2>Sameen<br/>Khan</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Adrian}></img>
                          <div className="officer-info">
                            <h2>Adrian<br/>Salgado</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Daniel<br/>Ramirez</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ralph2020}></img>
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
                          <img className="image-cropper profile-pic " src={Randy}></img>
                          <div className="officer-info">
                            <h2>Randal<br/>Moss</h2>Faculty Advisor
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Wilson2019}></img>
                          <div className="officer-info">
                            <h2>Wilson<br/>Thomas</h2>Advisor
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kalvin2019}></img>
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
                          <img className="image-cropper profile-pic " src={Kalvin2019}></img>
                          <div className="officer-info">
                            <h2>Kalvin<br/>Mateo</h2>President
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Cristian}></img>
                          <div className="officer-info">
                            <h2>Cristian<br/>Corrales</h2>Vice President
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={GeovannyH2019}
                          ></img>
                          <div className="officer-info">
                            <h2>Geovanny<br/>Huerta</h2>Treasurer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Srivats2019}></img>
                          <div className="officer-info">
                            <h2 className="name">Srivats<br/>Venkataraman</h2>Secretary
                          </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={GioC2019}
                          ></img>
                          <div className="officer-info">
                            <h2>Giovanni<br/>Castellanos</h2>VP of Internal Affairs
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant </h2>VP of External Affairs
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Andrew2019}></img>
                          <div className="officer-info">
                            <h2>Andrew<br/>Gonzalez</h2>Project Manager
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
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Elton}></img>
                          <div className="officer-info">
                            <h2>Elton<br/>Lin</h2>Administrative Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Diego2019}></img>
                          <div className="officer-info">
                            <h2>Diego<br/>Flores</h2>Finance Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={DavidT}></img>
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
                          <img className="image-cropper profile-pic " src={Deric2019}></img>
                          <div className="officer-info">
                            <h2>Deric<br/>Kwok</h2>General Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={Ayush}
                          ></img>
                          <div className="officer-info">
                            <h2>Ayush<br/>Singh</h2>Outreach Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kevin}></img>
                          <div className="officer-info">
                            <h2>Kevin<br/>Flores</h2>Outreach Committee</div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Grover}></img>
                          <div className="officer-info">
                            <h2>John<br/>Grover</h2>Project Committee
                            </div>
                        </div>

                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Luis}></img>
                          <div className="officer-info">
                            <h2>Luis<br/>Gonzalez</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={George}></img>
                          <div className="officer-info">
                            <h2>George<br/>Chan</h2>Web Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ralph}></img>
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
                          <img className="image-cropper profile-pic " src={Randy}></img>
                          <div className="officer-info">
                            <h2>Randal<br/>Moss</h2>Advisor
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Wilson2019}></img>
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
                          <img className="image-cropper profile-pic " src={Wilson2018}></img>
                          <div className="officer-info">
                            <h2>Wilson<br/>Thomas</h2>President
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Pranil}></img>
                          <div className="officer-info">
                            <h2>Pranil<br/>Dahal</h2>Vice President
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={DavidS}
                          ></img>
                          <div className="officer-info">
                            <h2>David<br/>San</h2>Treasurer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GeovannyH2018}></img>
                          <div className="officer-info">
                            <h2>Geovanny<br/>Huerta</h2>Secretary
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={GioG2018}
                          ></img>
                          <div className="officer-info">
                            <h2>Giovanni<br/>Garcia</h2>VP of Internal Affairs
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Vacant}></img>
                          <div className="officer-info">
                            <h2>Vacant</h2>VP of External Affairs
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Brian}></img>
                          <div className="officer-info">
                            <h2>Brian<br/>Hernandez</h2>Project Manager
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
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Kalvin2018}></img>
                          <div className="officer-info">
                            <h2>Kalvin<br/>Mateo</h2>Administrative Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Diego2018}></img>
                          <div className="officer-info">
                            <h2>Diego<br/>Flores</h2>Finance Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={GioC2018}></img>
                          <div className="officer-info">
                            <h2>Giovanni<br/>Castellanos</h2>Digital Media Officer
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Deric2018}></img>
                          <div className="officer-info">
                            <h2>Deric<br/>Kwok</h2>Project Officer
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ryan}></img>
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
                          <img className="image-cropper profile-pic " src={Emily2018}></img>
                          <div className="officer-info">
                            <h2>Emily<br/>Pascua</h2>Web/Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img
                            className="image-cropper profile-pic "
                            src={Srivats2018}
                          ></img>
                          <div className="officer-info">
                            <h2>Srivats<br/>Venkataraman</h2>Web/Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Ingelbert2018}></img>
                          <div className="officer-info">
                            <h2>Ingelbert<br/>Figueroa</h2>Project Committee
                            </div>
                        </div>
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Andrew2018}></img>
                          <div className="officer-info">
                            <h2>Andrew<br/>Gonzalez</h2>Project Committee
                            </div>
                        </div>
                      </div>
                      <div className="row-leaders centered-leader">
                        <div className="col-leaders">
                          <img className="image-cropper profile-pic " src={Alexis}></img>
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
