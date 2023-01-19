import React from "react";
import "./professional.css";
import firebase from "./firebaseConfig.js";
import { Card, Button, Image } from "react-bootstrap";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
/*
To install, go to project directory and run this on command line:
$ npm install react-multi-carousel --save
*/
//Imports for multi carousel
import "react-multi-carousel/lib/styles.css";

// This component won't hold a state for not but decided
// to make it into a Class component for now

class Professional extends React.Component {
  state = {
    semesterEvent: null,
    upcomingEvent: null,

    seeMore: false,
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection("semesterEvents")
      .get()
      .then((snapshot) => {
        const events = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          events.push(data);
        });
        this.setState({ semesterEvent: events });
      })
      .catch((error) => console.log(error));

    firebase
      .firestore()
      .collection("upcomingEvents")
      .get()
      .then((snapshot) => {
        const comingUpEvent = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          comingUpEvent.push(data);
        });
        this.setState({ upcomingEvent: comingUpEvent });
      })
      .catch((error) => console.log(error));
  }

  test() {
    alert("Show Modal!");
  }

  render() {
    return (
      <div className="events-container">
        <div>
          <div className="event-text">
            <p>Events</p>
          </div>
          <div className="event-card"></div>
        </div>

        <div className="upcoming-events mx-auto mb-5">
          <p className="text-center m-3 events-header">Upcoming Events</p>
          <div className="d-flex justify-content-center m-2">
            {this.state.upcomingEvent &&
              this.state.upcomingEvent.map((upcomingEvents) => {
                return (
                  <Card style={{ width: "24rem", padding: "10px" }}>
                    <center>
                      <img
                        style={{ height: "30rem", padding: "10px" }}
                        src={upcomingEvents.imgUrl}
                        alt="Upcoming event"
                      />
                      {/* <p>Sign up starts: {upcomingEvents.signUpStart}</p>
                      <p>Sign up Deadline: {upcomingEvents.deadline}</p>
                      <Button href={upcomingEvents.link}>RSVP</Button> */}
                    </center>
                  </Card>
                );
              })}
          </div>
        </div>
        <hr
          style={{
            color: "#ffffff",
            backgroundColor: "#ffffff",
            height: 0.5,
            borderColor: "#ffffff",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />

        <div className="semester-events mx-auto mb-5">
          <p className="text-center m-3 events-header">Semester Events</p>
          <div className="d-flex flex-wrap justify-content-center m-2">
            {this.state.semesterEvent &&
              this.state.semesterEvent.map((semesterEvents) => {
                return (
                  <Card style={{ width: "24rem", padding: "10px" }}>
                    <center>
                      <img
                        style={{ height: "30rem", padding: "10px" }}
                        src={semesterEvents.imgUrl}
                        alt="Current event"
                      />
                    </center>
                  </Card>
                );
              })}
          </div>
        </div>
        <hr
          style={{
            color: "#ffffff",
            backgroundColor: "#ffffff",
            height: 0.5,
            borderColor: "#ffffff",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />

        {/* <Row className="col-5">
            <div className="events-header">Past Events</div>
          </Row> */}
        {/* <Row className="justify-content-md-center"> */}
        <div className="past-events mx-auto">
          <p className="text-center events-header">Past Events</p>

          <div className="d-flex flex-wrap justify-content-center m-2">
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/google-ama-event-fall-2022.jpg")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/Hackathon-Flyer-Fall-2022.png")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/Mentorship-fall-2022.png")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/Black-Panther-Wakanda-Forever-fall-2022.png")}
              thumbnail
            />
          </div>
          <div
            className={
              this.state.seeMore
                ? "d-flex flex-wrap justify-content-center m-2"
                : "d-none"
            }
          >
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/github-workshop.PNG")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/mwd-jpl-spring-2019.png")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/spring-2019-resume-workshop.png")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/richard-fung-2018-google.png")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/internship.png")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/manny-sanchez-lockheed-spring-2019.png")}
              thumbnail
            />
            <Image
              style={{ width: "350px", height: "30rem", margin: "1em" }}
              src={require("./images/linkedin-handshake-workshop.png")}
              thumbnail
            />
          </div>
          <div className="justify-content-center text-center ">
            <button
              className={this.state.seeMore ? "d-none" : "see-more-button"}
              onClick={() => this.setState({ seeMore: true })}
            >
              See more
            </button>
            <button
              className={this.state.seeMore ? "see-more-button" : "d-none"}
              onClick={() => this.setState({ seeMore: false })}
            >
              See less
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
