import React from 'react'
import {Tabs,Row,Col,Tab,Nav,Container,Button} from 'react-bootstrap'
import ModalImage from './ModalImage'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"
import Fall2019Beginner from './Fall2019Beginner'
import Fall2019Intermediate from './Fall2019Intermediate'
import Mentorship from './Mentorship'
import PortfolioAndMock from './PortfolioAndMock';

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
                    <div class="quote-block" style={{'margin-left': '15%', 'margin-right': '15%'}}>
                    <br></br>
                    Looking for experience?<br></br> Participate in our <span className="highlight-text"><i><b>projects and programs!</b></i></span>
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
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="first">Fall 2019</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="second">Spring 2019</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>                                
                                <Tab.Content className="project-tab-content">
                                
                                    <h3><b>Disclaimers!</b></h3>
                                    <span class="disclaimer"><b>1. You must be a member of ACM to participate in the projects/mentorship program!</b> If you are not a member, 
                                    <b><i><span class="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                                    <span class="disclaimer"><b>2. Deadlines to apply for both the Fall 2019 projects and mentorship program are <span class="highlight-text">
                                    September 13, 2019.</span></b></span><br></br><br></br>

                                    <Tab.Pane eventKey="first">
                                        <Tab.Container defaultActiveKey="low1920">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="low1920">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="hi1920">Intermediate Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="mentorship">Mentorship Program</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="portfolio">Portfolio Program</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">

                                                <Tab.Pane eventKey="low1920"><br></br>
                                                    <Fall2019Beginner />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="hi1920"><br></br>
                                                    <Fall2019Intermediate />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="mentorship">
                                                    <Mentorship />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="portfolio">
                                                    <PortfolioAndMock />
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <Tab.Container defaultActiveKey="low1819">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="low1819">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="hi1819">Advanced Project</Nav.Link>
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
            </div>
        );
    }
}

export default Projects