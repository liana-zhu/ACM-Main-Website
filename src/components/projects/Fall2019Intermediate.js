import React from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"

class Fall2019Intermediate extends React.Component {
    render() {
        return (
            <div>
                <img src={require('./pictures/intermediate.png')} class="img-fluid project-poster"></img><br></br><br></br>

                <b>Looking for a bit of a challenge?</b> In this workshop, you will create a chat application (a chapplication) 
                using React, a Javascript web framework that everybody and their grandmas use. Learning how to use React could 
                score you major brownie points to potential recruiters.<br></br><br></br>

                <h2>❖ <span class="highlight-text">Expected Technologies in this Project:</span></h2><br></br>
                <ul>
                    <li>React.js</li>
                    <li>Git/Github</li>
                    <li>Firebase</li>
                    <li>Node.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>

                <br></br><b>The deadline to apply is September 13, 2019. Join today before it's too late!</b><br></br><br></br>
                <Button variant="success" size="lg" href="https://docs.google.com/forms/d/e/1FAIpQLScyDUwuyDL7dYeohFfDEjoU8zUPJ01HD9BSQAYk55-rDpEOcg/viewform">Join Now!</Button>
            </div>
        )
    }
}

export default Fall2019Intermediate