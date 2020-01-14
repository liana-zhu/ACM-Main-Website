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
                    <h2><b>The <span class="highlight-text">mentorship program</span> is a life-changing experience that will help you in school and prepare you for your future career.</b></h2><br></br>
                    <img src={require("./pictures/Mentorship_program_flyer.png")} class="img-fluid project-poster"></img>
                    <img src={require("./pictures/mentorAndMentee.png")} class="img-fluid project-poster" style={{'margin': '50px'}}></img>
                    <br></br><br></br>
                    In this program, you can either be a mentor or a mentee. Click or tap either one of the tabs below to learn more about their respective roles.<br></br><br></br>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link className="anchor-blue" eventKey="menteeRole">Mentee</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="anchor-blue" eventKey="mentorRole">Mentor</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="project-tab-content">
                        <Tab.Pane eventKey="mentorRole"><br></br>

                            <img src={require('./pictures/leader.png')} class="img-fluid mentorship-images"></img>

                            <p>
                                When you become a mentor, you become a leader. <span class="highlight-text"><i>Becoming a leader is about your level of influence and not 
                                about your level of authority.</i></span> As you begin working with mentee(s), you will develop valuable leadership 
                                traits. You will begin to question and refine your thinking process, as well as your methods 
                                of approaching various situations. As a mentor, you will be shaping the leaders of tomorrow. You will be
                                instilling leadership principles to your mentee(s), such as effective communication, time 
                                management, networking, and responsibility. Also, you will help mentees improve 
                                their professional and academic skills. When you begin to mentor others in their professional and academic lives, you 
                                will gain a better understanding of the things that you will be teaching. <br></br><br></br>
                                
                                In this program, mentors will: <br></br><br></br>

                                <b class="highlight-text">
                                    ❖ Shape the leaders of tomorrow<br></br>
                                    ❖ Gain new perspectives and ideas<br></br>
                                    ❖ Transform someone else's world<br></br>
                                    ❖ Be learning by teaching<br></br>
                                    ❖ Gain a sense of accomplishment by knowing they positively influenced others<br></br><br></br>
                                </b>

                            </p>

                        </Tab.Pane>
                        <Tab.Pane eventKey="menteeRole"><br></br>

                            <img src={require('./pictures/mentee.png')} class="img-fluid mentorship-images" style={{'float': 'left'}}></img>

                            <p>
                                In this world, it could be a bit difficult to find some footing for a stable, independent life. Thankfully, if you are one 
                                of these people, <i><span class="highlight-text">you are not alone.</span></i> If you become a mentee in this program, a mentor can show you the ropes to
                                not only help you on your way to landing that six-figure job, but also help you navigate the pothole-filled road called life.<br></br><br></br>

                                In this program, mentees will:<br></br><br></br>

                                <b class="highlight-text">
                                    ❖ Work one-on-one with a mentor<br></br>
                                    ❖ Improve/create their resume<br></br>
                                    ❖ Improve/create their elevator speech<br></br>
                                    ❖ Be taught how to manage their responsibilities/tasks<br></br>
                                    ❖ Learn how to manage their time and finances<br></br>
                                </b>                                                                
                            </p>

                        </Tab.Pane>
                    </Tab.Content>
                    <br></br><b>The deadline to apply is February 4, 2020 at 5:00 PM. Join our <span class="highlight-text">mentorship program</span> today before it's too late!</b><br></br><br></br>
                
                    <Button variant="success" size="lg" href="https://docs.google.com/forms/d/e/1FAIpQLSfZ_4dJlVGAadGbhej6UeJiSx3k6ubnmWCR2O-qp0Jt55FZcQ/viewform">Join Now!</Button>
                </Tab.Container>
            </div>
        )
    }
}

export default Mentorship