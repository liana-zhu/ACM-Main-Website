import React, { Component } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import "./news.scss";

class News extends Component {
  render() {
    return (
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        delay="1"
        animateOnce="true"
      >
        <section className="News-tease">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <div className="subTitle"> news </div>
              <div className="title"> What's Happening </div>
              <div className="description">
                {" "}
                Check our organization's calendar so you won’t miss an upcoming
                event.{" "}
              </div>
              <div className="link-btn mt-4">
                <a className="label px-5" href="/events">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
    );
  }
}

export default News;
