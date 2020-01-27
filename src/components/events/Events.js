import React from 'react';
import './events.css';
import CurrentEventsModal from './CurrentEventsModal';
import CardImageModal from './CardImageModal';
import {Card, Button, Jumbotron, Container, Row, Col, Carousel, Image} from 'react-bootstrap';

// This component won't hold a state for not but decided 
// to make it into a Class component for now
class Events extends React.Component {
    
    constructor(props) {
        super(props);
    }

    test() {
        alert('Show Modal!');
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
      }

    render() {
        return(
            <div className="events-container">
                <div className="events-main">
                    <div className="events-main-text">
                        <p>Never miss an <span className="emphasis">Event</span></p>
                        <p>Stay in the loop</p>
                    </div>
                    {/* The class name "events-main-background" doesn't work. Changing the class name makes the code work */}
                    <div className="background-image"></div>
                </div>
                <div className="blue-line"></div>

                <div className="acm-calendar">
                    <Jumbotron className="jumbo">
                        <h1 className="jumbo-text">View Events on Google Calendar...</h1>

                        <a href="https://calendar.google.com/calendar/embed?src=acm.calstatela%40gmail.com&ctz=America%2FLos_Angeles"><Button variant="primary" size="lg" className="calendar-button">ACM Calendar</Button></a>
                    </Jumbotron>
                </div>
                <div className="blue-line"></div>

                <Container className="current-events-container"> 
                    <div className="events-calendar-center">
                         <Calendar/>
                    </div>
                    </Container> 
            </div>
        );
    }
}

export default Events;