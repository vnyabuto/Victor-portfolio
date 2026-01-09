import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";

import { DiDjango } from "react-icons/di";
import { FaCogs, FaFacebookSquare, FaInstagram, FaLaptopCode, FaLinkedin, FaMobileAlt, FaReddit, FaBrain, FaChartLine } from "react-icons/fa";

import { GiBrain } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail, MdOutlineSupportAgent } from "react-icons/md";
import { PiDatabaseFill } from "react-icons/pi";
import { RiExchange2Fill } from "react-icons/ri";
import { SiFlask, SiMongodb, SiMysql, SiPandas, SiPython, SiScikitlearn, SiStreamlit, SiTensorflow } from 'react-icons/si';

// Project images
import bitpredictorImg from './Components/Projects/Bitpredictor.jpg';
import diabetesImg from './Components/Projects/DiabetesPredictor.jpg';
import gamexpredicImg from './Components/Projects/GameXPredic.jpg';
import LogAnomalyDetectorImg from "./Components/Projects/LogAnomalyDetector.jpg";
import macroImg from './Components/Projects/MacroAnalyzer.jpg';
import redditSentimentImg from './Components/Projects/RedditSentiment.jpg';

export const tabs = [
    { name: "About Me", id: 'about' },
    { name: "Skill", id: 'skill' },
    { name: "Services", id: 'services' },
    { name: "Projects", id: 'projects' },
    { name: "Testimonials", id: 'testimonials' },
];

export const whyChooseMe = [
    { title: "Unmatched Expertise", icon: <GrUserExpert />, link: "" },
    { title: "Comprehensive Market Analysis", icon: <IoMdAnalytics />, link: "" },
    { title: "Dedicated Client Support", icon: <MdOutlineSupportAgent />, link: "" },
    { title: "Innovative Marketing Strategies", icon: <RiExchange2Fill />, link: "" },
];

export const services = [
    {
        name: "Full Stack & AI-Powered Development",
        icon: <FaLaptopCode />,
        description: `I build robust full stack applications integrated with intelligent features powered by data science and machine learning. From backend systems like my Log Anomaly Detector to frontend dashboards like BitPredictor and macroeconomic analyzers, I bring performance and intelligence together.`,
    },
    {
        name: "Data Science & Machine Learning Solutions",
        icon: <FaChartLine />,
        description: `I deliver data-driven solutions using Python, Scikit-learn, TensorFlow, and more. From financial forecasting to disease prediction, my models provide actionable insights that drive smarter decision-making.`,
    },
    {
        name: "System Design & IT Consultancy",
        icon: <FaCogs />,
        description: `I help businesses and teams plan, structure, and optimize their digital infrastructure. From designing database architecture to selecting the right deployment stack, my consultancy leads to reliable and scalable systems.`,
    },
    {
        name: "Interactive Dashboard & API Development",
        icon: <FaServer />,
        description: `I specialize in building user-friendly dashboards and scalable APIs for analytics, model deployment, and log monitoring. Tools like Streamlit, Flask, and Django power my web-based solutions.`,
    },
    {
        name: "Cross-Platform Frontend Engineering",
        icon: <FaMobileAlt />,
        description: `Using React, TailwindCSS, and responsive design principles, I craft high-performance interfaces for web apps that look great and work flawlessly across all devices.`,
    },
];

export const skills = [
    {
        title: "UI/UX & Design",
        data: [
            { skill: "Figma", level: "Experienced" },
            { skill: "Sketch", level: "Intermediate" },
            { skill: "Adobe XD", level: "Intermediate" },
        ],
    },
    {
        title: "Frontend Development",
        data: [
            { skill: "HTML", level: "Experienced" },
            { skill: "CSS", level: "Experienced" },
            { skill: "JavaScript", level: "Experienced" },
            { skill: "Tailwind", level: "Intermediate" },
            { skill: "Bootstrap", level: "Experienced" },
            { skill: "React", level: "Experienced" },
        ],
    },
    {
        title: "Backend Development",
        data: [
            { skill: "Node JS", level: "Beginner" },
            { skill: "PostgreSQL", level: "Intermediate" },
            { skill: "Java", level: "Intermediate" },
            { skill: "C#", level: "Intermediate" },
            { skill: "PHP", level: "Experienced" },
            { skill: "Python", level: "Experienced" },
            { skill: "MySQL", level: "Experienced" },
        ],
    },
    {
        title: "Data Science & Machine Learning",
        data: [
            { skill: "Python", level: "Experienced" },
            { skill: "TensorFlow", level: "Intermediate" },
            { skill: "scikit-learn", level: "Experienced" },
            { skill: "Pandas", level: "Experienced" },
            { skill: "NumPy", level: "Experienced" },
            { skill: "OpenCV", level: "Intermediate" },
            { skill: "Keras", level: "Intermediate" },
            { skill: "R", level: "Beginner" },
        ],
    },
];

