import React from 'react'
import {Tab,Nav,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"

class Mentorship extends React.Component {
    render() {
        return (
            <div>
                <Tab.Container defaultActiveKey="menteeRole">
                    <br></br>
                    <h2><b>If projects aren't really your speed, perhaps the <span class="highlight-text">mentorship program</span> is more up your alley.</b></h2><br></br>
                    <img src={require("./pictures/Mentorship_program_flyer.png")} class="img-fluid project-poster"></img>
                    <img src={require("./pictures/mentorAndMentee.png")} class="img-fluid project-poster" style={{'margin': '50px'}}></img>
                    <br></br><br></br>
                    In this program, you can either be a mentor or a mentee. Click or tap either one of the tabs to learn more about their respective roles.<br></br><br></br>
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
                                When you become a mentor, you become a leader and <span class="highlight-text"><i>becoming a leader is about your level of influence and not 
                                about your level of authority.</i></span> As you begin working with a mentee you will begin to develop valuable leadership 
                                traits while at the same time you will begin to question and refine your thinking process as well as your methods 
                                of approach to various situations. As a mentor you will also be participating in shaping the leaders of tomorrow, 
                                you will be instilling leadership principles to your mentee(s) such as effective communication skills, time 
                                management, networking and having the integrity to admit to faults. As a mentor, you will be educating others on 
                                their professional skills (better speaker, writer, what is the proper dress attire for certain situations) or in 
                                their academics. When you begin to mentor others in their academic life, on how to look and be professional, you 
                                yourself will be getting a better understanding of whatever it is you are teaching. These are some of the many 
                                things you will gain when you become a mentor:<br></br><br></br>

                                <b class="highlight-text">
                                    ❖ Shape the leaders of tomorrow<br></br>
                                    ❖ Gain a new perspective and ideas<br></br>
                                    ❖ Change someone else's world<br></br>
                                    ❖ Strengthen the things you already know or learned<br></br>
                                    ❖ Improve productivity<br></br>
                                    ❖ Sense of accomplishment knowing you positively influenced others<br></br><br></br>
                                </b>

                            </p>

                        </Tab.Pane>
                        <Tab.Pane eventKey="menteeRole"><br></br>

                            <img src={require('./pictures/mentee.png')} class="img-fluid mentorship-images" style={{'float': 'left'}}></img>

                            <p>
                                In this world, it could be a bit difficult to some to find some footing for a stable independent life. Thankfully, if you are one 
                                of these people, <i><span class="highlight-text">you are not alone.</span></i> If you become a mentee in this program, a mentor can show you the ropes to
                                not just help you on your way to landing that six-figure job but also help you navigate the pothole-filled road that is life.<br></br><br></br>

                                In this program, mentees will:<br></br><br></br>

                                <b class="highlight-text">
                                    ❖ Work one-on-one with a mentor<br></br>
                                    ❖ Be helped to improve/make your resume<br></br>
                                    ❖ Be taught things to know at your current level from mentors<br></br>
                                    ❖ Improve your elevator speech<br></br>
                                    ❖ Teach you how to manage your responsibilities/tasks<br></br>
                                    ❖ Learn how to manage your time<br></br>
                                    ❖ Learn how to manage your expenses/money<br></br>
                                </b>                                                                
                            </p>

                        </Tab.Pane>
                    </Tab.Content>
                    <br></br><b>The deadline to apply is September 13, 2019. Join our <span class="highlight-text">mentorship program</span> today before it's too late!</b><br></br><br></br>
                
                    <Button variant="success" size="lg" href="https://forms.gle/9bVcVwCCn8vCbcYj7">Join Now!</Button>
                </Tab.Container>
            </div>
        )
    }
}

export default Mentorship