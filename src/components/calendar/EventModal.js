import React, {useState} from 'react';
import {Button, Modal, Image, Card} from 'react-bootstrap';
import './EventModal.css';

function checkIfUndefined(attribute) {

    if(typeof(attribute) !== "undefined") {
        return attribute;
    }

    return '';
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + '' + ampm;
    return strTime;
}

function getWhen(props) {
        const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        const days = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let startDateString = '';
        let endDateString = '';

        let when = '';

        if(typeof(props.event.start) !== "undefined") {
            // Only checking for "start" because this will means "end" will
            // be in the same format.
            if(props.event.start.hasOwnProperty("dateTime")) {
                startDateString = checkIfUndefined(props.event.start.dateTime);
                endDateString = checkIfUndefined(props.event.end.dateTime);

                let startDate = new Date(startDateString);
                let endDate = new Date(endDateString);

                let day = days[startDate.getDay()];
                let month = months[startDate.getMonth()];
                let date = startDate.getDate();

                let startTime = formatAMPM(startDate);
                let endTime = formatAMPM(endDate);

                let when = day + ", " + month + " " + date + ", " + startTime + " - " + endTime;

                return when

            } else {
                /** 
                 * Example of output:
                 *      "Monday, September 25, 2019"
                 */

                startDateString = checkIfUndefined(props.event.start.date);
                endDateString = checkIfUndefined(props.event.end.date);

                let startYear = startDateString.slice(0, 4);
                let startMonth =startDateString.slice(5, 7);
                let startDay = startDateString.slice(8, 10);

                let endYear = endDateString.slice(0, 4);
                let endMonth = endDateString.slice(5, 7);
                let endDay = endDateString.slice(8, 10);

                // Subtracting 1 since index starts at 0
                startYear = parseInt(startYear);
                startMonth = parseInt(startMonth) - 1;
                startDay = parseInt(startDay);

                endYear = parseInt(endYear);
                endMonth = parseInt(endMonth) - 1;
                endDay = parseInt(endDay);
                
                let startDate = new Date(startYear, startMonth, startDay, 0, 0, 0);
                let endDate = new Date(endYear, endMonth, endDay, 0, 0, 0);

                let day = days[startDate.getDay()];

                let when = day + ", " + months[startMonth] + " " + startDay + ", " + startYear;
                
                return when;
                
            }
        }
        

}

function getFlyerLink(location) {
    let start = location.search("\\(");
    let end = location.search("\\)");

    if(start !== -1 || end !== -1) {
        // Create new location without the content inside ()
        location = location.substring(0, start) + location.substring(end + 1, location.length);
        
        return location.trim();
    }
 
    return location;
}

function getRSVP(location) {
    let start = location.search("\\(");
    let end = location.search("\\)");

    if(start !== -1 || end !== -1) {
        // Get RSVP link
        let link = location.substring(start + 1, end);
        
        return <a className="rsvp-button" href={link}>RSVP</a>
    }

    return '';
}

function EventModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let title = '';
    // This is gonna be used for the image in the modal.
    let location = '';

    let description = '';

    let when = ''; 


    // Check if event is "undefined" before assigning values.
    if(typeof(props.event) !== "undefined") {

        // summary is pretty much the title of the event.
        title = checkIfUndefined(props.event.summary);

        description = checkIfUndefined(props.event.description);
        location = checkIfUndefined(props.event.location);

        when = getWhen(props);
    }

    
    return (
        <div className="modal-container">

            <p onClick={handleShow} className="event-modal-paragraph">
                {title}
            </p>
        

            <Modal show={show} onHide={handleClose} className="events-modal-container">

                <Modal.Header className="events-modal-header" closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body className="events-modal-card">
                    <p>{when}</p>

                    {description}

                    {getRSVP(location)}
                    
                    <Image src={getFlyerLink(location)} fluid/>

                </Modal.Body>

                <Modal.Footer className="events-modal-footer">
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
}

export default EventModal;