export const projects = [
    {
        id: 1,
        title: 'BitPredictor - Bitcoin Price Forecasting',
        category: "Machine Learning / Time Series",
        image: bitpredictorImg,
        description: `BitPredictor leverages machine learning to forecast Bitcoin price movements using historical market data, Reddit sentiment, and time series models like LSTM and XGBoost. Featuring an interactive Streamlit dashboard, the system enables users to visualize predictions, test thresholds, and gain insight into future crypto trends.`,
        demoLink: "https://github.com/vnyabuto/BitPredictor",
        stack: [
            { name: "Python", icon: <SiPython />, iconColor: "#3776AB" },
            { name: "Streamlit", icon: <SiStreamlit />, iconColor: "#FF4B4B" },
            { name: "TensorFlow", icon: <SiTensorflow />, iconColor: "#FF6F00" },
            { name: "XGBoost", icon: <FaChartLine />, iconColor: "#2D9CDB" },
            { name: "LSTM", icon: <GiBrain />, iconColor: "#9b59b6" },
        ],
    },
    {
        id: 2,
        title: 'GameXPredic - Video Game Sales Prediction System',
        category: "Data Science",
        image: gamexpredicImg,
        description: `GameXPredic is a Django-based system that predicts video game sales using machine learning. It allows publishers and stakeholders to input game attributes and receive real-time sales forecasts, helping with market strategy and investment decisions. The platform also includes data visualization dashboards for insights.`,
        demoLink: "https://github.com/vnyabuto/gamexpredic",
        stack: [
            { name: "Python", icon: <SiPython />, iconColor: "#3776AB" },
            { name: "Pandas", icon: <SiPandas />, iconColor: "purple" },
            { name: "Django", icon: <DiDjango />, iconColor: "darkgreen" },
            { name: "Scikit-learn", icon: <SiScikitlearn />, iconColor: "#F7931E" },
            { name: "MongoDB", icon: <SiMongodb />, iconColor: "limegreen" },
        ],
    },
    {
        id: 3,
        title: 'Diabetes Risk Predictor',
        category: "Health",
        image: diabetesImg,
        description: `A machine learning application predicting diabetes risk. Users can input health metrics and receive risk assessments, helping with proactive health management.`,
        demoLink: "https://huggingface.co/spaces/Victorconrad/diabetes-predictor",
        stack: [
            { name: "Python", icon: <SiPython />, iconColor: "#3776AB" },
            { name: "Gradio", icon: <FaRobot />, iconColor: "#FF4B4B" },
            { name: "Hugging Face", icon: <FaSmile />, iconColor: "#FFD21F" },
        ],
    },
    {
        id: 4,
        title: 'Macroeconomic Event Analyzer',
        image: macroImg,
        category: "Finance / AI",
        description: `This advanced Streamlit dashboard forecasts the impact of macroeconomic events (like CPI releases or Fed decisions) on various market sectors. It combines historical stock ETF data and macro indicators using XGBoost and Prophet. The dashboard features intuitive sliders, interactive charts, and detailed explanations for data-driven investors.`,
        demoLink: "https://macroecon-event-analyzer.streamlit.app/",
        stack: [
            { name: "Python", icon: <SiPython />, iconColor: "#3776AB" },
            { name: "Streamlit", icon: <SiStreamlit />, iconColor: "#FF4B4B" },
            { name: "Yahoo Finance API", icon: <FaChartLine />, iconColor: "#720e9e" },
            { name: "Prophet", icon: <FaFacebookSquare />, iconColor: "#4267B2" },
        ],
    },
    {
        id: 5,
        title: 'Reddit Sentiment Tracker',
        image: redditSentimentImg,
        category: "NLP",
        description: `This NLP-powered dashboard analyzes Reddit sentiment across finance-related subreddits. It scrapes threads, processes comments using Vader, and visualizes sentiment trends over time.`,
        demoLink: "https://reddit-sentiment-tracker.streamlit.app/",
        stack: [
            { name: "Python", icon: <SiPython />, iconColor: "#3776AB" },
            { name: "PRAW", icon: <FaReddit />, iconColor: "#FF4500" },
            { name: "NLTK / Vader", icon: <FaBrain />, iconColor: "#6a0dad" },
            { name: "Streamlit", icon: <SiStreamlit />, iconColor: "#FF4B4B" },
        ],
    },
    {
        id: 6,
        title: 'Log Anomaly Detector',
        image: LogAnomalyDetectorImg,
        category: "Apps",
        description: `A Flask-powered web app detecting anomalies in system logs using Isolation Forest. Users upload logs, visualize anomalies, and store results in MySQL.`,
        demoLink: "https://github.com/vnyabuto/log-anomaly-detector",
        stack: [
            { name: "Flask", icon: <SiFlask />, iconColor: "gray" },
            { name: "MySQL", icon: <SiMysql />, iconColor: "#00758F" },
            { name: "Pandas", icon: <SiPandas />, iconColor: "purple" },
            { name: "Scikit-learn", icon: <SiScikitlearn />, iconColor: "orange" },
            { name: "MariaDB", icon: <PiDatabaseFill />, iconColor: "deepskyblue" },
        ],
    },
];

