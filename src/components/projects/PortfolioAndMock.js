import React from 'react'
import {Tabs,Row,Col,Tab,Nav,Container,Button} from 'react-bootstrap'
import ModalImage from './ModalImage'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"

class PortfolioAndMock extends React.Component {
    render() {
        return (
            <div>
                <Tab.Container defaultActiveKey="portfolioTab">
                    <br></br>

                    <h2><b>Already have experience but lack professional developmental skills? <span class="highlight-text">Look no further.</span></b></h2><br></br>
                    <img src={require('./pictures/PortfolioPoster.jpg')} class="img-fluid project-poster"></img><br></br><br></br>
                    Click or tap one of the tabs below to see more information about their respective workshops.<br></br><br></br>

                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link className="anchor-blue" eventKey="portfolioTab">Portfolio Workshop</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="anchor-blue" eventKey="interviewTab">Mock Interviews</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="project-tab-content">
                        <Tab.Pane eventKey="portfolioTab">
                            <br></br>
                            <h2><b>Want something to show off? Come to the <span class="highlight-text">Portfolio Workshops!</span></b></h2>
                            <br></br>
                            This workshop is primarily designed so that students increase their probability to land a job after graduation or/and internship for those who will still be in school next year. 
                            I am planning on having 2 or 3 significant projects and moderately complex so that they are not a cookie-cutter project that can be found online or done in class. I am planning 
                            to be using Python and/or C++ for the projects. Please make sure to review your programming foundations as we will use a new language and the foundations are the same across all 
                            programming languages.
                        </Tab.Pane>
                        <Tab.Pane eventKey="interviewTab">
                            <br></br>
                            <h2><b>Have trouble acing that interview? Come to the <span class="highlight-text">Mock Interview Workshops!</span></b></h2>
                            <br></br>
                            This workshop is designed so that seniors can have a review on the most important courses in the CS program, Algorithms and Data Structures. Now, this workshop will help students 
                            so that they are prepared for an interview process whether they are internships interviews, phone interviews, on-site interviews, you always want to be prepared. The first thing 
                            that will be done is go over computational complexity, in the first meeting and those who have not taken the classes you can also attend to have a head start when taking those 
                            classes as you will absolutely learn so much.
                        </Tab.Pane>
                    </Tab.Content>

                </Tab.Container>
            </div>
        )
    }
}

export default PortfolioAndMock