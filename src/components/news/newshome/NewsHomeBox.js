import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './newshomebox.css';


const NewsHomeBox =(props)=> {

  return (<div className="news-item" style={{backgroundImage: "url(" + props.news.location + ")"}}>
  	<div className="news-text">
    <div><b>{props.news.summary}</b></div><br></br>
    <div>Author: {props.news.creator.displayName}</div><br></br>
    <div>Description: {props.news.description}</div><br></br>
    <div id="date">{props.news.start.dateTime}</div><br></br>
    <div id="time">Time: {props.news.start.dateTime}</div><br></br>
    </div>
    </div>
  );
}

export default NewsHomeBox;