export const clients = [
    {
        image: client1,
        name: 'Simon Meka',
        role: 'CEO, LivinAI',
        review: `Victor brought immense value to our project with his expertise in full-stack development and machine learning. His end-to-end contribution was key to our success.`,
    },
    {
        image: client2,
        name: 'Alice Johnson',
        role: 'CTO, TechCorp Ltd',
        review: `Victor's expertise in full stack development, data science, and machine learning has been a game-changer for our organization.`,
    },
    {
        image: client3,
        name: 'John Phil',
        role: 'Product Manager, Web Solutions',
        review: `Victor created a stunning, responsive website that integrates intelligent features, making it both engaging and innovative.`,
    },
    {
        image: client4,
        name: 'Simon Ongachi',
        role: 'Founder, Lotty Fashions',
        review: `Victor’s expertise in full stack development and data science resulted in a high-performance application that boosted productivity.`,
    },
    {
        image: client5,
        name: 'Bonface Mutua',
        role: 'CEO, Nectar Series Ltd',
        review: `Victor’s IT consultancy transformed our tech infrastructure, making it more secure, efficient, and data-driven.`,
    },
];

export const contactOptions = [
    { title: "Email", value: "vnyabuto00@gmail.com", icon: <MdOutlineAlternateEmail />, link: "mailto:vnyabuto00@gmail.com" },
    { title: "WhatsApp", value: "+254 704 076311", icon: <FaWhatsapp />, link: "https://wa.me/254704076311" },
    { title: "Phone Number", value: "+254 704076311 / +254 707651961", icon: <IoCallOutline /> },
    { title: "Address", value: "Nairobi, Kenya", icon: <IoLocationOutline /> },
];

export const socialHandles = [
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/victor.nyabuto.7370/" },
    { name: "Facebook", icon: <FaFacebookSquare />, link: "https://web.facebook.com/victor.conrad.10/" },
    { name: "Twitter", icon: <FaXTwitter />, link: "https://x.com/Vic46849339" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/victor-nyabuto-7b9a15283/" },
];

export const footer = [
    { title: "Explore", routes: [ { name: "About Me", id: 'about' }, { name: "Skill", id: 'skill' } ] },
    { title: "Trusted", routes: [ { name: "Services", id: 'services' }, { name: "Projects", id: 'projects' }, { name: "Testimonials", id: 'testimonials' } ] },
    { title: "Others", routes: [ { name: "Privacy Policy" }, { name: "Terms and Conditions" }, { name: "Cookie Policy" } ] },
];
