import React from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"

class Fall2019Beginner extends React.Component {
    render() {
        return (
            <div>
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

                <br></br><b>The deadline to apply is September 13, 2019. Join  today before it's too late!</b><br></br><br></br>
                <Button variant="success" size="lg" href="https://docs.google.com/forms/d/e/1FAIpQLScyDUwuyDL7dYeohFfDEjoU8zUPJ01HD9BSQAYk55-rDpEOcg/viewform">Join Now!</Button>
            </div>
        )
    }
}

export default Fall2019Beginner