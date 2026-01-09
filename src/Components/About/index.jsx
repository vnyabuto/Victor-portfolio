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
<<<<<<< HEAD
  I’m a dedicated Data Scientist and Machine Learning Engineer with a strong foundation in mathematics, statistics, and software systems. My expertise lies in building intelligent, data-driven solutions — from predictive modeling and anomaly detection to macroeconomic forecasting and gesture-based applications.
  <br /><br />
  I specialize in Python and the broader data science stack (Pandas, scikit-learn, TensorFlow, OpenCV, and Prophet), and I've delivered real-world systems like BitPredictor (crypto price forecasting), Log Anomaly Detectors, and Reddit Sentiment Trackers. I also build web-based dashboards with tools like Streamlit, Flask, and React to make these systems accessible and impactful.
  <br /><br />
  While I have full-stack experience (especially with Django, Node.js, and MongoDB), my core passion is leveraging AI to solve real-world problems — from health prediction tools to event-driven stock analyzers. I frequently deploy and host solutions using platforms like Hugging Face, Netlify, and GitHub Pages.
  <br /><br />
  I'm also a black belt karate coach with a history of leading university teams like Karatina to national victory. This discipline, strategic thinking, and leadership deeply influence my approach to building systems: focused, adaptable, and performance-driven.
  <br /><br />
  Always learning, always building — let's connect and create something meaningful together.
</h4>



=======
  I am a dedicated Data Scientist and Machine Learning Specialist with a strong background in Fullstack Software Development. My expertise encompasses advanced data science techniques, machine learning algorithms, and predictive modeling, complemented by my proficiency in the MERN stack—MongoDB, Express.js, React, and Node.js.
  <br /><br />
  My passion lies in creating dynamic and responsive web applications and data-driven solutions. I am adept at using technologies such as Python, scikit-learn, TensorFlow, and OpenCV for developing and deploying machine learning models. Additionally, I am skilled in Java, Spring Boot, MySQL, C++, C#, and PHP, with experience in cloud platforms like AWS and Azure.
  <br />
  I thrive in collaborative environments and utilize Agile methodologies to deliver high-quality software. My commitment to continuous learning and innovation drives me to stay abreast of emerging technologies and create impactful, scalable solutions. 
  <br /><br />
  Beyond my technical expertise, I am a seasoned karate coach with a black belt. I have successfully led teams like Karatina University to victory in tournaments from regionals to nationals, demonstrating leadership and discipline. Let’s connect and build something transformative together.
</h4>

>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
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