import React from 'react'
import {Row,Col,Tab,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"
import LegacyProject from './LegacyProject'
import NewProject from './NewProject'

class Projects extends React.Component {
    render() {

        return (
            <div className="project-body">
                <div>
                    <div className="project-title-text">
                    <p></p>
                        <p>Looking for experience?</p>
                        <p>Participate in our <span className="emphasis">projects</span>!</p>
                    </div>
                    <div className="project-title-card"></div>
                </div>
                <div className="disclaimer-body">
                    <h3 className="disclaimer_header"><b>Disclaimer!</b></h3>
                    <span className="disclaimer"><b>1. You must be a member of ACM to participate in the projects!</b> If you are not a member, 
                    <b><i><span className="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                    <span className="disclaimer"><b>2. Space is limited, so admittance to these projects are <span className="highlight-text">first come, first served.
                    </span></b></span><br></br>
                    <span className="disclaimer"><b>3. Project signups will open during our First General Meeting on <i><span className="highlight-text">
                    Tuesday, September 1, 2020.</span></i></b></span><br></br>
                    <span className="disclaimer"><b>4. Signup deadline for the Fall 2020 projects is <i><span className="highlight-text">
                    Saturday, September 5, 2020 at 11:59 PM.</span></i></b></span><br></br>
                    <br></br><br></br>
                </div>
                
                <div className="card project-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="fall2020projects">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="fall2020projects">Fall 2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="spring2020projects">Spring 2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="fall2019projects">Fall 2019</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="spring2019projects">Spring 2019</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="fall2018projects">Fall 2018</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>                                
                                <Tab.Content className="project-tab-content">
                                
                                {/* <h3><b>Disclaimer!</b></h3>
                                    <span className="disclaimer"><b>1. You must be a member of ACM to participate in the projects!</b> If you are not a member, 
                                    <b><i><span className="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                                    <span className="disclaimer"><b>2. Admittance to these projects are <span className="highlight-text">first come, first served.
                                    </span></b> Space is limited in these projects, so you are advised to attend the First General Meeting to secure 
                                    yourself a spot in the project of your choosing.</span><br></br>
                                    <span className="disclaimer"><b>3. The deadline to apply to the Spring 2020 projects is <i><span className="highlight-text">
                                    Sunday, February 9th, 2020 at 6:00 PM.</span></i></b></span><br></br>
                                    <br></br><br></br> */}
                                    <Tab.Pane eventKey="fall2020projects">
                                        <Tab.Container defaultActiveKey="F2020beginner">                                            
                                            <Nav className="project-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="F2020beginner">Beginner</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="F2020advanced">Advanced</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                <Tab.Pane eventKey="F2020beginner">
                                                    <NewProject
                                                        opener="Come and explore the world of modding with Minecraft!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Learn how to code your own blocks, items, and craftables! Make those beautiful 16x16 pixel images come to life in this blocky, pixelated, and skittle-filled world of Minecraft!"
                                                        technologies={["Java", "Forge", "IntelliJ IDEA", "Gradle", "Git", "JSON"]}
                                                        poster="./fall2020/minecraft-mod.png"
                                                        linkToSignUp="https://forms.office.com/Pages/ResponsePage.aspx?id=AiCKzo9EWE-Csdhvc-Ov3Z5F1F8bCtlFj7IWFte9H9dUODJCNFo5TUhWRDVJQUNaVUk5WjYwUERPRi4u"
                                                        // Dynamic button
                                                        // Use '/' not '-' for dates to prevent issues on Firefox.
                                                        // openDate="01/28/2020"
                                                        // opentime="14:59:59"
                                                        // deadlineDate="02/09/2020"
                                                        // deadlineTime="17:59:59"
                                                        projectLeadersImages={["./leaders/Jorge.jpg", "./leaders/Lillian.jpg", "./leaders/Omar.jpg", "./leaders/Sameen.jpg"]}
                                                        projectLeaders={["Jorge Mata", "Lillian Leung", "Omar Eclicerio", "Sameen Khan"]}
                                                        />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="F2020advanced">
                                                    <NewProject
                                                        opener="Ever wanted to make your own weird commands on Discord?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Well, now is your chance to learn how to make your own Discord bot using JavaScript! We will also go through a few API's as the ultimate pièce de résistance."
                                                        technologies={["JavaScript", "SQL", "Visual Studio Code", "JSON", "API calls", "Node.js"]}
                                                        poster="./fall2020/discord-bot.png"
                                                        linkToSignUp="https://forms.office.com/Pages/ResponsePage.aspx?id=AiCKzo9EWE-Csdhvc-Ov3Z5F1F8bCtlFj7IWFte9H9dUN1FQTUVKUk5GU081MEQ1NkFKTEc4MFJLNC4u"
                                                        // Dynamic button
                                                        //Use '/' not '-' for dates to prevent issues on Firefox.
                                                        // openDate="01/28/2020"
                                                        // opentime="14:59:59"
                                                        // deadlineDate="02/09/2020"
                                                        // deadlineTime="17:59:59"
                                                        projectLeadersImages={["./leaders/Alvin.jpg", "./leaders/Adrian.jpg", "./leaders/DavidM.jpg", "./leaders/Robert.jpg"]}
                                                        projectLeaders={["Alvin Lew", "Adrian Salgado", "David Melendez", "Robert De La Costa"]}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="spring2020projects">
                                        <Tab.Container defaultActiveKey="S2020beginner">                                            
                                            <Nav className="project-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="S2020beginner">Beginner</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="S2020advanced">Advanced</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                <Tab.Pane eventKey="S2020beginner">
                                                    <LegacyProject
                                                        opener="Want to learn how to advertise your skillset in a tech-savvy way?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Personal Website is a beginner’s project that requires little to no programming experience. If you have no coding experience or you are just interested in coding, then this is the perfect project for you. In this project, you will create your own personal website. This project will be an excellent way to create a portfolio to showcase your art or promote yourself. You will be able to create your own blog and design the website in any way you like. The technologies that you will learn will include: HTML, CSS, JavaScript, and Bootstrap."
                                                        technologies={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                                                        poster="./spring2020/personal-website.png"
                                                        projectImages={[
                                                            './spring2020/web1.jpg',
                                                            './spring2020/web2.jpg',
                                                            './spring2020/web3.jpg'
                                                             ]}
                                                        projectLeadersImages={["./leaders/Srivats.JPG", "./leaders/GiovanniC.JPG", "./leaders/Kevin.JPG"]}
                                                        projectLeaders={["Srivats Venkataraman", "Giovanni Castellanos", "Kevin Flores"]}
                                                        />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="S2020advanced">
                                                    <LegacyProject
                                                        opener="Space Invaders, but with extra steps!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Space Invaders Part II is a game development project, which is a continuation of last semester's project. New features include new bosses, level progressions, and special abilities. This project will contain a lot of object-oriented programming along with some data structures. This project will be for more experienced programmers who would like a challenge and for those who participated in Fall 2019’s Space Invaders Part I. The technologies and language used will be Python and Pycharm."
                                                        technologies={["Python", "PyCharm"]}
                                                        poster="./spring2020/space-invaders2.png"
                                                        projectImages={[
                                                            './spring2020/space1.jpg',
                                                            './spring2020/space2.jpg',
                                                            './spring2020/space3.jpg'
                                                             ]}
                                                        projectLeadersImages={["./leaders/Andrew.JPG", "./leaders/Elton.JPG", "./leaders/Grover.JPG", "./leaders/Luis.JPG"]}
                                                        projectLeaders={["Andrew Gonzalez", "Elton Lin", "John Grover", "Luis Gonzalez"]}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
          
                                    <Tab.Pane eventKey="fall2019projects">
                                        <Tab.Container defaultActiveKey="F2019beginner">
                                            <Nav className="project-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="F2019beginner">Beginner</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="F2019advanced">Advanced</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">

                                                <Tab.Pane eventKey="F2019beginner">
                                                    <LegacyProject
                                                        opener="Who doesn't enjoy games, even a little?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="There are things like the instant gratification, the flashy lights, and the addictive player-application feedback. In this workshop, students will recreate a classic arcade game from the late 70's, Space Invaders. Python will be used, which is a high-level programming language that is not only easy to learn, but also commonly used."
                                                        technologies={['Python', 'PyGame', 'Git/GitHub']}
                                                        poster='./fall2019/beginner.png'
                                                        projectImages={[
                                                            './fall2019/space1.jpg',
                                                            './fall2019/space2.jpg',
                                                            './fall2019/space3.jpg',
                                                            './fall2019/space4.jpg',
                                                            './fall2019/space5.jpg'
                                                             ]}
                                                        projectLeadersImages={['./leaders/Andrew.JPG','./leaders/Cristian.JPG', './leaders/Elton.JPG']}
                                                        projectLeaders={['Andrew Gonzalez', 'Cristian Corrales', 'Elton Lin']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="F2019advanced">
                                                    <LegacyProject 
                                                        opener='Looking for a bit of a challenge?'
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='In this workshop, students will create a chat application (a chapplication). It will use React, a JavaScript web framework that everybody and their grandmas use. Learning how to use React will score you major brownie points to potential recruiters.'
                                                        technologies={['React.js', 'Git/GitHub', 'Firebase', 'Node.js', 'HTML', 'CSS']}
                                                        poster='./fall2019/intermediate.png'
                                                        projectImages={[
                                                            './fall2019/accord1.jpg', 
                                                            './fall2019/accord2.jpg', 
                                                            './fall2019/accord3.jpg', 
                                                            './fall2019/accord4.jpg'
                                                        ]}
                                                        projectLeadersImages={['./leaders/Emily.JPG', './leaders/Ingelbert.JPG', './leaders/Srivats.JPG', './leaders/Deric.JPG']}
                                                        projectLeaders={['Emily Pascua', 'Ingelbert Figueroa', 'Srivats Venkataraman', 'Deric Kwok']}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
          
                                    <Tab.Pane eventKey="spring2019projects">
                                        <Tab.Container defaultActiveKey="S2019beginner">
                                            <Nav className="project-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="S2019beginner">Beginner</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="S2019advanced">Advanced</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                
                                                <Tab.Pane eventKey="S2019beginner">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='Students will learn to create their own website. There are people who make their own websites to advertise themselves, so learning how to make your own website will give you an advantage in the job-hunting scene. Since HTML and CSS, the two technologies that make up many websites, are easy to learn, these workshops will be for beginners. '
                                                        technologies={['HTML5', 'CSS', 'JavaScript', 'Bootstrap']}
                                                        poster='./spring2019/web-flyer.jpg'
                                                        projectImages={['./spring2019/web1.jpg', './spring2019/web2.jpg', './spring2019/web3.jpg', './spring2019/web4.jpg', './spring2019/web5.jpg', './spring2019/web6.jpg']}
                                                        projectLeadersImages={['./leaders/Deric.JPG', './leaders/brian.JPG']}
                                                        projectLeaders={['Deric Kwok', 'Brian Hernandez']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="S2019advanced">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="We will teach students how to use Android Studio to design and build an Android app. Using Android Studio, students will port ACM's website to an app format. Students will have the freedom to design the app in any way they want. Students will be expected to be familar with Java because of the technical skills required to operate Android Studio."
                                                        technologies={['Android Studio', 'Java']}
                                                        poster='./spring2019/android-flyer.jpg'
                                                        projectImages={['./spring2019/android1.jpg', './spring2019/android2.jpg', './spring2019/android3.jpg', './spring2019/android4.jpg', './spring2019/android5.jpg', './spring2019/android6.jpg']}
                                                        projectLeadersImages={['./leaders/Ingelbert.JPG', './leaders/Emily.JPG', './leaders/Srivats.JPG']}
                                                        projectLeaders={['Ingelbert Figueroa', 'Emily Pascua', 'Srivats Venkataraman']}
                                                        />
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>                                        
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fall2018projects">
                                        <Tab.Container defaultActiveKey="F2018beginner">
                                            <Nav className="project-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="F2018beginner">Beginner</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="F2018advanced">Advanced</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                
                                                <Tab.Pane eventKey="F2018beginner">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='In the Arduino Car Project, students will design and build their own remote controlled car. Students will learn to use Arduinos and various types of sensors. They will work with software and hardware. '
                                                        technologies={['C++', 'Arduino']}
                                                        poster='./fall2018/fall-2018-flyer.png'
                                                        projectImages={['./fall2018/arduino1.jpg', './fall2018/arduino2.jpg', './fall2018/arduino3.jpg', './fall2018/arduino4.jpg', './fall2018/arduino5.jpg', './fall2018/arduino6.jpg']}
                                                        projectLeadersImages={['./leaders/Gio G.jpg', './leaders/brian.JPG']}
                                                        projectLeaders={['Giovanni Garcia', 'Brian Hernandez']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="F2018advanced">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="In the Social Media Project, students will collaborate on GitHub to build a social media platform. They will learn to work in teams and be exposed to new technologies. View the project: https://github.com/PranilDahal/Eagle-Post"
                                                        technologies={['Java', 'JavaScript', 'MySQL', 'Vue.js', 'Maven wrapper', 'Git/GitHub version control']}
                                                        poster='./fall2018/fall-2018-flyer.png'
                                                        projectImages={['./fall2018/social1.jpg', './fall2018/social2.jpg', './fall2018/social3.jpg']}
                                                        projectLeadersImages={['./leaders/pranil.JPG']}
                                                        projectLeaders={['Pranil Dahal']}
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

export default Projects;