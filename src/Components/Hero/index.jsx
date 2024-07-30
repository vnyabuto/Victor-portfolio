import React from 'react';
import { Link } from 'react-scroll';
import me from '../../assets/me.jpeg';
import Achievement from '../../Commons/Achievement';
import "./Hero.css";

const Hero = () => {
  return (
    <section id='hero'>
      <div className="wrapper info-container">
        <div className="column">
          <h3 className='sub-title'>
            Hi, I'm <span className="primary">Simon Meka</span>
          </h3>
          <h1 className="heading-1" data-aos="fade-right">
            A <span className="gradient-text">Fullstack</span> Software Developer
          </h1>
          <p className="muted" data-aos="fade-up" data-aos-delay="200">
            I am a passionate programmer with a robust proficiency in the comprehensive MERN stack, encompassing MongoDB, Express.js, React, and Node.js. My expertise extends to crafting dynamic and responsive web applications, leveraging cutting-edge technologies to build seamless user experiences and scalable server-side solutions.
            <br /><br />
            On the front-end, I excel in utilizing React to develop highly interactive user interfaces with state-of-the-art features, ensuring optimal performance and responsiveness. My skills in React Native also enable me to deliver cross-platform mobile applications with a native look and feel. On the back-end, I leverage Node.js and Express.js to build efficient, RESTful APIs and robust server-side applications, facilitating smooth communication between client and server.
          </p>
          <div className="flex-center buttons-wrapper">
            <Link to ='services' smooth={true } className='btn primary' data-aos="fade-left" data-aos-delay="1200" data-aos-offset="50">Learn more</Link>
            <Link to ='contact' smooth={true } className='btn' data-aos="fade-left" data-aos-delay="1500" data-aos-offset="50" >Get started</Link>
          </div>
        </div>
        <div className="column hero-image" data-aos="fade-left" data-aos-delay="200">
          <img src={me} alt="" />
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement />
        </div>
      </div>
    </section>
  )
}

export default Hero