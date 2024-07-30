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
          I am a dedicated Fullstack Software Developer with a strong proficiency in the MERN stack—MongoDB, Express.js, React, and Node.js. My passion lies in creating dynamic and responsive web applications that offer seamless user experiences and robust server-side solutions. Beyond the MERN stack, I am skilled in Java, Spring Boot, MySQL, C++, C#, and PHP, and I have experience with cloud platforms like AWS and Azure. I thrive in collaborative environments, leveraging Agile methodologies to deliver high-quality software. My commitment to continuous learning and innovation drives me to stay abreast of emerging technologies and to create impactful, scalable solutions. Let’s connect and build something transformative together.
          </h4>
        </div>
        <div className="group">
          {
            whyChooseMe.map((list, index)=>(
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