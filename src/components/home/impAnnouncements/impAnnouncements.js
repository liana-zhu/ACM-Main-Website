import React, { Component } from "react";
import firebase from "../../professional-events/firebaseConfig.js";
import { Card, Button, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import "./impAnnouncements.scss";

class ImpAnnouncements extends Component {
  state = {
    upcomingEvent: null,
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection("upcomingEvents")
      .get()
      .then((snapshot) => {
        const events = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          events.push(data);
        });
        this.setState({ upcomingEvent: events });
      })
      .catch((error) => console.log(error));
  }

  render() {
    let eventPosters = [
      "./images/ACM-Spring2023-Scholarships.png",
      "./images/spring2023-pro-dev.png",
    ];

    let links = [
      'https://forms.gle/26x5NMDnrFE3jhn89',
      'https://forms.gle/hAjvNSbS47ghMxuE8',
    ];
    
    let upcomingPosters = [
      "./images/ACM-Spring2023-Elections.png",
    ];

    return (
      <section className="impAnnouncements-tease">
        <div className="content">
          <div className="title">Academic Year 2022-2023</div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6E9kewdhFvU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="description">
            <p>
              Communications will be done via email, Discord, and social media
            </p>
          </div>
          <br></br>
          <div className="card-row">
          <div className="card-1">
          <Row className="justify-content-center title">Upcoming Events</Row>
          <Row className="justify-content-center description-header">Don't miss out with these events! See our<br />calendar for more details.</Row>
          <Row className="justify-content-center event-grid">
            {/*temporary committed*/}
            {/*this.state.upcomingEvent &&
              this.state.upcomingEvent.map((upcomingEvents) => {
                return (
                  <Card
                    style={{ width: "24rem", padding: "10px", margin: "4em" }}
                  >
                    <center>
                      <img
                        style={{
                          height: "30rem",
                          padding: "10px",
                          // margin: "4em",
                        }}
                        src={upcomingEvents.imgUrl}
                        alt="Upcoming event"
                      />
                      {/* <p>Sign up starts: {upcomingEvents.signUpStart}</p>
                      <p>Sign up Deadline: {upcomingEvents.deadline}</p>
                      <Button
                        href={upcomingEvents.link}
                        style={{ backgroundColor: "#0A84FF" }}
                      >
                        RSVP
                      </Button>
                    </center>
                  </Card>
                );
              })}*/}
              <Card style={{ width: "24rem", padding: "10px" }}>
              <center>
                <Carousel infiniteLoop>
                    {upcomingPosters.map((value, index) => {
                        return (
                          <div>
                            <img
                              className="carousel-event-image"
                              src={require("" + value)}
                              alt="event"
                            />
                          </div>
                        );
                    })}
                  </Carousel>
              </center>
            </Card>
          </Row></div>
          <div className="card-2">
          <Row className="justify-content-center title">Featured Events</Row>
          <Row className="justify-content-center description">For Spring 2023, ACM will be offering <br />scholarships and professional workshops!</Row>
          <Row className="justify-content-center event-grid">
            <Card style={{ width: "24rem", padding: "10px" }}>
              <center>
                <Carousel infiniteLoop>
                    {eventPosters.map((value, index) => {
                        return (
                          <div>
                            <img
                              className="carousel-event-image"
                              src={require("" + value)}
                              alt="event"
                            />
                            <Button
                              href={links[index]}
                              style={{ backgroundColor: "#0A84FF" }}
                            >
                            Apply Now!
                            </Button>
                          </div>
                        );
                    })}
                  </Carousel>
              </center>
            </Card>
            </Row></div></div>
        </div>
      </section>
    );
  }
}

export default ImpAnnouncements;
