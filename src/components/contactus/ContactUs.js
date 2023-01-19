import React, { useContext } from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css";
import { Card } from "react-bootstrap";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Accordion from "react-bootstrap/Accordion";

/*function so that when one question is clicked while another is open, open question will
close automatically. Also to change bg to blue when active/clicked
*/
let currentEventKey;
let eventKey;
function ContextAwareToggle({ children, eventKey, callback }) {
  currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  let icon;
  if (isCurrentEventKey)
    icon = '<span><CaretUpFill className="up-caret"/></span>';
  else icon = '<span><CaretDownFill className="down-caret"/></span>';
  return (
    <Accordion.Toggle
      className="h5 d-flex justify-content-between align-items-start"
      as={Card.Header}
      eventKey="0"
      style={{
        backgroundColor: isCurrentEventKey ? "#026E9F" : " #32617b",
        borderBottom: isCurrentEventKey ? "white solid 2px" : "none",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </Accordion.Toggle>
  );
}

//function to send email taken from emailjs
//note: emailjs only provides 200 free email sends per month
//Send email functionality doesn't count number of emails sent per month, but
//highly unlikely that an attacker would spam our email to reach the 200 threshold
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_bn6s6cv",
      "template_wmv971n",
      e.target,
      "dy_stPW0PkeIdNTfv"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
      e.target.reset()
    );
};

class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us-page">
        <div className="text-white">
          <div>
            <div className="header-text">
              <p>Have a question?</p>
            </div>
            <div className="header"></div>
          </div>
          <div className="faq-block mx-auto m-4 ">
            <h1 className="text-center mb-4 pt-4">FAQ</h1>
            <Accordion alwaysOpen>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="0">
                  Who can join ACM?
                  <span>
                    <CaretDownFill className="down-caret" />
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="faq-ans">
                    Any Cal State LA student can join ACM regardless of major or
                    year standing.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="1">
                  Why should I join ACM?
                  {currentEventKey === eventKey ? (
                    <span>
                      <CaretUpFill className="up-caret" />
                    </span>
                  ) : (
                    <span>
                      <CaretDownFill className="down-caret" />
                    </span>
                  )}
                </ContextAwareToggle>

                <Accordion.Collapse eventKey="1">
                  <Card.Body className="faq-ans">
                    ACM provides opportunities to connect with other students
                    interested in Computer Science and professionals in the
                    field via social events. ACM also provides ways for members
                    to learn and develop programming skills and other technical
                    skills through project workshops, which are open to any
                    level of programmer and a mentorship program.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="2">
                  How much is the student membership fee?
                  <span>
                    <CaretDownFill className="down-caret" />
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="faq-ans">
                    Student membership fee is $5 for a whole school year
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="3">
                  Can I participate in multiple workshops at once?
                  <span>
                    <CaretDownFill className="down-caret" />
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="faq-ans">
                    Yes, all of ACM's workshops are hosted in 3 modes: in
                    person, online via zoom, and asychronously online; hence,
                    you can decide to take some workshops asychronously if they
                    have conflicting schedules.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="4">
                  Do I need to sign up again in the Spring semester if I already
                  signed up in the previous Fall semester?
                  <span>
                    <CaretDownFill className="down-caret" />
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="faq-ans">
                    No, you do not need to sign up again, since this is a yearly
                    membership that counts for both fall and spring semester
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="5">
                  How do I apply for a leadership role in ACM?
                  <span>
                    <CaretDownFill className="down-caret" />
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body className="faq-ans">
                    After joining ACM the board sends out forums for ACM members
                    to fill out on which committee they’d like to join as a
                    leader. To learn more about when the forums are released,
                    please contact an ACM leader.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

        <div className="contact-us-card">
          <div className="contact-us-block mx-auto ">
            <h1 className=" text-center pt-2 mt-2">CONTACT US</h1>
            <form className="mt-4" onSubmit={sendEmail}>
              <div className="txtb">
                <label for="name" className="contact-label">
                  Full Name :
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="card-bg text-left"
                  placeholder="Enter your name"
                />
              </div>
              <div className="txtb">
                <label for="email" className="contact-label">
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
                <label for="phoneNo" className="contact-label">
                  Phone Number :
                </label>
                <input
                  type="text"
                  id="phoneNo"
                  name="phone_number"
                  className="card-bg"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="txtb">
                <label for="message" className="contact-label">
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
