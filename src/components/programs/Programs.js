import React from "react";
import { useState } from "react";
import firebase from "../professional-events/firebaseConfig.js";
import {
  Mortarboard,
  Search,
  PeopleFill,
  FileEarmarkTextFill,
  CashCoin,
} from "react-bootstrap-icons";
import {
  Row,
  Col,
  Tab,
  Nav,
  Container,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import ModalImage from "./ModalImage";
import "bootstrap/dist/css/bootstrap.css";
import "./Programs.css";
import Mentorship from "./Mentorship";
import flyerS2021 from "./pictures/spring2021-mentorship-flyer.png";

/* Updating the Mentorship page:
  - Update schoolYears array
  - Add new mentorship section
  - update the flyer image
*/

//These are list of semesters that has mentorship programs
/*Step 1: If there's a new program, insert the new semester year
  at the very top wtih this format -> ["first", *Season* *Year*]
  Step 2: Update the following ordinals of older semesters
*/
const schoolYears = [
  ["first", "Spring 2023"],
  ["second", "Fall 2022"],
  ["third", "Fall 2021"],
  ["fourth", "Spring 2021"],
  ["fifth", "Fall 2020"],
  ["sixth", "Spring 2020"],
  ["seventh", "Fall 2019"],
];

class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMentorship1: false,
      showMentorship2: false,
      showTutoring: false,
      currentSem: schoolYears[0][1],
    };
  }

  changeYear = (sem) => {
    this.setState({ currentSem: sem });
  };
  state = {
    mentorship: null,
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection("mentorship")
      .get()
      .then((snapshot) => {
        const events = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          events.push(data);
        });
        this.setState({ mentorship: events });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="programs-body">
        <div className="mentor-title-text">
          <p>Interested in improving?</p>
          <p>Participate in our PRO-DEV Workshops!</p>
        </div>
        <div className="mentorship-title-card"></div>

        {/* 
                Remember to update dates in the disclaimer: 
                1. Mentorship program signups open
                2. Signup deadline 
                */}

        <div className="disclaimer-body">
          <h3 className="disclaimer_header">
            <b>Disclaimers...</b>
          </h3>
          <span className="disclaimer">
            <b>
              1. You must be a member of ACM to participate in the workshops! If
              you are not a member, you will not be allowed in.
            </b>
          </span>
          <br />
          <span className="disclaimer">
            <b>
              2. All Workshop signups will open on (this date) and will close (that
              date).
            </b>
          </span>
        </div>

        <div className="videoWrapper">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gCGZ_U_9jeY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <br></br>
        <div className="card programs-card">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Col>
              <Col sm={12}>
                <DropdownButton
                  title={this.state.currentSem}
                  id="dropdown-button"
                  menuVariant="dark"
                  className="ms-2"
                >
                  {schoolYears.map((year) => (
                    <Dropdown.Item
                      eventKey={year[0]}
                      onClick={(e) => this.changeYear(e.target.textContent)}
                      className="item-dropdown"
                    >
                      {year[1]}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
              <Col sm={12} className="programs-tab-container">
                <Tab.Content className="programs-tab-content">
                  <Tab.Pane eventKey="first">
                    <Tab.Container defaultActiveKey="S2023mentorship">
                      {/* Most recent mentorship program goes under this block of comment
                                    Steps:
                                    1. Copy a <Tab.Pane> from under this block of comment.
                                    2. Paste it beneath this block of comment.
                                    3. Modify it with the most recent mentorship program flyer and other information 
                                    (You can find it from the Mentorship.js file)

                                    */}
                      <Tab.Content className="programs-tab-content">
                        <Tab.Pane eventKey="S2023mentorship">
                            <p>
                              <h2>
                                <span className="highlight-text">
                                  <b>About this program:</b>
                                </span>
                              </h2>
                              <p className="aboutprogram">
                                If you feel like lacking professional skills,
                                then this program is perfect for you! The
                                Professional Development (PRO-DEV) program
                                provides a series of workshops that teaches
                                valuable skills and knowledge that are crucial
                                as a professional. Such topics include <u>
                                building a resume, applying for internships,
                                self-management</u>
                                , and many more! By applying, you will have the
                                opportunity to learn from your ACM leaders, and
                                to benefit yourself professionally by the time
                                you graduate.
                                <br />
                                These workshops is open for{" "}
                                <u>all ACM members</u> in all different levels
                                (Freshmen, Sophomore, Junior, Seniors)
                              </p>

                              {/* LIST OF WORKSHOPS/EVENTS  */}
                              <div className="row workshop-container">
                                <h1 className="program-description col-12">
                                  These are the following workshops:
                                </h1>
                                <div className="skill-item col-lg-4 col-md-6 col-12">
                                  <div className="icon-box">
                                    <FileEarmarkTextFill className="icon" />
                                    <b>Building your Resume/LinkedIn</b>
                                  </div>
                                </div>
                                <div className="skill-item col-lg-4 col-md-6 col-12">
                                  <div className="icon-box">
                                    <Search className="icon" />
                                    <b>Internship/Job Hunting</b>
                                  </div>
                                </div>
                                <div className="skill-item col-lg-4 col-md-6 col-12">
                                  <div className="icon-box">
                                    <PeopleFill className="icon" />
                                    <b>Interviews</b>
                                  </div>
                                </div>
                                <div className="skill-item col-lg-4 col-md-6 col-12">
                                  <div className="icon-box">
                                    <Mortarboard className="icon" />
                                    <b>Succeeding as an Undergrad</b>
                                  </div>
                                </div>
                                <div className="skill-item col-lg-4 col-md-6 col-12">
                                  <div className="icon-box">
                                    <CashCoin className="icon" />
                                    <b>Financial Management</b>
                                  </div>
                                </div>
                              </div>
                            </p>

                            <div className="signup-section col-lg-6 col-md-9 col-12">
                              <p className="program-description">
                                Make sure to keep track of the dedicated dates for each workshop.
                              </p>
                              {/* use for now to display image */}
                              <img
                                src={require("./pictures/spring2023-pro-dev.png")}
                                className="programs-poster rounded m-auto d-block"
                                alt="mentorship flyer"
                              ></img>
                              {/* {
                              this.state.mentorshipF22 &&
                              this.state.mentorshipF22.map(mentorshipF22 => {
                                return (
                                  <img src={mentorshipF22.imgUrl} className="img-fluid programs-poster" alt="mentorship flyer"></img>
                                )
                              })
                            } */}

                            {/* Commenting JOIN BUTTON because there's no PRO-DEV sign-ups
                            <Tab.Content className="programs-tab-content poster">
                              <Tab.Pane eventKey="menteeRole"></Tab.Pane>
                            </Tab.Content>
                            <Button
                              variant="success"
                              className = "join-button"
                              size="lg"
                              href="https://docs.google.com/forms/d/e/1FAIpQLSf6apdzV5q2jrsJZCbsfV-SGx2cZimQyU3D60N3AUvHjhW40g/viewform"
                            >
                              Join Now!
                            </Button>
                            <br />
                            */}
                            
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Tab.Container defaultActiveKey="F2022mentorship">
                      {/* Most recent mentorship program goes under this block of comment
                                    Steps:
                                    1. Copy a <Tab.Pane> from under this block of comment.
                                    2. Paste it beneath this block of comment.
                                    3. Modify it with the most recent mentorship program flyer and other information 
                                    (You can find it from the Mentorship.js file)

                                    */}
                      <Tab.Content className="programs-tab-content">
                        <Tab.Pane eventKey="F2022mentorship">
                          <div>
                            <p>
                              <h2>
                                <span className="highlight-text">
                                  <b>Program Description</b>
                                </span>
                              </h2>
                              <p>
                                In this world, many people may find it difficult
                                to transition into a stable and independent
                                life. Thankfully, if you are one of these
                                people, you're not alone. By becoming a mentee
                                in this program, a mentor can show you the ropes
                                to not only help you on your way to landing that
                                six-figure job, but also help you navigate the
                                pothole-filled road we call life.
                              </p>
                              <p className="program-description">
                                In this program, mentees will:
                              </p>
                              <p>
                                ❖
                                <span className="highlight-text point">
                                  <b>Time Management</b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>
                                    Building your Resume, Cover Letter, Thank
                                    You Letter
                                  </b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>Behavioral and Technical Interviews</b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>
                                    Creating professional social media accounts
                                    (Handshake, LinkedIn)
                                  </b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>
                                    Technical Practices in the CS field (Agile,
                                    Waterfall)
                                  </b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>Conferences</b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>Finances</b>
                                </span>
                                <br />
                              </p>
                              <p className="program-description">
                                The deadline to apply is Wednesday, August 31,
                                2022. Join our mentorship program today before
                                it's too late!
                              </p>
                            </p>
                            {/* use for now to display image */}
                            <img
                              src={require("./pictures/fall2022-mentorship-flyer.png")}
                              className="programs-poster"
                              alt="mentorship flyer"
                            ></img>
                            {/* {
                              this.state.mentorshipF22 &&
                              this.state.mentorshipF22.map(mentorshipF22 => {
                                return (
                                  <img src={mentorshipF22.imgUrl} className="img-fluid programs-poster" alt="mentorship flyer"></img>
                                )
                              })
                            } */}
                            <Tab.Content className="programs-tab-content poster">
                              <Tab.Pane eventKey="menteeRole"></Tab.Pane>
                            </Tab.Content>
                            {/*<Button
                              variant="success"
                              size="lg"
                              href="https://docs.google.com/forms/d/e/1FAIpQLSf6apdzV5q2jrsJZCbsfV-SGx2cZimQyU3D60N3AUvHjhW40g/viewform"
                            >
                              Join Now!
                          </Button>*/}
                            <br />
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Tab.Container defaultActiveKey="F2021mentorship">
                      <Tab.Content className="programs-tab-content">
                        <Tab.Pane eventKey="F2021mentorship">
                          <div>
                            <Container>
                              <div class="row justify-content-start space">
                                <div class="col-xs-1 col-sm-6 col-md-5 col-lg-4">
                                  <iframe
                                    title="intro video"
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/zIB8AygK-TA"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                  ></iframe>
                                </div>
                                <div class="col-xs-1 col-sm-3 col-md-4 col-lg-5">
                                  <iframe
                                    title="intro video"
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/QD__JkLepQk"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                  ></iframe>
                                </div>
                              </div>
                            </Container>
                            <p>
                              <h2>
                                <span className="highlight-text">
                                  <b>Program Description</b>
                                </span>
                              </h2>
                              <p>
                                In this world, many people may find it difficult
                                to transition into a stable and independent
                                life. Thankfully, if you are one of these
                                people, you're not alone. By becoming a mentee
                                in this program, a mentor can show you the ropes
                                to not only help you on your way to landing that
                                six-figure job, but also help you navigate the
                                pothole-filled road we call life.
                              </p>
                              <p className="program-description">
                                In this program, mentees will:
                              </p>
                              <p>
                                ❖
                                <span className="highlight-text point">
                                  <b>Time Management</b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>
                                    Building your Resume, Cover Letter, Thank
                                    You Letter
                                  </b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>Behavioral and Technical Interviews</b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>
                                    Creating professional social media accounts
                                    (Handshake, LinkedIn)
                                  </b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>
                                    Technical Practices in the CS field (Agile,
                                    Waterfall)
                                  </b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>Conferences</b>
                                </span>
                                <br />❖
                                <span className="highlight-text point">
                                  <b>Finances</b>
                                </span>
                                <br />
                              </p>
                              <p className="program-description">
                                The deadline to apply is Tuesday, August 31,
                                2021. Join our mentorship program today before
                                it's too late!
                              </p>
                            </p>
                            {this.state.mentorship &&
                              this.state.mentorship.map((mentorship) => {
                                return (
                                  <img
                                    src={mentorship.imgUrl}
                                    className="img-fluid programs-poster"
                                    alt="mentorship flyer"
                                  ></img>
                                );
                              })}
                            <Tab.Content className="programs-tab-content poster">
                              <Tab.Pane eventKey="menteeRole"></Tab.Pane>
                            </Tab.Content>
                            {/* <Button variant="success" size="lg" href="https://forms.gle/m4XumDAfwPWtkAYv9">Join Now!</Button><br /> */}
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Tab.Container defaultActiveKey="S2021mentorship">
                      <Tab.Content className="programs-tab-content">
                        <Tab.Pane eventKey="S2021mentorship">
                          <Mentorship flyer={flyerS2021} />
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <Tab.Container defaultActiveKey="F2020mentorship">
                      <Tab.Content className="programs-tab-content">
                        <Tab.Pane eventKey="F2020mentorship">
                          {/* <iframe title="mentorship video" width="560" height="315" src="https://www.youtube.com/embed/zIB8AygK-TA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                          {/* <br></br> */}
                          <h2>
                            <span className="highlight-text">
                              <b>Program Description</b>
                            </span>
                          </h2>
                          Students in the mentorship program will gain
                          professional and academic skills. They will learn to
                          manage their time and tackle intimidating assignments.
                          They will have opportunities to improve their public
                          speaking skills, which will help them gain confidence.
                          They will be provided tips on internship hunting and
                          resume/interview preparation. When students start
                          earning money, they must manage their finances. As a
                          result, it will be important for them to learn about
                          financial responsibility and investing tips.<br></br>
                          <br></br>
                          <img
                            src={require("./pictures/fall2020-mentorship-flyer.png")}
                            className="programs-poster"
                            alt="mentorship flyer"
                          ></img>
                          {/* <Row>
                                                        <Col sm={4}>
                                                            <Image src={require("./pictures/spring2020-mentorship-flyer.png")} rounded />
                                                        </Col>
                                                    </Row><br></br><br></br> */}
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <Tab.Container defaultActiveKey="S2020mentorship">
                      <Tab.Content className="programs-tab-content">
                        <Tab.Pane eventKey="S2020mentorship">
                          <h2>
                            <span className="highlight-text">
                              <b>Program Description</b>
                            </span>
                          </h2>
                          Students in the mentorship program will gain
                          professional and academic skills. They will learn to
                          manage their time and tackle intimidating assignments.
                          They will have opportunities to improve their public
                          speaking skills, which will help them gain confidence.
                          They will be provided tips on internship hunting and
                          resume/interview preparation. When students start
                          earning money, they must manage their finances. As a
                          result, it will be important for them to learn about
                          financial responsibility and investing tips.<br></br>
                          <br></br>
                          <img
                            src={require("./pictures/spring2020-mentorship-flyer.png")}
                            className="programs-poster"
                            alt="mentorship flyer"
                          ></img>
                          {/* <Row>
                                                        <Col sm={4}>
                                                            <Image src={require("./pictures/spring2020-mentorship-flyer.png")} rounded />
                                                        </Col>
                                                    </Row><br></br><br></br> */}
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <Tab.Container defaultActiveKey="F2019mentorship">
                      <Nav className="programs-tab-label" variant="pills">
                        <Nav.Item>
                          <Nav.Link
                            className="programs-nav-link-tab anchor-white"
                            eventKey="F2019mentorship"
                          >
                            Mentorship
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            className="programs-nav-link-tab anchor-white"
                            eventKey="F2019tutoring"
                          >
                            Tutoring
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="programs-tab-content">
                        <Tab.Pane eventKey="F2019mentorship">
                          <br></br>
                          <h2>
                            <span className="highlight-text">
                              <b>Program Description</b>
                            </span>
                          </h2>
                          Students in the mentorship program will gain
                          professional and academic skills. They will learn to
                          manage their time, stay organized, and tackle
                          intimidating assignments. They will also gain
                          confidence, stay motivated, and learn to give advice.
                          <br></br>
                          <br></br>
                          <img
                            src={require("./pictures/fall2019-mentorship-flyer.png")}
                            className="img-fluid programs-poster"
                            alt="mentorship flyer"
                          ></img>
                          {/* <Row>
                                                        <Col sm={4}>
                                                            <Image src={require("./pictures/fall2019-mentorship-flyer.png")} rounded />
                                                        </Col>
                                                    </Row> */}
                          <br></br>
                          <h2>
                            <span className="highlight-text">
                              Mentors and Mentees &amp; Winners of Mentorship
                              Competition
                            </span>
                          </h2>
                          <Container>
                            <img
                              src={require("./pictures/fall2019-mentors-mentees.jpg")}
                              alt="Mentors and Mentees"
                              onClick={() =>
                                this.setState({ showMentorship1: true })
                              }
                              className="img-fluid programs-images"
                            ></img>
                            <img
                              src={require("./pictures/fall2019-best-mentors-mentees.jpg")}
                              alt="Best Mentors and Mentees"
                              onClick={() =>
                                this.setState({ showMentorship2: true })
                              }
                              className="img-fluid programs-images"
                            ></img>
                            <ModalImage
                              image="./pictures/fall2019-mentors-mentees.jpg"
                              show={this.state.showMentorship1}
                              onHide={() =>
                                this.setState({ showMentorship1: false })
                              }
                            />
                            <ModalImage
                              image="./pictures/fall2019-best-mentors-mentees.jpg"
                              show={this.state.showMentorship2}
                              onHide={() =>
                                this.setState({ showMentorship2: false })
                              }
                            />
                          </Container>
                        </Tab.Pane>
                      </Tab.Content>
                      <Tab.Content className="programs-tab-content">
                        <Tab.Pane eventKey="F2019tutoring">
                          <h2>
                            <span className="highlight-text">
                              <b>Program Description</b>
                            </span>
                          </h2>
                          Tutors assist students in their introductory computer
                          science and math classes. We provide additional
                          insight on concepts that students are learning in
                          their classes and helpful tips on assignments.
                          Academic success is very important!<br></br>
                          <br></br>
                          <h2>
                            <span className="highlight-text">Tutoring</span>
                          </h2>
                          <Container>
                            <img
                              src={require("./pictures/tutoring.jpg")}
                              alt="tutoring 2018"
                              onClick={() =>
                                this.setState({ showTutoring: true })
                              }
                              className="programs-images"
                            ></img>
                            <ModalImage
                              image="./pictures/tutoring.jpg"
                              show={this.state.showTutoring}
                              onHide={() =>
                                this.setState({ showTutoring: false })
                              }
                            />
                          </Container>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Col>
          </Tab.Container>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Programs;
