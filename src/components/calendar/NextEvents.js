import React from "react";
import "./Calendar.css";
import "bootstrap/dist/css/bootstrap.css";
import EventModal from "./EventModal";

/***********************************************************
 *                EventContent Component
 * Description: This sub-component displays the date and its
 * event title. This is displayed at the "Upcoming Events" section
 * besides the calendar.
 *
 * Parameters: props
 * - it contains the event object
 *
 * Returns: a div block containing the date and the event title
 * that are pressable.
 ***********************************************************/
function EventContent(props) {
  if (props.id === 0) {
    return (
      <div className="event-block event1">
        <EventModal event={props.event} displayType={"full"} />
      </div>
    );
  } else {
    return (
      <div className="event-block event2">
        <EventModal event={props.event} displayType={"full"} />
      </div>
    );
  }
}

/***********************************************************
 *          function getUpcomingEvents(currentDate)
 * Description: This function collects three events that are
 * closest from the current date. Events are accessed from this
 * component's "events" state. The function finds events in the
 * next 100 days
 *
 * Parameters: currentDate
 * - it contains the today's date
 *
 * Returns: an "upcomingEvents" array containing three events
 ***********************************************************/
function getUpcomingEvents(currentDate, events) {
  //access current date values
  let today = currentDate;
  let todate = today.getDate();
  let todayMonth = today.getMonth();
  let todayYear = today.getFullYear();
  let upcomingEvents = []; //initialize empty array

  //how many days after today?
  let daysWithin = 100;

  let dayCount = 0; //while loop counter
  while (upcomingEvents.length < 3 && dayCount < daysWithin) {
    let nextDay = new Date(todayYear, todayMonth, todate);
    nextDay.setDate(todate + dayCount); //getting the dates after today

    //converting int to string date values
    let yearString = nextDay.getFullYear().toString();
    let monthString = (nextDay.getMonth() + 1).toString();
    let dayString = nextDay.getDate().toString();
    if (monthString.length === 1) {
      monthString = "0" + monthString;
    }
    if (dayString.length === 1) {
      dayString = "0" + dayString;
    }

    /*this format {2XXX-XX-XX} is used for accessing
    an event based on given date format*/
    const dateString = yearString + "-" + monthString + "-" + dayString;
    const eventsInDate = events[dateString];

    //only execute this block if event in given date exists
    if (typeof eventsInDate !== "undefined") {
      for (let i = 0; i < eventsInDate.length; i++) {
        let summary = eventsInDate[i].summary;

        //exclude unimportant events
        if (
          summary.indexOf("Week") === -1 &&
          summary.indexOf("Spring") === -1
        ) {
          const index = upcomingEvents.length;
          //adding the upcoming event to a sub-component
          upcomingEvents.push(
            <EventContent event={eventsInDate[i]} date={nextDay} id={index} />
          );
        }
      }
    }
    dayCount++;
  }
  return upcomingEvents;
}

const NextEvents = (props) => {
  const upcomingEvents = getUpcomingEvents(props.currDate, props.events);
  console.log(props.currDate);

  return (
    <div className="col-md-12">
      <h3>Upcoming Events:</h3>
      <div className="events-section">{upcomingEvents}</div>
    </div>
  );
};
export default NextEvents;
