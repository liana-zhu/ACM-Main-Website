import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiamondFill } from "react-bootstrap-icons";
import "./Calendar.css";
import axios from "axios";
import config from "../../config";
import "bootstrap/dist/css/bootstrap.css";
import EventModal from "./EventModal";
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import NextEvents from "./NextEvents";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
      beforeDate: new Date(),
      afterDate: new Date(),
      events: {},

      //this state is a backup to currentDate
      //this is used in case currentDate is changed
      //currently accessed by Upcoming Events section
      today: new Date(), 
    };

    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
  }

  componentDidMount() {
    // Using year before to set timeMin in query
    const yearBefore = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    );
    let timeMin = this.ISODateString(yearBefore);
    axios
      .get(
        "https://www.googleapis.com/calendar/v3/calendars/acm.calstatela@gmail.com/events?singleEvents=true&orderBy=startTime&maxResults=2000&timeMin=" +
          timeMin +
          "&key=" +
          config.api_key
      )
      .then((res) => {
        const events = this.state.events; // Empty object at first

        /**
         * This is how I'm storing my events. Yes, I know there's
         * probably a better way to do this. It's 2:30am.
         *
         * {
         *      2019-01-01: {
         *            events: [events]
         *      },
         *      2019-02-02 {
         *            events: [events]
         *      }
         * }
         */

        for (let i = 0; i < res.data.items.length; i++) {
          let currentUTC = "";
          let previousUTC = "";

          // This handles whether the json object has "dateTime" or "date"
          if (res.data.items[i].start.hasOwnProperty("dateTime")) {
            currentUTC = res.data.items[i].start.dateTime.slice(0, 10);
          } else {
            // Else it has start.date
            currentUTC = res.data.items[i].start.date.slice(0, 10);
          }

          // Comparing currentUTC and previousUTC to see if the events
          // belong to the same month.
          if (i > 0) {
            if (res.data.items[i - 1].start.hasOwnProperty("dateTime")) {
              previousUTC = res.data.items[i - 1].start.dateTime.slice(0, 10);
            } else {
              previousUTC = res.data.items[i - 1].start.date.slice(0, 10);
            }
          }

          // If the same, then we can simply push onto list
          // If NOT the same, create key,value entry!
          if (currentUTC === previousUTC) {
            events[currentUTC].push(res.data.items[i]);
          } else {
            events[currentUTC] = [res.data.items[i]];
          }
        }

        this.setState({
          events: events,
        });
        this.setState({
          today: this.state.currentDate,
        });
      });
  }

  // Used to format date to the way Google API wants it
  ISODateString(d) {
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }

    return (
      d.getUTCFullYear() +
      "-" +
      pad(d.getUTCMonth() + 1) +
      "-" +
      pad(d.getUTCDate()) +
      "T" +
      pad(d.getUTCHours()) +
      ":" +
      pad(d.getUTCMinutes()) +
      ":" +
      pad(d.getUTCSeconds()) +
      "Z"
    );
  }

  /**
   * Using this to compare today's date to the current cell's date.
   * If they are equal, than we return true.
   */
  isCurrentDate(cellDayNumber) {
    const today = new Date(); // Yes, today
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    // Unfortunately, the Date above will also give me hour,minute,seconds
    // So I'm just going to recreate today's date without those additional things.
    const todayDate = new Date(year, month, day);

    const calendarYear = this.state.currentDate.getFullYear();
    const calendarMonth = this.state.currentDate.getMonth();

    const cellDate = new Date(calendarYear, calendarMonth, cellDayNumber);

    if (todayDate.getTime() === cellDate.getTime()) {
      return true;
    }

    return false;
  }

  incrementMonth() {
    const current = this.state.currentDate;
    const beforeCurrent = this.state.beforeDate;
    const afterCurrent = this.state.afterDate;
    const year = current.getFullYear();
    const beforeYear = beforeCurrent.getFullYear();
    const afterYear = afterCurrent.getFullYear();
    const month = current.getMonth();
    const beforeMonth = beforeCurrent.getMonth();
    const afterMonth = afterCurrent.getMonth();

    // If month is December, Javascript's Date object will
    // also update year!
    this.setState({
      currentDate: new Date(year, month + 1, 1),
      beforeDate: new Date(beforeYear, beforeMonth + 1,  1),
      afterDate: new Date(afterYear, afterMonth + 1 , 1),
    });
  }

  decrementMonth() {
    const current = this.state.currentDate;
    const beforeCurrent = this.state.beforeDate;
    const afterCurrent = this.state.afterDate;
    const year = current.getFullYear();
    const beforeYear = beforeCurrent.getFullYear();
    const afterYear = afterCurrent.getFullYear();
    const month = current.getMonth();
    const beforeMonth = beforeCurrent.getMonth();
    const afterMonth = afterCurrent.getMonth();


    this.setState({
      currentDate: new Date(year, month - 1, 1),
      beforeDate: new Date(beforeYear, beforeMonth - 1,  1),
      afterDate: new Date(afterYear, afterMonth - 1 , 1),
    });
  }

  // Good starting point for implementing the fade-in effect for
  // modal
  getEvents(cellNumber) {
    const calendarYear = this.state.currentDate.getFullYear();
    const calendarMonth = this.state.currentDate.getMonth();

    const cellDate = new Date(calendarYear, calendarMonth, cellNumber);

    let yearString = cellDate.getFullYear().toString();
    let monthString = (cellDate.getMonth() + 1).toString();
    let dayString = cellDate.getDate().toString();

    if (monthString.length === 1) {
      monthString = "0" + monthString;
    }

    if (dayString.length === 1) {
      dayString = "0" + dayString;
    }

    const events = this.state.events;

    //"2XXX-XX-XX"
    const cellKey = yearString + "-" + monthString + "-" + dayString;
    const eventsInDate = events[cellKey]; //returns list of events of that date

    // Create a list of EventModals & return them
    let listOfEventModals = [];

    //this loop adds an EventModal component if an event exists
    if (typeof eventsInDate !== "undefined") {
      for (let i = 0; i < eventsInDate.length; i++) {
        listOfEventModals.push(<EventModal event={eventsInDate[i]} displayType={"cell"}/>);
      }
    }

    return listOfEventModals;
  }

  render() {
    let calendar = [];

    let monthIndex = this.state.currentDate.getMonth();

    // Full Date (Fri Sep 13 2019 16:52:45 GMT-0700 (Pacific Daylight Time))
    let firstDayDate = new Date(
      this.state.currentDate.getFullYear(),
      this.state.currentDate.getMonth(),
      1
    );
    let lastDayDate = new Date(
      this.state.currentDate.getFullYear(),
      this.state.currentDate.getMonth() + 1,
      0
    );

    // Number of rows calendar needs, in some cases there are 6.
    let weekCount = 5;
    if (firstDayDate.getDay() > 4 && lastDayDate.getDate() > 30) {
      weekCount++;
    }

    let dayCount = 1;
    for (let i = 0; i < weekCount; i++) {
      // This will be reset with every loop so we dont have to worry
      // about indices when adding these elements to "calendar"
      let rowCells = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && firstDayDate.getDay() <= j) {
          // Class 'today' is added if cell contains user's current day
          rowCells.push(
            <div
              className={
                "cell" + (this.isCurrentDate(dayCount) ? " today" : "")
              }
            >
              <div className="day-number">{dayCount}</div>
              {this.getEvents(dayCount)}
            </div>
          );
          dayCount++;
        } else if (i === weekCount - 1 && lastDayDate.getDay() < j) {
          // This block takes care of the empty cells after last day of month
          // Do NOT increment dayCount
          rowCells.push(<div className="cell empty"></div>);
        } else if (i > 0) {
          rowCells.push(
            <div
              className={
                "cell" + (this.isCurrentDate(dayCount) ? " today" : "")
              }
            >
              <div className="day-number">{dayCount}</div>
              {this.getEvents(dayCount)}
            </div>
          );
          dayCount++;
        } else {
          // This block takes care of the empty cells before the 1st of month
          // Do NOT increment dayCount
          rowCells.push(<div className="cell empty"></div>);
        }
      }
      // rowCells will be created inside inner for-loop
      calendar.push(<div className={"row-" + i}>{rowCells}</div>);
    }

    return (
      <Container>
        <Row>
          {/*CALENDAR TABLE*/}
          <Col lg={9} md={12}>
            <div className="calendar-container col-12">
                <div className = "calendar-header">
                  <button className="prev-button" onClick={this.decrementMonth}>
                    Prev
                  </button>
                  <div className="before-header" style={{ color: "grey" }}>
                    {months[monthIndex - 1]} {this.state.beforeDate.getFullYear()}
                  </div>
                  <div className="month-header" style={{ color: "white" }}>
                    {months[monthIndex]} {this.state.currentDate.getFullYear()}
                  </div>
                  <div className="after-header" style={{ color: "grey" }}>
                    {months[monthIndex + 1]} {this.state.afterDate.getFullYear()}
                  </div>
                  <button className="next-button" onClick={this.incrementMonth}>
                    Next
                  </button>
                </div>
              <div className="day-header-container">
                <div className="day-header">
                  <span className="test1">Sunday</span>
                  <span className="test2">Sun</span>
                </div>
                <div className="day-header">
                  <span className="test1">Monday</span>
                  <span className="test2">Mon</span>
                </div>
                <div className="day-header">
                  <span className="test1">Tuesday</span>
                  <span className="test2">Tue</span>
                </div>
                <div className="day-header">
                  <span className="test1">Wednesday</span>
                  <span className="test2">Wed</span>
                </div>
                <div className="day-header">
                  <span className="test1">Thursday</span>
                  <span className="test2">Thu</span>
                </div>
                <div className="day-header">
                  <span className="test1">Friday</span>
                  <span className="test2">Fri</span>
                </div>
                <div className="day-header">
                  <span className="test1">Saturday</span>
                  <span className="test2">Sat</span>
                </div>
              </div>

              {calendar}
            </div>
          </Col>

          {/*UPCOMING EVENTS*/}
          <Col lg={3} className="upcoming-container d-flex align-items-stretch">
            <NextEvents currDate={this.state.today} events={this.state.events}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calendar;
