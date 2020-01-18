import React from 'react';
import './events.css';
import CurrentEventsModal from './CurrentEventsModal';
import CardImageModal from './CardImageModal';
import {Card, Button, Jumbotron, Container, Row, Col, Carousel, Image} from 'react-bootstrap';
import Calendar from "../calendar/Calendar.js";

// This component won't hold a state for not but decided 
// to make it into a Class component for now
class Events extends React.Component {
    
    constructor(props) {
        super(props);
    }

    test() {
        alert('Show Modal!');
    }

    render() {
        return(
            <div className="events-container">
                {/* <div><br/></div>
                <div><br/></div>
                <div><br/></div>
                <Calendar /> */}

                <div className="events-main">
                    <div className="events-main-text">
                        <p>Never miss an <span className="emphasis">Event</span></p>
                        <p>Stay in the loop</p>
                    </div>
                    {/* The class name "events-main-background" doesn't work. Changing the class name makes the code work */}
                    <div className="background-image"></div>
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