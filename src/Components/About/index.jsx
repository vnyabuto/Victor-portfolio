import React from 'react'
import "./About.css"
import { whyChooseMe } from '../../sources';
const About = () => {
  return (
    <section id="about">
    <div className="wrapper">
      <div className="section-header">
        <h1 className="heading-1" data-aos="fade-right">
          <span className="gradient-text">About Me</span>
        </h1>
        <h4 className="sub-title muted" data-aos="fade-left">
  I'm a versatile Software Engineer and Data Scientist with a passion for building impactful systems that bridge intelligent automation with practical usability. With a strong background in full-stack development using technologies like React, Django, Node.js, and MongoDB, I specialize in creating scalable web applications backed by smart, data-driven logic.
  <br /><br />
  My work often blends traditional software engineering with machine learning. From AI-powered financial predictors and Sentiment analyzers to real-time log anomaly detectors and gesture-based apps, I build solutions grounded in real-world use cases. I leverage tools like Python, TensorFlow, scikit-learn, and Streamlit — always pushing for meaningful insights and clean delivery.
  <br /><br />
  I’m also deeply committed to project excellence, GitHub-ready code, and end-to-end deployment — whether it's on Hugging Face, Netlify, or custom cloud solutions. With a strong understanding of databases (MySQL, MongoDB, PostgreSQL), RESTful APIs, and user-centered design, I focus on reliability, usability, and intelligent interaction.
  <br /><br />
  Beyond tech, I’m a certified black belt karate coach who’s led university teams like Karatina to national victories. That same discipline and leadership drive my work in tech — I stay focused, adaptive, and results-oriented.
  <br /><br />
  Let’s connect and build the future — one smart solution at a time.
</h4>


      </div>
      <div className="group">
        {
          whyChooseMe.map((list, index) => (
            <div className='flex-center group-item' data-aos="fade-right" key={index}>
              <div className='flex-center icon-wrapper'>
                {list.icon}
              </div>
              <h4 className="title">{list.title}</h4>
            </div>
          ))
        }
      </div>
    </div>
  </section>
  
  )
}

export default About