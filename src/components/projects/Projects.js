import React from 'react'
import firebase from '../professional/firebaseConfig.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Row, Col, Tab, Nav, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"
import LegacyProject from './LegacyProject'
import NewProject from './NewProject'

class Projects extends React.Component {
    state = {
        beginnerProject: null,
    }

    componentDidMount() {
        firebase.firestore().collection("beginnerProject").get()
            .then(snapshot => {
                const project = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    project.push(data)
                })
                this.setState({ beginnerProject: project })
            })
            .catch(error => console.log(error));

        firebase.firestore().collection("advanceProject").get()
            .then(snapshot => {
                const project = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    project.push(data)
                })
                this.setState({ advanceProject: project })
            })
            .catch(error => console.log(error));
    }

    render() {
        let buttonB = <Button variant="success" size="lg" href="https://forms.gle/bu8YRaxLFfTDXppN7">Join Now!</Button>
        let projectLeaderImageB = ["./leaders/Sean.jpg", "./leaders/Robert.jpg", "./leaders/Lillian.jpg", "./leaders/Nshan.jpg", "./leaders/Jorge.jpg"]
        let projectLeaderNameB = ["Sean", "Robert De La Costa", "Lillian", "Nshan Kazaryan", "Jorge Mata"]

        let buttonA = <Button variant="success" size="lg" href="https://forms.gle/egU7m8ra9XXh5NJ59">Join Now!</Button>
        let projectLeaderImageA = ["./leaders/Omar.jpg", "./leaders/Jorge.jpg"]
        let projectLeaderNameA = ["Omar Eclicerio", "Jorge Mata"]

        return (
            <div className="project-body">
                <div>
                    <div className="project-title-text">
                        <p></p>
                        <p>Looking for experience?</p>
                        <p>Participate in our projects!</p>
                    </div>
                    <div className="project-title-card"></div>
                </div>
                {/*
                Remember to update dates in the disclaimer:
                1. Project signups open
                2. Signup deadline
                */}
                <div className="disclaimer-body">
                    <h3 className="disclaimer_header"><b>Disclaimer!</b></h3>
                    <span className="disclaimer"><b>1. You must be a member of ACM to participate in the projects! If you are not a member,</b>
                        <b><i> you will not be allowed in.</i></b></span><br></br>
                    <span className="disclaimer"><b>2. Space is limited, so admittance to these projects are first come, first served.
                    </b></span><br></br>
                    <span className="disclaimer"><b>3. Project signups will open on <i>
                        Friday, August 27, 2021.</i></b></span><br></br>
                    <span className="disclaimer"><b>4. Signup deadline for the projects is <i>
                        Saturday, September 4, 2021.</i></b></span><br></br>
                </div>

                <div className="videoWrapper">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item"
                            src="https://www.youtube.com/embed/yfbfm_L74Do"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>

                <div className="card project-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="fall2021projects">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="project-nav-link anchor-white" eventKey="fall2021projects">Fall 2021</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="project-nav-link anchor-white" eventKey="spring2021projects">Spring 2021</Nav.Link>
                                    </Nav.Item>
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
                                    {/*
                                    New projects go under this block of comment
                                    Steps:
                                    1. Copy the <Tab.Pane> under this block of comment.
                                    2. Read and follow the block of comment under this block of comment.
                                    3. After following the steps above, then update the page with new project information.
                                    4. Remember to update dates in the disclaimer above.
                                    */}
                                    <Tab.Pane eventKey="fall2021projects">
                                        <Tab.Container defaultActiveKey="F2021beginner">
                                            <Nav className="project-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="F2021beginner">Beginner</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="F2021advanced">Advanced</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                <Tab.Pane eventKey="F2021beginner">



                                                    <div className="project-description">
                                                        <Container>
                                                            <div class="row justify-content-start space">


                                                                <div class="col-xs-1 col-sm-6 col-md-5 col-lg-4">

                                                                    {
                                                                        this.state.beginnerProject &&
                                                                        this.state.beginnerProject.map(beginnerProject => {
                                                                            return (
                                                                                <img src={beginnerProject.imgUrl} className="img-fluid programs-poster" alt="project poster"></img>
                                                                            )
                                                                        })
                                                                    }

                                                                </div>


                                                                <div class="col-xs-1 col-sm-3 col-md-4 col-lg-5">
                                                                    <b><p>Learn how to create a website of your own from scratch!</p> </b> <b><p>Concepts such as Website Design, Structure, Functionality, Animated and Dynamic objects will be enfored throughout each workshop!</p></b><br></br><br></br>

                                                                    <b><p>Signup deadline for the Fall 2021 projects is Saturday, September 4, 2021</p></b> <br></br><br></br>

                                                                    {buttonB}<br></br><br></br>

                                                                    <h2>❖ <span className="highlight-text">What you will learn:</span></h2>

                                                                    <b><ul>
                                                                        <li>Visual Studio Code</li>
                                                                        <li>HTML</li>
                                                                        <li>CSS</li>


                                                                    </ul></b>
                                                                </div>
                                                            </div>
                                                        </Container>
                                                        <br></br>

                                                        <h2>❖ <span className="highlight-text">Project Leaders:</span></h2>
                                                        <br></br>
                                                        <div className="carousel">
                                                            <Carousel infiniteLoop>
                                                                {projectLeaderImageB.map((value, index) => {
                                                                    return <div>
                                                                        <img className='carousel-leader-image' src={require('' + value)} alt="leader" />
                                                                        <p className="legend">{projectLeaderNameB[index]}</p>
                                                                    </div>
                                                                })}
                                                            </Carousel>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="F2021advanced">
                                                    <div className="project-description">
                                                        <Container>
                                                            <div class="row justify-content-start space">
                                                                <div class="col-sm-1 col-md-4">

                                                                    {
                                                                        this.state.advanceProject &&
                                                                        this.state.advanceProject.map(advanceProject => {
                                                                            return (
                                                                                <img src={advanceProject.imgUrl} className="img-fluid programs-poster" alt="project poster"></img>
                                                                            )
                                                                        })
                                                                    }

                                                                </div>
                                                                <div class="col-sm-1 col-md-5">
                                                                    <b><p>Learn Video Game Development using the Unity game engine and the Visual Studio IDE!</p> </b> <b><p>Code and build your own desktop version of Pacman. Learn to create a beloved arcade video game from scratch!</p></b><br></br><br></br>

                                                                    <b><p>Signup deadline for the Fall 2021 projects is Saturday, September 4, 2021</p></b> <br></br><br></br>

                                                                    {buttonA}<br></br><br></br>

                                                                    <h2>❖ <span className="highlight-text">What you will learn:</span></h2>

                                                                    <b><ul>
                                                                        <li>Unity</li>
                                                                        <li>Visual</li>
                                                                        <li>C#</li>


                                                                    </ul></b>
                                                                </div>
                                                            </div>
                                                        </Container>
                                                        <br></br>

                                                        <h2>❖ <span className="highlight-text">Project Leaders:</span></h2>
                                                        <br></br>
                                                        <div className="carousel">
                                                            <Carousel infiniteLoop>
                                                                {projectLeaderImageA.map((value, index) => {
                                                                    return <div>
                                                                        <img className='carousel-leader-image' src={require('' + value)} alt="leader" />
                                                                        <p className="legend">{projectLeaderNameA[index]}</p>
                                                                    </div>
                                                                })}
                                                            </Carousel>
                                                        </div>
                                                    </div>
                                                    
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="spring2021projects">
                                        <Tab.Container defaultActiveKey="S2021beginner">
                                            <Nav className="project-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="S2021beginner">Beginner</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link-tab anchor-white" eventKey="S2021advanced">Advanced</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                <Tab.Pane eventKey="S2021beginner">
                                                    <NewProject
                                                        opener="Introducing the classic Flappy Bird game, but with a twist!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Have a chance to learn about game design and how to create a user interface with the Pygame Library!"
                                                        technologies={["Python", "PyGame", "NEAT"]}
                                                        poster="./spring2021/FlappyBird Project.png"
                                                        linkToSignUp="https://forms.gle/L8CWwrYDKVRaWQjo7"
                                                        // Dynamic button
                                                        // Use '/' not '-' for dates to prevent issues on Firefox.
                                                        // openDate="01/28/2020"
                                                        // opentime="14:59:59"
                                                        // deadlineDate="02/09/2020"
                                                        // deadlineTime="17:59:59"
                                                        projectLeadersImages={["./leaders/Alvin.jpg", "./leaders/Lillian.jpg", "./leaders/Gregory.jpg", "./leaders/Sean.jpg"]}
                                                        projectLeaders={["Alvin Lew", "Lillian Leung", "Gregory Celestino", "Sean Chung"]}
                                                    />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="S2021advanced">
                                                    <NewProject
                                                        opener="Learn Flutter App Development using the Android Studio IDE!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Ever wanted to learn app development? Well, here is your chance to learn by using Flutter."
                                                        technologies={["Android Studio", "Dart", "Flutter", "Pub"]}
                                                        poster="./spring2021/Flutter Project.png"
                                                        linkToSignUp="https://forms.gle/GACmPqv39hLoRRqt7"
                                                        // Dynamic button
                                                        //Use '/' not '-' for dates to prevent issues on Firefox.
                                                        // openDate="01/28/2020"
                                                        // opentime="14:59:59"
                                                        // deadlineDate="02/09/2020"
                                                        // deadlineTime="17:59:59"
                                                        projectLeadersImages={["./leaders/Jorge.jpg", "./leaders/Julio.jpg", "./leaders/Erica.png", "./leaders/Daniel.jpg", "./leaders/Robert.jpg", "./leaders/Adrian.jpg"]}
                                                        projectLeaders={["Jorge Mata", "Julio Santamaria", "Erica Santos", "Daniel Ramirez", "Robert De La Costa", "Adrian Salgado Lopez"]}
                                                    />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                    {/*
                                    Most recent projects go under this block of comment.
                                    Steps:
                                    1. Copy the <Tab.Pane> above for the most recent projects*
                                    2. Paste it beneath this block of comment
                                    3. Modify it by changing it from NewProject to LegacyProject
                                    4. Remove linkToSignUp and dynamic button. Replace it with projectImages
                                    5. Add images to the projectImages
                                    6. If you did everything correctly, there should be no "Join Now" button for the past projects.
                                    */}
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
                                                    <LegacyProject
                                                        opener="Come and explore the world of modding with Minecraft!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Learn how to code your own blocks, items, and craftables! Make those beautiful 16x16 pixel images come to life in this blocky, pixelated, and skittle-filled world of Minecraft!"
                                                        technologies={["Java", "Forge", "IntelliJ IDEA", "Gradle", "Git", "JSON"]}
                                                        poster="./fall2020/minecraft-mod.png"
                                                        projectImages={[
                                                            './fall2020/minecraft1.jpg'
                                                        ]}
                                                        projectLeadersImages={["./leaders/Jorge.jpg", "./leaders/Omar.jpg", "./leaders/Sameen.jpg", "./leaders/Daniel.jpg", "./leaders/Erica.png", "./leaders/Julio.jpg"]}
                                                        projectLeaders={["Jorge Mata", "Omar Eclicerio", "Sameen Khan", "Daniel Ramirez", "Erica Santos", "Julio Santamaria"]}
                                                    />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="F2020advanced">
                                                    <LegacyProject
                                                        opener="Ever wanted to make your own weird commands on Discord?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Well, now is your chance to learn how to make your own Discord bot using JavaScript! We will also go through a few API's as the ultimate pièce de résistance."
                                                        technologies={["JavaScript", "SQL", "Visual Studio Code", "JSON", "API calls", "Node.js"]}
                                                        poster="./fall2020/discord-bot.png"
                                                        projectImages={[
                                                            './fall2020/discord-project1.jpg'
                                                        ]}
                                                        projectLeadersImages={["./leaders/Alvin.jpg", "./leaders/Gregory.jpg", "./leaders/Robert.jpg", "./leaders/DavidM.jpg", "./leaders/Adrian.jpg", "./leaders/Lillian.jpg"]}
                                                        projectLeaders={["Alvin Lew", "Gregory Celestino", "Robert de la Costa", "David Melendez", "Adrian Lopez", "Lillian Leung"]}
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
                                                        projectLeadersImages={['./leaders/Andrew.JPG', './leaders/Cristian.JPG', './leaders/Elton.JPG']}
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
                                                        projectLeadersImages={['./leaders/Deric.JPG', './leaders/BrianH.JPG']}
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
                                                        projectLeadersImages={['./leaders/Gio G.jpg', './leaders/BrianH.JPG']}
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
                                                        projectLeadersImages={['./leaders/PranilD.JPG']}
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