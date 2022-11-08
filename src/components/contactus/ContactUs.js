import React, { useContext } from "react";
import "./contactus.css";
import { Card } from "react-bootstrap";

import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Accordion from "react-bootstrap/Accordion";

/*function so that when one question is clicked while another is open, open question will
close automatically. Also to change bg to blue when active/clicked
*/
function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Accordion.Toggle
      className="h5 d-flex justify-content-between align-items-start"
      as={Card.Header}
      eventKey="0"
      style={{
        backgroundColor: isCurrentEventKey ? "#2898cc" : " #1c1c1e",
        borderBottom: isCurrentEventKey ? "white solid 2px" : "none",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </Accordion.Toggle>
  );
}
class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us-page">
        <div className="text-white">
          <div className="faq-block mx-auto ">
            <h1 className="text-center border-bottom mb-4 pt-4">FAQ</h1>
            <Accordion alwaysOpen>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="0">
                  Why should I join ACM?
                  <span className="down-symbol font-weight-bolder">
                    &#8964;
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="faq-ans">test</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="1">
                  How much is the student membership fee?
                  <span className="down-symbol font-weight-bolder">
                    &#8964;
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="faq-ans">
                    Student membership fee is $5 for a whole year
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

        <div className="contact-us-card">
          <div className="contact-us-block ">
            <h1 className=" text-center border-bottom pt-2 mt-2">Contact Us</h1>
            <form
              action="mailto:acm.calstatela@gmail.com?Subject=Contacting%20You%20From%20Website"
              method="POST"
              enctype="text/plain"
              className="mt-4"
            >
              <div className="txtb">
                <label for="name" className="text-white h5">
                  Full Name :
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="card-bg text-left"
                  placeholder="Enter your name"
                />
              </div>
              <div className="txtb">
                <label for="email" className="text-white h5">
                  Email:{" "}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="card-bg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="txtb">
                <label for="phoneNo" className="text-white h5">
                  Phone Number :
                </label>
                <input
                  type="text"
                  id="phoneNo"
                  name="phoneNo"
                  className="card-bg"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="txtb">
                <label for="message" className="text-white h5">
                  Message:{" "}
                </label>
                <textarea
                  id="body"
                  name="message"
                  className="card-bg"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <input type="submit" value="Send" id="btn-form" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
