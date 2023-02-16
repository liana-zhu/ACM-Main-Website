import React from "react";
import "./events.css";
import { Card, Button, Jumbotron, Container } from "react-bootstrap";
import Calendar from "../calendar/Calendar.js";
import EventSlide from "./EventSlide.js";

// This component won't hold a state for not but decided
// to make it into a Class component for now
class Events extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="events-container">
        <div id="calendar-header">
          <div className="events-text">
            <p>Never miss an Event</p>
          </div>
          <EventSlide />
        </div>
        <div className="blue-line"></div>

        {/* Using fluid="sm" keeps calendar centered */}
        <div className="large-screen-calendar">
          <Container>
            <div className="events-calendar-center">
              <Calendar />
            </div>
          </Container>
        </div>
        <div className="small-screen-calendar">
          <div className="events-calendar-center">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
