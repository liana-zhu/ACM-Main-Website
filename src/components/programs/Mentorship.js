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

class Mentorship extends React.Component {
  render() {
    return (
      <div>
        {/*Video Link stored in firestore*/}
        {/* Commenting videos for now because there's not yet new ones
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
        */}
        <p>
          <h2>
            <span className="highlight-text">
              <b>About this program:</b>
            </span>
          </h2>
          <p className="aboutprogram">
            {/*Stored in firestore*/}
            If you feel that you are lacking professional skills, then this
            program is perfect for you! The Professional Development (PRO-DEV)
            program provides a series of workshops that teach valuable skills
            and resources that are crucial for a professional. Additionally, the
            program helps you to increase your opportunity in landing jobs and
            improves your financial status. By applying, you will have the
            opportunity to learn important tips from your ACM Leaders that are
            not taught in the typical classroom environment. Overall, this
            program will benefit you professionally by the time you graduate.
            <br />
            These workshops are open for{" "}
            <b>
              <u>all ACM members</u>
            </b>{" "}
            in all different levels (Freshmen, Sophomores, Juniors and Seniors)
          </p>

          {/* LIST OF WORKSHOPS/EVENTS  */}
          <div className="row workshop-container">
            <h1 className="program-description col-12">
              These are the following workshops:
            </h1>

            {/*Stored in firestore as list*/}
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
            <div className="skill-item2 col-lg-4 col-md-6 col-12">
              <div className="icon-box">
                <Mortarboard className="icon" />
                <b>Succeeding as an Undergrad</b>
              </div>
            </div>
            <div className="skill-item2 col-lg-4 col-md-6 col-12">
              <div className="icon-box">
                <CashCoin className="icon" />
                <b>Financial Management</b>
              </div>
            </div>
          </div>
          {/*end of skills list*/}
        </p>

        <div className="signup-section col-lg-6 col-md-9 col-12">
          {/*Stored in firestore*/}
          <p className="program-description">
            Make the most out of it by attending all workshops!
          </p>

          {/*Stored in firestore*/}
          <img
            src={require("./pictures/spring2023-pro-dev.png")}
            className="programs-poster rounded m-auto d-block"
            alt="mentorship flyer"
          ></img>

          {/*Join button will be displayed if link in firestore exists*/}
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
      </div>
    );
  }
}

export default Mentorship;
