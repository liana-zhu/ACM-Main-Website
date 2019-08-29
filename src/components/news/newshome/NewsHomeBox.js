import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './newshomebox.css';


const NewsHomeBox =(props)=> {
  let propDate = props.news.start.dateTime;
  const date = new Date(propDate);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const dateStr = month+"/"+day+"/"+year;
  return (<div className="news-item">
    <div className="news-header-image" style={{backgroundImage: "url(" + props.news.location + ")"}}></div>
  	<div className="news-text">
    <div className="news-email">By {props.news.creator.email}</div>
    <div><b>{props.news.summary}</b></div>
    <div><div dangerouslySetInnerHTML={{ __html: props.news.description }} className="news-description"></div>
    <div id="date">{props.news.start.dateTime}</div>
    <div id="time">{props.news.start.dateTime}</div>
    </div>
    </div>
    </div>
  );
}

export default NewsHomeBox;