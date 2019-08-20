import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NewsHomeBox from './NewsHomeBox.js'

const NewsHome =(props)=> {
  const size = 3
  const news = []
  for(let i = 0; i <= size; i++ ){
  	console.log(props.events[i])
  	news.push(<NewsHomeBox news={props.events[i]}/>)
  }
  return (
    <div>{news}</div>
  );
}

export default NewsHome;