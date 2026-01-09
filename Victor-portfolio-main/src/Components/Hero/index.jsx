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
        Hi, I'm <span className="primary">Victor Nyabuto</span>
      </h3>
      <h1 className="heading-1" data-aos="fade-right">
        A <span className="gradient-text">Data Scientist</span> & <span className="gradient-text">Machine Learning Engineer</span>
      </h1>
      <p className="muted" data-aos="fade-up" data-aos-delay="200">
        I am a dedicated expert in Data Science and Machine Learning, specializing in developing predictive models and implementing advanced algorithms to derive actionable insights from complex datasets.
        <br /><br />
        My expertise includes utilizing cutting-edge technologies such as Python, Pandas, Numpy, Matplotlib, Searborn, scikit-learn, TensorFlow, and OpenCV for building and deploying machine learning models. I excel in data preprocessing, feature engineering, model training and evaluation. My skills extend to creating data-driven solutions and visualizing results to support strategic decision-making.
        <br /><br />
        Additionally, I leverage Django for web development and integrate machine learning models into web applications to deliver interactive and intelligent user experiences.
      </p>
      <div className="flex-center buttons-wrapper">
        <Link to='services' smooth={true} className='btn primary' data-aos="fade-left" data-aos-delay="1200" data-aos-offset="50">Learn more</Link>
        <Link to='contact' smooth={true} className='btn' data-aos="fade-left" data-aos-delay="1500" data-aos-offset="50">Get started</Link>
      </div>
    </div>
    <div className="column hero-image" data-aos="fade-left" data-aos-delay="200">
      <img src={me} alt="Victor Nyabuto" />
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