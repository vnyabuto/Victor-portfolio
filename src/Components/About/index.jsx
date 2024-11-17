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
  I am a dedicated Data Scientist and Machine Learning Specialist with a strong background in Fullstack Software Development. My expertise encompasses advanced data science techniques, machine learning algorithms, and predictive modeling, complemented by my proficiency in the MERN stack—MongoDB, Express.js, React, and Node.js.
  <br /><br />
  My passion lies in creating dynamic and responsive web applications and data-driven solutions. I am adept at using technologies such as Python, scikit-learn, TensorFlow, and OpenCV for developing and deploying machine learning models. Additionally, I am skilled in Java, Spring Boot, MySQL, C++, C#, and PHP, with experience in cloud platforms like AWS and Azure.
  <br />
  I thrive in collaborative environments and utilize Agile methodologies to deliver high-quality software. My commitment to continuous learning and innovation drives me to stay abreast of emerging technologies and create impactful, scalable solutions. 
  <br /><br />
  Beyond my technical expertise, I am a seasoned karate coach with a black belt. I have successfully led teams like Karatina University to victory in tournaments from regionals to nationals, demonstrating leadership and discipline. Let’s connect and build something transformative together.
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