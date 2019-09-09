import React from 'react'
import "./Projects.css"
import {Tabs,Row,Col,Tab,Nav,Container,Button} from 'react-bootstrap'
import ModalImage from './ModalImage'
import 'bootstrap/dist/css/bootstrap.css'

class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showWeb1: false,
            showWeb2: false,
            showWeb3: false,
            showAndroid1: false,
            showAndroid2: false,
            showAndroid3: false
        }
    }

    render() {
        return (
            <div class="project-body">
                <div class="quote-style-2">
                    <p><i>Only through <span className="highlight-text">fire</span> can a strong sword be forged</i></p>
                </div>
                <div class="quote-style-1 quote-bg">
                    <div class="quote-block">
                    <br></br>
                    Looking to hone your coding edge?<br></br> Participate in our <span className="highlight-text"><i><b>projects!</b></i></span>
                    <br></br>
                    <br></br>
                    </div>
                </div>
                <div class="card project-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link" eventKey="first">2019-2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link" eventKey="second">2018-2019</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>                                
                                <Tab.Content className="project-tab-content">
                                
                                    <h3><b>Disclaimers!</b></h3>
                                    <span class="disclaimer"><b>1. You must be a member of ACM to participate in the projects/mentorship program!</b> If you are not a member, 
                                    <b><i><span class="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                                    <span class="disclaimer"><b>2. Deadlines to apply for both the 2019-2020 projects and mentorship program are <span class="highlight-text">
                                    September 17, 2019.</span></b></span><br></br><br></br>

                                    <Tab.Pane eventKey="first">
                                        <Tab.Container defaultActiveKey="low1920">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link" eventKey="low1920">Lower Classmen</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project0-nav-link" eventKey="hi1920">Upper Classmen</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">

                                                <Tab.Pane eventKey="low1920"><br></br>
                                                    <img src={require('./pictures/beginner.png')} class="img-fluid project-poster"></img><br></br><br></br>

                                                    <b>Who doesn't enjoy games even a little?</b> The instant gratification, the flashy lights, the addictive 
                                                    player-application feedback. In this workshop, you will recreate a classic arcade game 
                                                    from the late 70's, <span class="highlight-text"><b>Space Invaders</b></span>, using Python, a high-level 
                                                    programming language that is not only extremely easy to learn but also widely used.<br></br><br></br>

                                                    <h2>❖ <span class="highlight-text">Expected Technologies in this Project:</span></h2><br></br>
                                                    <ul>
                                                        <li>Python</li>
                                                        <li>PyGame</li>
                                                        <li>Python</li>
                                                        <li>Git/Github</li>
                                                        <li>Did I mention Python...?</li>
                                                    </ul>
                                                    
                                                    <br></br><b>The deadline to apply is September 17, 2019. Join  today before it's too late!</b><br></br><br></br>
                                                    <Button variant="success" size="lg" href="https://docs.google.com/forms/d/e/1FAIpQLScyDUwuyDL7dYeohFfDEjoU8zUPJ01HD9BSQAYk55-rDpEOcg/viewform">Join Now!</Button>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="hi1920"><br></br>
                                                    <img src={require('./pictures/intermediate.png')} class="img-fluid project-poster"></img><br></br><br></br>

                                                    <b>Looking for a bit of a challenge?</b> In this workshop, you will learn how to use React, a Javascript web 
                                                    framework that everybody and their grandmas use. Learning how to use React could score you major brownie points 
                                                    to potential recruiters.<br></br><br></br>
                                                    
                                                    <h2>❖ <span class="highlight-text">Expected Technologies in this Project:</span></h2><br></br>
                                                    <ul>
                                                        <li>React.js</li>
                                                        <li>Git/Github</li>
                                                        <li>Firebase</li>
                                                        <li>Node.js</li>
                                                        <li>HTML</li>
                                                        <li>CSS</li>
                                                    </ul>
                                                    
                                                    <br></br><b>The deadline to apply is September 17, 2019. Join  today before it's too late!</b><br></br><br></br>
                                                    <Button variant="success" size="lg" href="https://docs.google.com/forms/d/e/1FAIpQLScyDUwuyDL7dYeohFfDEjoU8zUPJ01HD9BSQAYk55-rDpEOcg/viewform">Join Now!</Button>
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <Tab.Container defaultActiveKey="low1819">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link" eventKey="low1819">Lower Classmen</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link" eventKey="hi1819">Upper Classmen</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                
                                                <Tab.Pane eventKey="low1819">
                                                    <br></br>
                                                    <h2>❖ <span class="highlight-text">Project Description</span></h2><br></br>
                                                    Past attendees of the workshops for this project learned how to create their own website. 
                                                    There are people who make their own websites to advertise themselves, so learning how to 
                                                    make your own website could give you an advantage in the job-hunting scene. As HTML and CSS, 
                                                    the two technologies that make up many websites, 
                                                    are both fairly easy to learn, the workshops were geared toward beginners. <br></br><br></br>

                                                    <h2>❖ <span class="highlight-text">Technologies Learned/Used:</span></h2><br></br>
                                                    <ul>
                                                        <li>HTML5</li>
                                                        <li>CSS</li>
                                                        <li>Javascript</li>
                                                        <li>Bootstrap</li>
                                                    </ul>

                                                    <h2>❖ <span class="highlight-text">Workshop leader:</span></h2>Deric Kwok<br></br><br></br>

                                                    <img src={require('./pictures/webDev.jpg')} class="img-fluid project-poster"></img><br></br><br></br>

                                                    <h2>❖ <span class="highlight-text">Images:</span></h2><br></br>

                                                    <Container>
                                                        <img src={require('./pictures/web1.jpg')} onClick={() => this.setState({showWeb1: true})} class="project-images"></img>
                                                        <img src={require('./pictures/web2.jpg')} onClick={() => this.setState({showWeb2: true})} class="project-images"></img>
                                                        <img src={require('./pictures/web3.jpg')} onClick={() => this.setState({showWeb3: true})} class="project-images"></img>
                                                        <ModalImage image='./pictures/web1.jpg' show={this.state.showWeb1} onHide={() => this.setState({ showWeb1: false })} />
                                                        <ModalImage image='./pictures/web2.jpg' show={this.state.showWeb2} onHide={() => this.setState({ showWeb2: false })} />
                                                        <ModalImage image='./pictures/web3.jpg' show={this.state.showWeb3} onHide={() => this.setState({ showWeb3: false })} />
                                                    </Container>
                                                    
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="hi1819">
                                                    <br></br>
                                                    <h2>❖ <span class="highlight-text">Project Description</span></h2><br></br>
                                                    The workshops for this project focused on teaching its attendees how to use Android Studio to design and build an 
                                                    Android app. Using Android Studio, past attendees ported ACM's website to an app format. Although creative freedom 
                                                    was limited compared to the beginner's project of this year, workshop attendees had the creative freedom to design 
                                                    the app in any way they so chose. Due to the skills required to operate Android Studio, the workshops were geared 
                                                    towards advanced programmers who already knew the fundamentals of programming with Java.
                                                    <br></br><br></br>

                                                    <h2>❖ <span class="highlight-text">Technologies Learned/Used:</span></h2><br></br>
                                                    <ul>
                                                        <li>Android Studio</li>
                                                        <li>Java</li>
                                                    </ul>

                                                    <h2>❖ <span class="highlight-text">Workshop leaders:</span></h2>
                                                    <ul>
                                                        <li>Ingelbert Figuerora</li>
                                                        <li>Emily Pascua</li>
                                                        <li>Srivats Venkataraman</li>
                                                    </ul>
                                                    <br></br><br></br>

                                                    <img src={require('./pictures/androidDev.jpg')} class="img-fluid project-poster"></img><br></br><br></br>

                                                    <h2>❖ <span class="highlight-text">Images:</span></h2><br></br>

                                                    <Container>
                                                        <img src={require('./pictures/android1.jpg')} onClick={() => this.setState({showAndroid1: true})} class="project-images"></img>
                                                        <img src={require('./pictures/android2.jpg')} onClick={() => this.setState({showAndroid2: true})} class="project-images"></img>
                                                        <img src={require('./pictures/android3.jpg')} onClick={() => this.setState({showAndroid3: true})} class="project-images"></img>
                                                        <ModalImage image='./pictures/android1.jpg' show={this.state.showAndroid1} onHide={() => this.setState({ showAndroid1: false })} />
                                                        <ModalImage image='./pictures/android2.jpg' show={this.state.showAndroid2} onHide={() => this.setState({ showAndroid2: false })} />
                                                        <ModalImage image='./pictures/android3.jpg' show={this.state.showAndroid3} onHide={() => this.setState({ showAndroid3: false })} />
                                                    </Container>

                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>                            
                                </Tab.Content>
                            </Col>
                        </Row>
					</Tab.Container><br></br>
                </div>
                <div class="mentorship-body">
                    <h2><b>If projects aren't really your speed, perhaps the <span class="highlight-text">mentorship program</span> is more up your alley.</b></h2>
                    In this program, you can either be a mentor or a mentee. Click or tap either one of the tabs to learn more about their respective roles.<br></br><br></br>
                    
                    <Tab.Container defaultActiveKey="mentorRole">
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link class="project-nav-link" eventKey="mentorRole">Mentor</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link class="project-nav-link" eventKey="menteeRole">Mentee</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content class="project-tab-content">
                            <Tab.Pane eventKey="mentorRole"><br></br>

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

                                    ❖ Shape the leaders of tomorrow<br></br>
                                    ❖ Gain a new perspective and ideas<br></br>
                                    ❖ Change someone else's world<br></br>
                                    ❖ Strengthen the things you already know or learned<br></br>
                                    ❖ Improve productivity<br></br>
                                    ❖ Sense of accomplishment knowing you positively influenced others<br></br><br></br>

                            </Tab.Pane>
                            <Tab.Pane eventKey="menteeRole"><br></br>

                                In this world, it could be a bit difficult to some to find some footing for a stable independent life. If you are one 
                                of these people, you are thankfully not alone. If you become a mentee in this program, a mentor can show you the ropes to
                                not just help you on your way to landing that six-figure job but also help you navigate the pothole-filled road that is life.<br></br><br></br>

                                In this program, mentees will:<br></br><br></br>

                                ❖ Work one-on-one with a mentor<br></br>
                                ❖ Be helped to improve/make your resume<br></br>
                                ❖ Be taught things to know at your current level from mentors<br></br>
                                ❖ Improve your elevator speech<br></br>
                                ❖ Teach you how to manage your responsibilities/tasks<br></br>
                                ❖ Learn how to manage your time<br></br>
                                ❖ Learn how to manage your expenses/money<br></br>

                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                    <br></br><b>The deadline to apply is September 17, 2019. Join our <span class="highlight-text">mentorship program</span> today before it's too late!</b><br></br><br></br>
                    
                    <Button variant="success" size="lg" href="https://forms.gle/9bVcVwCCn8vCbcYj7">Join Now!</Button>

                </div>
            </div>
        );
    }
}

export default Projects