import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './newshomebox.css';


const NewsHomeBox =(props)=> {

  return (<div className="news-item">
    <div className="news-header-image" style={{backgroundImage: "url(" + props.news.location + ")"}}></div>
  	<div className="news-text">
    <div className="news-email">By {props.news.creator.email}</div>
    <div><b>{props.news.summary}</b></div>
    <div><div className="news-description">{props.news.description}</div>
    <div id="date">{props.news.start.dateTime}</div>
    <div id="time">{props.news.start.dateTime}</div>
    </div>
    </div>
    </div>
  );
}

export default NewsHomeBox;