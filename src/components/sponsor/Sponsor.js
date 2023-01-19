import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./sponsor.css";
import sponsorPamphlet from "./images/Sponsorship-Packet-2022-2023.pdf";

class Sponsors extends React.Component {
  state = { isHovered: false };

  handleHover = () => {
    this.setState({ isHovered: !this.state.isHovered });
  };

  render() {
    const { isHovered } = this.state;

    return (
      <div>
        <div>
          <div className="sponsors-text">
            <p>Sponsors</p>
          </div>
          <div className="sponsors-card"></div>
        </div>
        {/* <div className="sponsors-border"></div> */}

        <Jumbotron>
          <div>
            <p className="sponsors-header">Sponsorship Tiers</p>
            <p className="sponsors-subheader">
              Sponsor ACM to get these benefits!
            </p>
            {/* logo placements */}
            {/* <p className="text-center">*insert logo*</p>
                        <p className="text-center">*insert logo*</p>
                        <p className="text-center">*insert logo*</p>
                        <p className="text-center">*insert logo*</p> */}
          </div>

          <div className="podium-tier">
            <Container className="podium-body">
              <Row className="podium-row">
                <AnimationOnScroll
                  className="scroll-fade"
                  animateIn="animate__slideInUp"
                  duration=".5"
                  animateOnce="true"
                  animatePreScroll="false"
                >
                  <Col className="podium-col" xs={2} md={1}>
                    <div
                      id="gold-rectangle"
                      onMouseEnter={() =>
                        this.setState({
                          hoverColorGold: "#b6a15e",
                          hoverColorSilver: "#b6a15e",
                          hoverColorBronze: "#b6a15e",
                        })
                      }
                      onMouseLeave={() =>
                        this.setState({
                          hoverColorGold: "#494949",
                          hoverColorSilver: "#494949",
                          hoverColorBronze: "#494949",
                        })
                      }
                    >
                      GOLD
                    </div>
                  </Col>
                </AnimationOnScroll>

                <AnimationOnScroll
                  className="scroll-fade"
                  animateIn="animate__slideInUp"
                  duration=".8"
                  animateOnce="true"
                  animatePreScroll="false"
                >
                  <Col className="podium-col" xs={2} md={1}>
                    <div
                      id="silver-rectangle"
                      onMouseEnter={() =>
                        this.setState({
                          hoverColorSilver: "#a5a5a5",
                          hoverColorBronze: "#a5a5a5",
                        })
                      }
                      onMouseLeave={() =>
                        this.setState({
                          hoverColorSilver: "#494949",
                          hoverColorBronze: "#494949",
                        })
                      }
                    >
                      SILVER
                    </div>
                  </Col>
                </AnimationOnScroll>

                <AnimationOnScroll
                  className="scroll-fade"
                  animateIn="animate__slideInUp"
                  duration="1"
                  animateOnce="true"
                  animatePreScroll="true"
                >
                  <Col className="podium-col" xs={2} md={1}>
                    <div
                      id="bronze-rectangle"
                      onMouseEnter={() =>
                        this.setState({ hoverColorBronze: "#b79153" })
                      }
                      onMouseLeave={() =>
                        this.setState({ hoverColorBronze: "#494949" })
                      }
                    >
                      BRONZE
                    </div>
                  </Col>
                </AnimationOnScroll>
                <Col xs={6} sm={5} md={4}>
                  <ul className="benefit-group">
                    <li
                      className="benefit-group-item"
                      style={{ backgroundColor: this.state.hoverColorGold }}
                    >
                      Exclusive ACM Merchandise
                    </li>
                    <li
                      className="benefit-group-item"
                      style={{ backgroundColor: this.state.hoverColorGold }}
                    >
                      Host Company Workshops
                    </li>
                    <li
                      className="benefit-group-item"
                      style={{ backgroundColor: this.state.hoverColorGold }}
                    >
                      Product Promotion during Events/Seminars
                    </li>
                    <li
                      className="benefit-group-item"
                      style={{ backgroundColor: this.state.hoverColorGold }}
                    >
                      Logo on event flyers
                    </li>
                    <li
                      className="benefit-group-item"
                      style={{ backgroundColor: this.state.hoverColorSilver }}
                    >
                      Semester Kickoff Event
                    </li>
                    <li
                      className="benefit-group-item"
                      style={{ backgroundColor: this.state.hoverColorSilver }}
                    >
                      Social Media Advertisement
                    </li>
                    <li
                      className="benefit-group-item"
                      style={{ backgroundColor: this.state.hoverColorBronze }}
                    >
                      Movie Voucher Advertisement
                    </li>
                    <li
                      className="benefit-group-item"
                      style={{ backgroundColor: this.state.hoverColorBronze }}
                    >
                      Website Advertisement
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="bottom-section mx-auto text-center">
            <div className="file-header">Sponsor Pamphlet</div>
            <div className="file-container d-flex justify-content-center ">
              <iframe
                className="sponsor-file"
                src={`${sponsorPamphlet}#view=fitH`}
                title="Sponsor Packet"
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Sponsors;
