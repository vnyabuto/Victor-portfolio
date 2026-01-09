import { whyChooseMe } from '../../sources';
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos="fade-right">
            <span className="gradient-text">About Me</span>
          </h1>
          <div className="sub-title muted" data-aos="fade-left">
            <p>
              I am a dedicated Data Scientist and Machine Learning Engineer with a strong foundation in mathematics, statistics, and software systems. My expertise lies in building intelligent, data-driven solutions — from predictive modeling and anomaly detection to macroeconomic forecasting and gesture-based applications.
            </p>
            <p>
              I specialize in Python and the broader data science stack (Pandas, scikit-learn, TensorFlow, OpenCV, and Prophet), and I have delivered real-world systems like BitPredictor (crypto price forecasting), Log Anomaly Detectors, and Reddit Sentiment Trackers. I also build web-based dashboards with tools like Streamlit, Flask, and React to make these systems accessible and impactful.
            </p>
            <p>
              While I have full-stack experience — especially with Django, Node.js, and MongoDB — my core passion is leveraging AI to solve real-world problems, from health prediction tools to event-driven stock analyzers. I frequently deploy and host solutions using platforms like Hugging Face, Netlify, and GitHub Pages.
            </p>
            <p>
              I am also a black belt karate coach with a history of leading university teams like Karatina to national victory. This discipline, strategic thinking, and leadership deeply influence my approach to building systems: focused, adaptable, and performance-driven.
            </p>
            <p>
              Always learning, always building — let’s connect and create something meaningful together.
            </p>
          </div>
        </div>

        <div className="group">
          {whyChooseMe.map((item, index) => (
            <div className="flex-center group-item" data-aos="fade-right" key={index}>
              <div className="flex-center icon-wrapper">{item.icon}</div>
              <h4 className="title">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
