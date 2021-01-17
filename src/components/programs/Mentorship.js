import React from 'react'
import {Tab,Nav,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Programs.css"

class Mentorship extends React.Component {
    render() {
        return (
            <div>
                <Tab.Container defaultActiveKey="menteeRole">
                    <br></br>
                    <h2><b>The <span className="highlight-text">mentorship program</span> is a life-changing experience that will help you in school and prepare you for your future career.</b></h2><br></br>                   
                    <img src={require("./pictures/Mentorship Program 2021.png")} className="img-fluid programs-poster" alt="mentorship flyer"></img>
                    <br></br><br></br>
                    
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link className="programs-nav-link-tab anchor-white" eventKey="menteeRole">Mentee</Nav.Link>
                        </Nav.Item>
                        {/* Mentor sign up */}
                        {/*<Nav.Item>
                            <Nav.Link className="programs-nav-link-tab anchor-white" eventKey="mentorRole">Mentor</Nav.Link>
                        </Nav.Item>*/}
                    </Nav>
                    <Tab.Content className="programs-tab-content">
                        {/* Mentor sign up */}
                        {/*<Tab.Pane eventKey="mentorRole"><br></br>

                            <img src={require('./pictures/leader.png')} className="img-fluid mentorship-images"></img>

                            <p>
                                When you become a mentor, you become a leader. <span className="highlight-text"><i>Becoming a leader is about your level of influence and not 
                                about your level of authority.</i></span> As you begin working with mentee(s), you will develop valuable leadership 
                                traits. You will begin to question and refine your thinking process, as well as your methods 
                                of approaching various situations. As a mentor, you will be shaping the leaders of tomorrow. You will be
                                instilling leadership principles to your mentee(s), such as effective communication, time 
                                management, networking, and responsibility. Also, you will help mentees improve 
                                their professional and academic skills. When you begin to mentor others in their professional and academic lives, you 
                                will gain a better understanding of the things that you will be teaching. <br></br><br></br>
                                
                                In this program, mentors will: <br></br><br></br>

                                <b className="highlight-text">
                                    ❖ Shape the leaders of tomorrow<br></br>
                                    ❖ Gain new perspectives and ideas<br></br>
                                    ❖ Transform someone else's world<br></br>
                                    ❖ Be learning by teaching<br></br>
                                    ❖ Gain a sense of accomplishment by knowing they positively influenced others<br></br><br></br>
                                </b>
                            </p>

                        </Tab.Pane>*/}
                        <Tab.Pane eventKey="menteeRole"><br></br>
                            {/*<img src={require('./pictures/mentee.png')} className="img-fluid mentorship-images" style={{'float': 'left'}}></img>*/}
                            <p>
                                In this world, it could be a bit difficult to find some footing for a stable, independent life. Thankfully, if you are one 
                                of these people, <i><span className="highlight-text">you are not alone.</span></i> If you become a mentee in this program, a mentor can show you the ropes to
                                not only help you on your way to landing that six-figure job, but also help you navigate the pothole-filled road called life.<br></br><br></br>

                                In this program, mentees will:<br></br><br></br>

                                <b className="highlight-text">
                                    ❖ Time management<br/>
                                    ❖ Building your Resume, Cover Letter, Thank You Letter<br/>
                                    ❖ Behavioral and Technical Interviews<br/>
                                    ❖ Creating professional social media accounts (Handshake, LinkedIn)<br/>
                                    ❖ Technical Practices in the CS field (Agile, Waterfall)<br/>
                                    ❖ Conferences<br/>
                                    ❖ Finances<br/>
                                </b>                                                                
                            </p>

                        </Tab.Pane>
                    </Tab.Content>
                    <br></br><b>The deadline to apply is <span className="highlight-text">Sunday, Feb 7, 2021 at 11:59pm.</span> Join our <span className="highlight-text">mentorship program</span> today before it's too late!</b><br></br><br></br>
                
                    <Button variant="success" size="lg" href="https://forms.gle/CSdU5xJUDAPV1oEt6">Join Now!</Button>
                </Tab.Container>
            </div>
        )
    }
}

export default Mentorship;