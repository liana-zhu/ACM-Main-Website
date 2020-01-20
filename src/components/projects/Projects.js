import React from 'react'
import {Tabs,Row,Col,Tab,Nav,Container,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"
import LegacyProject from './LegacyProject'
import NewProject from './NewProject'

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
                {/* <div class="quote-style-1 quote-bg">
                    <div class="quote-block" style={{'margin-left': '15%', 'margin-right': '15%'}}>
                    <br></br>
                    Looking for experience?<br></br> Participate in our <span className="highlight-text"><i><b>projects and programs!</b></i></span>
                    <br></br>
                    <br></br>
                    </div>
                </div> */}
                <div>
                    <div className="project-title-text">
                    <p></p>
                        <p>Looking for experience?</p>
                        <p>Participate in our <span className="emphasis">projects</span>!</p>
                    </div>
                    <div className="project-title-card"></div>
                </div>
                <div class="card project-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="spring2020projects">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="spring2020projects">Spring 2020</Nav.Link>
                                </Nav.Item>
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
                                
                                    <h3><b>Disclaimer!</b></h3>
                                    <span class="disclaimer"><b>You must be a member of ACM to participate in the projects!</b> If you are not a member, 
                                    <b><i><span class="highlight-text"> you will not be allowed in.</span></i></b></span><br></br><br></br>

                                    <Tab.Pane eventKey="spring2020projects">
                                        <Tab.Container defaultActiveKey="S2020beginner">                                            
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="S2020beginner">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="S2020advanced">Advanced Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                <Tab.Pane eventKey="S2020beginner">
                                                    <NewProject
                                                        opener="Want to learn how to advertise your skillset in a tech-savvy way?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Personal Website is a beginner’s project that requires little to no programming experience. If you have no coding experience or you are just interested in coding, then this is the perfect project for you. In this project, you will create your own personal website. This project is an excellent way to create a portfolio to showcase your art or promote yourself. You can even create your own blog and design the website however you like. The technologies that you will learn will include: HTML, CSS, JavaScript, and Bootstrap."
                                                        technologies={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                                                        poster="./spring2020/Personal Website.png"
                                                        linkToSignUp="notReady"
                                                        projectLeadersImages={["./leaders/Srivats V.png", "./leaders/Giovanni C.png", "./leaders/Vacant.png"]}
                                                        projectLeaders={["Srivats Venkataraman", "Giovanni Castellanos", "Kevin Flores (Missing Picture)"]}
                                                        />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="S2020advanced">
                                                    <NewProject
                                                        opener="Space Invaders, but with extra steps!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Space Invaders Part II is a game development project, which is a continuation of last semester's project. New features include new bosses, level progressions, and special abilities. This project will contain a lot of object-oriented programming along with some data structures. This project is meant for more experienced programmers who would like a challenge and for those who participated in last semester’s Space Invaders Part I. The technologies and language used will be Python and Pycharm."
                                                        technologies={["Python", "PyCharm"]}
                                                        poster="./spring2020/Space Invaders 2.0.png"
                                                        linkToSignUp="notReady"
                                                        projectLeadersImages={["./leaders/Andrew G.png", "./leaders/Elton M.png", "./leaders/Vacant.png", "./leaders/Vacant.png"]}
                                                        projectLeaders={["Andrew Gonzalez", "Elton Lin", "John Grover (Missing Picture)", "Luis Garcia (Missing Picture)"]}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="first">
                                        <Tab.Container defaultActiveKey="low1920">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="low1920">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="hi1920">Intermediate Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">

                                                <Tab.Pane eventKey="low1920">
                                                    <LegacyProject
                                                        opener="Who doesn't enjoy games even a little?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="The instant gratification, the flashy lights, the addictive player-application feedback. In this workshop, we recreated a classic arcade game from the late 70's, Space Invaders, using Python, a high-level programming language that is not only extremely easy to learn but also widely used."
                                                        technologies={['Python', 'PyGame', 'Python', 'Git/Github', 'Did I mention Python...?']}
                                                        poster='./pictures/beginner.png'
                                                        projectImages={[
                                                            './Space Invaders/IMG_9734.jpg',
                                                            './Space Invaders/IMG_9735.jpg',
                                                            './Space Invaders/IMG_9736.jpg',
                                                            './Space Invaders/IMG_9738.jpg',
                                                            './Space Invaders/IMG_9739.jpg',
                                                            './Space Invaders/IMG_9740.jpg',
                                                            './Space Invaders/IMG_9741.jpg',
                                                            './Space Invaders/IMG_9744.jpg',
                                                            './Space Invaders/IMG_9745.jpg',
                                                            './Space Invaders/IMG_9746.jpg',
                                                            './Space Invaders/IMG_9747.jpg',
                                                            './Space Invaders/IMG_9748.jpg',
                                                            './Space Invaders/IMG_9750.jpg',
                                                            './Space Invaders/IMG_9755.jpg',
                                                            './Space Invaders/IMG_9756.jpg',
                                                            './Space Invaders/IMG_9759.jpg',
                                                            './Space Invaders/IMG_9760.jpg',
                                                            './Space Invaders/IMG_9763.jpg',
                                                            './Space Invaders/IMG_9764.jpg',
                                                            './Space Invaders/IMG_9765.jpg',
                                                            './Space Invaders/IMG_9767.jpg',
                                                            './Space Invaders/IMG_9768.jpg',
                                                            './Space Invaders/IMG_9769.jpg',
                                                            './Space Invaders/IMG_9962.jpg',
                                                            './Space Invaders/IMG_9963.jpg',
                                                            './Space Invaders/IMG_9965.jpg',
                                                            './Space Invaders/IMG_9967.jpg',
                                                            './Space Invaders/IMG_9968.jpg',
                                                            './Space Invaders/IMG_9969.jpg',
                                                            './Space Invaders/IMG_9970.jpg',
                                                            './Space Invaders/IMG_9973.jpg',
                                                            './Space Invaders/IMG_9974.jpg',
                                                            './Space Invaders/IMG_9975.jpg',
                                                            './Space Invaders/IMG_9976.jpg',
                                                            './Space Invaders/IMG_9977.jpg',
                                                            './Space Invaders/1a.jpg', 
                                                            './Space Invaders/1b.jpg', 
                                                            './Space Invaders/2a.jpg'
                                                        ]}
                                                        projectLeadersImages={['./leaders/Andrew G.png','./leaders/Cristian C.png', './leaders/Elton M.png']}
                                                        projectLeaders={['Andrew Gonzalez', 'Cristian Corrales', 'Elton Lin']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="hi1920">
                                                    <LegacyProject 
                                                        opener='Looking for a bit of a challenge?'
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='In this workshop, we created a chat application (a chapplication) using React, a JavaScript web framework that everybody and their grandmas use. Learning how to use React could score you major brownie points to potential recruiters.'
                                                        technologies={['React.js', 'Git/Github', 'Firebase', 'Node.js', 'HTML', 'CSS']}
                                                        poster='./pictures/intermediate.png'
                                                        projectImages={[
                                                            './Accord/1.jpg', 
                                                            './Accord/10.jpg', 
                                                            './Accord/11.jpg', 
                                                            './Accord/12.jpg', 
                                                            './Accord/13.jpg', 
                                                            './Accord/14.jpg', 
                                                            './Accord/15.jpg', 
                                                            './Accord/16.jpg', 
                                                            './Accord/17.jpg', 
                                                            './Accord/18.jpg', 
                                                            './Accord/19.jpg', 
                                                            './Accord/2.jpg',
                                                            './Accord/3.jpg', 
                                                            './Accord/4.jpg', 
                                                            './Accord/40.jpg', 
                                                            './Accord/41.jpg', 
                                                            './Accord/42.jpg', 
                                                            './Accord/43.jpg', 
                                                            './Accord/44.jpg', 
                                                            './Accord/5.jpg', 
                                                            './Accord/50.jpg', 
                                                            './Accord/51.jpg', 
                                                            './Accord/52.jpg', 
                                                            './Accord/53.jpg', 
                                                            './Accord/54.jpg', 
                                                            './Accord/55.jpg', 
                                                            './Accord/56.jpg',
                                                            './Accord/57.jpg', 
                                                            './Accord/58.jpg', 
                                                            './Accord/59.jpg', 
                                                            './Accord/6.jpg', 
                                                            './Accord/60.jpg', 
                                                            './Accord/61.jpg', 
                                                            './Accord/62.jpg', 
                                                            './Accord/37.jpg', 
                                                            './Accord/38.jpg', 
                                                            './Accord/39.jpg'
                                                        ]}
                                                        projectLeadersImages={['./leaders/Emily P.png', './leaders/Inelbert F.png', './leaders/Srivats V.png', './leaders/Deric K.png']}
                                                        projectLeaders={['Emily Pascua', 'Ingelbert Figueroa', 'Srivats Venkataraman', 'Deric Kwok']}
                                                        />
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
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='Past attendees of the workshops for this project learned how to create their own website. There are people who make their own websites to advertise themselves, so learning how to make your own website could give you an advantage in the job-hunting scene. Since HTML and CSS, the two technologies that make up many websites, are both fairly easy to learn, these workshops were geared towards beginners. '
                                                        technologies={['HTML5', 'CSS', 'JavaScript', 'Bootstrap']}
                                                        poster='./pictures/webDev.jpg'
                                                        projectImages={['./pictures/web1.jpg', './pictures/web2.jpg', './pictures/web3.jpg']}
                                                        projectLeadersImages={['./leaders/Deric K.png', './leaders/Brian.jpg']}
                                                        projectLeaders={['Deric Kwok', 'Brian Hernandez']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="hi1819">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="The workshops for this project focused on teaching its attendees how to use Android Studio to design and build an Android app. Using Android Studio, past attendees ported ACM's website to an app format. Although creative freedom was limited compared to the beginner's project of this year, workshop attendees had the creative freedom to design the app in any way they wanted. Due to the skills required to operate Android Studio, the workshops were geared towards advanced programmers who already knew the fundamentals of programming with Java."
                                                        technologies={['Android Studio', 'Java']}
                                                        poster='./pictures/androidDev.jpg'
                                                        projectImages={['./pictures/android1.jpg', './pictures/android2.jpg', './pictures/android3.jpg']}
                                                        projectLeadersImages={['./leaders/Inelbert F.png', './leaders/Emily P.png', './leaders/Srivats V.png']}
                                                        projectLeaders={['Ingelbert Figueroa', 'Emily Pascua', 'Srivats Venkataraman']}
                                                        />
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