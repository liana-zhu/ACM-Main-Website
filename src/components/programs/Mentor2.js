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
import flyerS2021 from "./pictures/spring2021-mentorship-flyer.png";

class Mentor2 extends React.Component {
  render() {
    return (
      <div>
        <p>
          <h2>
            <span className="highlight-text">
              <b>Program Description</b>
            </span>
          </h2>
          <p>
            In this world, many people may find it difficult to transition into
            a stable and independent life. Thankfully, if you are one of these
            people, you're not alone. By becoming a mentee in this program, a
            mentor can show you the ropes to not only help you on your way to
            landing that six-figure job, but also help you navigate the
            pothole-filled road we call life.
          </p>
          <p className="program-description">In this program, mentees will:</p>
          <p>
            ❖
            <span className="highlight-text point">
              <b>Time Management</b>
            </span>
            <br />❖
            <span className="highlight-text point">
              <b>Building your Resume, Cover Letter, Thank You Letter</b>
            </span>
            <br />❖
            <span className="highlight-text point">
              <b>Behavioral and Technical Interviews</b>
            </span>
            <br />❖
            <span className="highlight-text point">
              <b>
                Creating professional social media accounts (Handshake,
                LinkedIn)
              </b>
            </span>
            <br />❖
            <span className="highlight-text point">
              <b>Technical Practices in the CS field (Agile, Waterfall)</b>
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
            The deadline to apply is Wednesday, August 31, 2022. Join our
            mentorship program today before it's too late!
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
    );
  }
}

export default Mentor2;
