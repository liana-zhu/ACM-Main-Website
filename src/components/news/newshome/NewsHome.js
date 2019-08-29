import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NewsHomeBox from './NewsHomeBox.js'

const NewsHome =(props)=> {
  const size = 4
  const news = []
  let i = 0;
  while(news.length != size){
  	if(!props.events[i].summary.includes("Week") && !(typeof props.events[i].location === 'undefined')) news.push(<NewsHomeBox news={props.events[i]}/>)
  	i++; 
  }

  return (
    <div>{news}
    </div>
    
  );
}

export default NewsHome;