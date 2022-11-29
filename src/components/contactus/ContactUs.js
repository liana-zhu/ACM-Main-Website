import React, { useContext } from "react";
import emailjs from "@emailjs/browser";
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
          <div className="faq-block mx-auto ">
            <h1 className="text-center border-bottom mb-4 pt-4">FAQ</h1>
            <Accordion alwaysOpen>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="0">
                  Who can join ACM?
                  <span className="down-symbol font-weight-bolder">
                    &#8964;
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="faq-ans">
                    Any Cal State LA student, regardless of major or year
                    standing, can join ACM.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="1">
                  Why should I join ACM?
                  <span className="down-symbol font-weight-bolder">
                    &#8964;
                  </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="faq-ans">
                    ACM provides opportunities to connect with other students
                    interested in Computer Science as well as professionals in
                    the field via social events. ACM also provides ways for
                    members to learn and develop programming skills and other
                    technical skills through project workshops, which are open
                    to any level of programmer, and a mentorship program.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq-question">
                <ContextAwareToggle eventKey="2">
                  How much is the student membership fee?
                  <span className="down-symbol font-weight-bolder">
                    &#8964;
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
                  <span className="down-symbol font-weight-bolder">
                    &#8964;
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
            </Accordion>
          </div>
        </div>

        <div className="contact-us-card">
          <div className="contact-us-block ">
            <h1 className=" text-center border-bottom pt-2 mt-2">Contact Us</h1>
            <form className="mt-4" onSubmit={sendEmail}>
              <div className="txtb">
                <label for="name" className="text-white h5">
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
                  name="phone_number"
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
