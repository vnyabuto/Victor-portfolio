import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import { IoMdAnalytics } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent, MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaLinkedin, FaLaptopCode } from "react-icons/fa6";
import { FaFacebookSquare, FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi';
import { DiReact } from "react-icons/di";
import { FaNodeJs, FaMobileAlt, FaCogs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
<<<<<<< HEAD
import { TbBrandReactNative } from "react-icons/tb";
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiPython, SiStreamlit, SiMysql, SiTensorflow, SiPandas, SiScikitlearn   } from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import bitpredictorImg from './Components/Projects/Bitpredictor.jpg';
import gamexpredicImg from './Components/Projects/GameXPredic.jpg'; 
import macroImg from './Components/Projects/MacroAnalyzer.jpg';
import redditSentimentImg from './Components/Projects/RedditSentiment.jpg';
import { DiDjango } from 'react-icons/di';
import diabetesImg from './Components/Projects/DiabetesPredictor.jpg'; 
import LogAnomalyDetectorImg from "./Components/Projects/LogAnomalyDetector.jpg";
import { FaRobot, FaSmile } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import { GiBrain } from "react-icons/gi";
import { FaReddit } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { SiFlask, } from "react-icons/si";
import { PiDatabaseFill } from "react-icons/pi";
import { FaServer } from "react-icons/fa";

=======
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6

export const tabs = [
    { name: "About Me", id: 'about' },
    { name: "Skill", id: 'skill' },
    { name: "Services", id: 'services' },
    { name: "Projects", id: 'projects' },
    { name: "Testimonials", id: 'testimonials' },
];

export const whyChooseMe = [
    {
        title: "Unmatched Expertise",
        icon: <GrUserExpert />,
        link: "",
    },
    {
        title: "Comprehensive Market Analysis",
        icon: <IoMdAnalytics />,
        link: "",
    },
    {
        title: "Dedicated Client Support",
        icon: <MdOutlineSupportAgent />,
        link: "",
    },
    {
        title: "Innovative Marketing Strategies",
        icon: <RiExchange2Fill />,
        link: "",
    },
];

export const services = [
    {
<<<<<<< HEAD
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
            {
                skill: "Figma",
                level: "Beginner",
            },
            {
                skill: "Canva",
                level: "Intermediate",
            },
            {
                skill: "Photoshop",
                level: "Beginner",
=======
        name: "Full Stack & Data Science Solutions",
        icon: <FaLaptopCode />,
        description: `I provide end-to-end solutions, specializing in building scalable and robust applications using modern technologies for both front-end and back-end development. Additionally, I apply data-driven approaches, such as my video game sales prediction model, to deliver powerful insights and enhance decision-making.`,
    },
    {
        name: "UI/UX Design",
        icon: <FaPaintBrush />,
        description: `Creating intuitive and engaging user interfaces, I focus on delivering exceptional user experiences that are both visually appealing and easy to navigate.`,
    },
    {
        name: "Code and IT Consultancy",
        icon: <FaCogs />,
        description: `Offering expert advice and strategic solutions, I help businesses optimize their IT infrastructure and improve their coding practices for better performance and security.`,
    },
    {
        name: "Graphics Design",
        icon: <FaPaintBrush />,
        description: `Crafting visually compelling designs, I bring ideas to life through creative graphic design services that enhance branding and marketing efforts.`,
    },
    {
        name: "Cross-Platform Development",
        icon: <FaMobileAlt />,
        description: `Developing high-quality, cross-platform applications that ensure seamless functionality and engaging user experiences across web and mobile platforms. Leveraging React and other modern frameworks, I deliver versatile solutions that perform flawlessly on multiple devices.`,
    },
];

export const skills = [
    {
        title: "UI/UX",
        data: [
            {
                skill: "Figma",
                level: "Experienced",
            },
            {
                skill: "Sketch",
                level: "Intermediate",
            },
            {
                skill: "XD",
                level: "Intermediate",
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
            },
        ],
    },
    {
        title: "Frontend Development",
        data: [
            {
<<<<<<< HEAD
                skill: "HTML5",
                level: "Experienced",
            },
            {
                skill: "CSS3",
                level: "Experienced",
            },
            {
                skill: "JavaScript (ES6+)",
                level: "Experienced",
            },
            {
                skill: "Tailwind CSS",
                level: "Experienced",
            },
            {
                skill: "React.js",
                level: "Experienced",
            },
            {
                skill: "Next.js",
                level: "Intermediate",
            },
=======
                skill: "HTML",
                level: "Experienced",
            },
            {
                skill: "CSS",
                level: "Experienced",
            },
            {
                skill: "JavaScript",
                level: "Experienced",
            },
            {
                skill: "Tailwind",
                level: "Intermediate",
            },
            {
                skill: "Bootstrap",
                level: "Experienced",
            },
            {
                skill: "React",
                level: "Experienced",
            },
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
        ],
    },
    {
        title: "Backend Development",
        data: [
            {
<<<<<<< HEAD
                skill: "Node.js",
                level: "Intermediate",
            },
            {
                skill: "Django",
                level: "Experienced",
            },
            {
                skill: "Flask",
                level: "Experienced",
            },
            {
                skill: "PHP",
                level: "Intermediate",
=======
                skill: "Node JS",
                level: "Beginner",
            },
            {
                skill: "PostgreSQL",
                level: "Intermediate",
            },
            {
                skill: "Java",
                level: "Intermediate",
            },
            {
                skill: "C#",
                level: "Intermediate",
            },
            {
                skill: "PHP",
                level: "Experienced",
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
            },
            {
                skill: "Python",
                level: "Experienced",
            },
            {
<<<<<<< HEAD
                skill: "MySQL / MariaDB",
                level: "Experienced",
            },
            {
                skill: "MongoDB",
                level: "Intermediate",
            },
            {
                skill: "PostgreSQL",
                level: "Beginner",
            },
            {
                skill: "Java",
                level: "Beginner",
            },
=======
                skill: "MySQL",
                level: "Experienced",
            },
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
        ],
    },
    {
        title: "Data Science & Machine Learning",
        data: [
            {
                skill: "Python",
                level: "Experienced",
            },
            {
<<<<<<< HEAD
=======
                skill: "TensorFlow",
                level: "Intermediate",
            },
            {
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
                skill: "scikit-learn",
                level: "Experienced",
            },
            {
<<<<<<< HEAD
                skill: "TensorFlow / Keras",
                level: "Intermediate",
            },
            {
                skill: "XGBoost / LightGBM",
                level: "Intermediate",
            },
            {
=======
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
                skill: "Pandas",
                level: "Experienced",
            },
            {
                skill: "NumPy",
                level: "Experienced",
            },
            {
<<<<<<< HEAD
                skill: "Matplotlib / Seaborn",
                level: "Experienced",
            },
            {
=======
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
                skill: "OpenCV",
                level: "Intermediate",
            },
            {
<<<<<<< HEAD
                skill: "Prophet",
                level: "Intermediate",
            },
        ],
    },
    {
        title: "DevOps & Tools",
        data: [
            {
                skill: "Git & GitHub",
                level: "Experienced",
            },
            {
                skill: "Gradio / Hugging Face",
                level: "Experienced",
            },
            {
                skill: "Streamlit",
                level: "Experienced",
            },
            {
                skill: "Docker",
                level: "Beginner",
            },
            {
                skill: "Netlify / Vercel / Railway",
=======
                skill: "Keras",
                level: "Intermediate",
            },
            {
                skill: "R",
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
                level: "Beginner",
            },
        ],
    },
];

export const projects = [
    {
        id: 1,
<<<<<<< HEAD
        title: 'BitPredictor - Bitcoin Price Forecasting',
        category: "Machine Learning / Time Series",
        image:  bitpredictorImg,
        description: `BitPredictor leverages machine learning to forecast Bitcoin price movements using historical market data, Reddit sentiment, and time series models like LSTM and XGBoost. Featuring an interactive Streamlit dashboard, the system enables users to visualize predictions, test thresholds, and gain insight into future crypto trends.`,
        demoLink: "https://github.com/vnyabuto/BitPredictor",
        stack: [
            {
        name: "Python",
        icon: <SiPython />,
        iconColor: "#3776AB",
    },
    {
        name: "Streamlit",
        icon: <SiStreamlit />,
        iconColor: "#FF4B4B",
    },
    {
        name: "TensorFlow",
        icon: <SiTensorflow />,
        iconColor: "#FF6F00",
    },
    {
        name: "XGBoost",
        icon: <FaChartLine />,
        iconColor: "#2D9CDB",
    },
    {
        name: "LSTM",
        icon: <GiBrain />,
        iconColor: "#9b59b6",
    },
=======
        title: 'AI Powered School',
        image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
        category: "UI/UX",
        description: `Transforming education with AI, this School UI Design project revolutionizes the learning experience. Seamlessly integrating intelligent features, personalized interfaces, and intuitive navigation, our design empowers educators and students alike. Experience innovation at its finest as we pave the way for a smarter, more efficient educational journey.`,
        demoLink: "https://google.com/",
        stack: [
            {
                name: "XD",
                icon: <SiAdobexd />,
                iconColor: "skyblue",
            },
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
        ],
    },
    {
        id: 2,
<<<<<<< HEAD
        title: 'GameXPredic - Video Game Sales Prediction System',
        image: gamexpredicImg,
        category: "Data Science",
        description: `GameXPredic is a Django-based system that predicts video game sales using machine learning. It allows publishers and stakeholders to input game attributes and receive real-time sales forecasts, helping with market strategy and investment decisions. The platform also includes data visualization dashboards for insights.`,
        demoLink: "https://github.com/vnyabuto/gamexpredic",
        stack: [
            {
                name: "Python",
                icon: <SiPython />,
                iconColor: "#3776AB",
            },
            {
                name: "Pandas",
                icon: <SiPandas />,
                iconColor: "purple",
            },
            {
                name: "Django",
                icon: <DiDjango />,
                iconColor: "darkgreen",
            },
            {
                name: "Scikit-learn",
                icon: <SiScikitlearn />,
                iconColor: "#F7931E",
        },
            {
=======
        title: 'E-Commerce Application',
        image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
        category: "Web",
        description: `Enhance your online shopping experience with my E-Commerce Application UI design project. Seamlessly blending aesthetics with functionality, its intuitive interface offers easy navigation, personalized recommendations, and secure transactions. Elevate your digital storefront and captivate customers with a visually stunning design tailored to your brand.`,
        demoLink: "https://google.com/",
        stack: [
            {
                name: "ReactJs",
                icon: <DiReact />,
                iconColor: "skyblue",
            },
            {
                name: "NodeJs",
                icon: <FaNodeJs />,
                iconColor: "green",
            },
            {
                name: "ExpressJs",
                icon: <SiExpress />,
            },
            {
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
                name: "MongoDB",
                icon: <SiMongodb />,
                iconColor: "limegreen",
            },
        ],
    },
    {
        id: 3,
<<<<<<< HEAD
        title: 'Diabetes Risk Predictor',
        image: diabetesImg,
        category: "Health",
        description: `Unlock the future of robotics with my Robotic Engineering Web Application project. Seamlessly integrating cutting-edge technology, data analytics, and collaborative tools, the platform empowers engineers to design, simulate, and optimize robotic systems. Experience innovation at its peak as I redefine the boundaries of robotic engineering.`,
        demoLink: "https://huggingface.co/spaces/Victorconrad/diabetes-predictor",
        stack: [
            {
                name: "Python",
                icon: <SiPython />,
                iconColor: "#3776AB",
            },
            {
                name: "Gradio",
                icon: <FaRobot />,
                iconColor: "#FF4B4B",
            },
            {
                name: "Hugging Face",
                icon: <FaSmile />,
                iconColor: "#FFD21F",
=======
        title: 'Robotic Engineering Web Application',
        image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
        category: "Web",
        description: `Unlock the future of robotics with my Robotic Engineering Web Application project. Seamlessly integrating cutting-edge technology, data analytics, and collaborative tools, the platform empowers engineers to design, simulate, and optimize robotic systems. Experience innovation at its peak as I redefine the boundaries of robotic engineering.`,
        demoLink: "https://google.com/",
        stack: [
            {
                name: "ReactJs",
                icon: <DiReact />,
                iconColor: "skyblue",
            },
            {
                name: "NodeJs",
                icon: <FaNodeJs />,
                iconColor: "green",
            },
            {
                name: "ExpressJs",
                icon: <SiExpress />,
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                iconColor: "limegreen",
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
            },
        ],
    },
    {
<<<<<<< HEAD
    id: 4,
    title: 'Macroeconomic Event Analyzer',
    image: macroImg,
    category: "Finance / AI",
    description: `This advanced Streamlit dashboard forecasts the impact of macroeconomic events (like CPI releases or Fed decisions) on various market sectors. It combines historical stock ETF data and macro indicators such as unemployment rate and inflation using time-series models like XGBoost and Prophet. The dashboard features intuitive sliders, interactive charts, and detailed explanations, making it ideal for data-driven investors.`,
    demoLink: "https://macroecon-event-analyzer.streamlit.app/", 
    stack: [
        {
                name: "Python",
                icon: <SiPython />,
                iconColor: "#3776AB",
            },
            {
                name: "Streamlit",
                icon: <SiStreamlit />,
                iconColor: "#FF4B4B",
            },
            {
                name: "Yahoo Finance API",
                icon: <FaChartLine />,
                iconColor: "#720e9e",
            },
            {
                name: "Prophet",
                icon: <FaFacebook />,
                iconColor: "#4267B2",
=======
        id: 4,
        title: 'Project Management application',
        image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
        category: "Apps",
        description: `Simplify project coordination with my intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient. Elevate your project management experience and achieve success with ease.`,
        demoLink: "https://google.com/",
        stack: [
            {
                name: "React Native",
                icon: <TbBrandReactNative />,
                iconColor: "skyblue",
            },
            {
                name: "NodeJs",
                icon: <FaNodeJs />,
                iconColor: "green",
            },
            {
                name: "ExpressJs",
                icon: <SiExpress />,
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                iconColor: "limegreen",
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
            },
        ],
    },
    {
        id: 5,
<<<<<<< HEAD
        title: 'Reddit Sentiment Tracker',
        image: redditSentimentImg,
        category: "NLP",
        description: `This NLP-powered dashboard analyzes Reddit sentiment across finance-related subreddits such as r/Bitcoin and r/stocks. It scrapes live Reddit threads, processes comments using Vader analysis, and visualizes sentiment trends over time. Integrated the Bitpredictor pipelinem, this tool helps investors factor in public mood into trading decisions.`,
        demoLink: "https://reddit-sentiment-tracker.streamlit.app/",
        stack: [
            {
        name: "Python",
        icon: <SiPython />,
        iconColor: "#3776AB",
        },
        {
        name: "PRAW",
        icon: <FaReddit />,
        iconColor: "#FF4500",
        },
        {
        name: "NLTK / Vader",
        icon: <FaBrain />,
        iconColor: "#6a0dad",
        },
        {
        name: "Streamlit",
        icon: <SiStreamlit />,
        iconColor: "#FF4B4B",
        },
=======
        title: 'Mobile bank - App Design',
        image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
        category: "UI/UX",
        description: `Experience banking at your fingertips with my sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
        demoLink: "https://google.com/",
        stack: [
            {
                name: "Figma",
                icon: <CgFigma />,
                iconColor: "orangered",
            },
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
        ],
    },
    {
        id: 6,
<<<<<<< HEAD
        title: 'Log Anomaly Detector',
        image: LogAnomalyDetectorImg,
        category: "Apps",
        description: `A Flask-powered web application for detecting anomalies in system log files using Isolation Forest. It allows users to upload log files, parses the data, visualizes anomalies over time, and stores analysis history in a MySQL database. Ideal for DevOps and system monitoring tasks.`,
        demoLink: "https://github.com/vnyabuto/log-anomaly-detector",
        stack: [
            {
            name: "Flask",
            icon: <SiFlask />,
            iconColor: "gray",
            },
            {
            name: "MySQL",
            icon: <SiMysql />,
            iconColor: "#00758F",
        },
        {
            name: "Pandas",
            icon: <SiPandas />,
            iconColor: "purple",
        },
        {
            name: "Scikit-learn",
            icon: <SiScikitlearn />,
            iconColor: "orange",
        },
        {
            name: "MariaDB",
            icon: <PiDatabaseFill />,
            iconColor: "deepskyblue",
        },
=======
        title: 'Quiz App Development',
        image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
        category: "Apps",
        description: `Elevate engagement and knowledge retention with my Quiz App Development project. Seamlessly crafted for interactive learning experiences, this app offers customizable quizzes, real-time feedback, and captivating visuals. Empower users to test their knowledge anytime, anywhere, fostering a dynamic learning environment tailored to their needs.`,
        demoLink: "https://google.com/",
        stack: [
            {
                name: "React Native",
                icon: <TbBrandReactNative />,
                iconColor: "skyblue",
            },
            {
                name: "NodeJs",
                icon: <FaNodeJs />,
                iconColor: "green",
            },
            {
                name: "ExpressJs",
                icon: <SiExpress />,
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                iconColor: "limegreen",
            },
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
        ],
    },
];

export const clients = [
    {
        image: client1,
        name: 'Simon Meka',
<<<<<<< HEAD
        role: 'CEO, LivinAI',
        review: `Victor brought immense value to our project with his expertise in full-stack development and machine learning. He delivered a robust and intuitive platform that significantly improved our business operations. The seamless integration of intelligent, data-driven features made our solution smarter and more impactful. His end-to-end contribution—from front-end to back-end and AI—was key to our project's success.`,
=======
        role: 'LivinAI CEO',
        review: `Victor's expertise in full stack development, combined with his strong background in data science and machine learning, brought incredible value to our project. He delivered a robust, user-friendly application that not only enhanced our business operations but also provided intelligent, data-driven insights. His ability to seamlessly integrate machine learning models into the application made our solutions smarter and more efficient. From front-end to back-end, and with advanced AI capabilities, Victor ensured a smooth and successful project delivery.`,
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
    },
    {
        image: client2,
        name: 'Alice Johnson',
<<<<<<< HEAD
        role: 'CTO, TechCorp Ltd',
        review: `Victor's work has been transformative for our tech systems. His deep understanding of software engineering and data science introduced automation and intelligence that streamlined processes and improved our system's performance. He combines technical brilliance with strategic thinking.`,
=======
        role: 'CTO of TechCorp Ltd',
        review: `Victor's expertise in full stack development, data science, and machine learning has been a game-changer for our organization. His strategic approach and technical knowledge significantly improved our system's efficiency and introduced smarter, data-driven solutions.`,
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
    },
    {
        image: client3,
        name: 'John Phil',
<<<<<<< HEAD
        role: 'Product Manager, Web Solutions',
        review: `Victor masterfully blends design and intelligence. The website he built was not only beautifully responsive and brand-aligned, but it also integrated smart data-driven features that elevated user engagement. His creativity and technical precision made him a standout collaborator.`,
=======
        role: 'Product Manager at Web Solutions',
        review: `Victor is exceptional at blending web development with data science and machine learning. He created a stunning, responsive website that not only aligns with our brand but also integrates intelligent features, making it both engaging and innovative. His attention to detail and creativity truly set him apart.`,
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
    },
    {
        image: client4,
        name: 'Simon Ongachi',
<<<<<<< HEAD
        role: 'Founder, Lotty Fashions',
        review: `Working with Victor was seamless. He developed a powerful application that optimized our workflow and provided actionable insights through machine learning. His attention to detail, technical skill, and commitment to timelines exceeded our expectations.`,
=======
        role: 'Founder of Lotty Fashions',
        review: `Victor’s expertise in full stack development, combined with his knowledge of data science and machine learning, resulted in a high-performance application that not only streamlined our workflow but also provided intelligent insights that boosted productivity. His dedication to quality and timely delivery made the entire process smooth and hassle-free.`,
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
    },
    {
        image: client5,
        name: 'Bonface Mutua',
<<<<<<< HEAD
        role: 'CEO, Nectar Series Ltd',
        review: `Victor’s consultancy helped reshape our digital infrastructure. His deep experience in data science and full-stack development provided us with a secure, efficient, and future-ready system. His leadership and technical input were central to our digital transformation.`,
=======
        role: 'CEO of Nectar Series Ltd',
        review: `Victor’s IT consultancy transformed our tech infrastructure. His strategic insights, combined with his expertise in data science and machine learning, were key to our successful digital transformation. We now have a more secure, efficient, and data-driven system, thanks to his guidance.`,
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
    },
];

export const contactOptions = [
    {
        title: "Email",
        value: "vnyabuto00@gmail.com", // Corrected from double '@' to single
        icon: <MdOutlineAlternateEmail />,
    },
    {
<<<<<<< HEAD
        title: "Email",
        value: "vnyabuto00@gmail.com",
        icon: <FaEnvelope size={30} color="#0072c6" />,
        link: "mailto:vnyabuto00@gmail.com",
    },

    {
        title: "WhatsApp",
        value: "+254 704 076311",
        icon: <FaWhatsapp size={30} color="#25D366" />,
        link: "https://wa.me/254704076311",
    },

    {
=======
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
        title: "Phone Number",
        value: "+254 704076311 / +254 707651961",
        icon: <IoCallOutline />,
    },
    {
        title: "Address",
        value: "Nairobi, Kenya",
        icon: <IoLocationOutline />,
    },
];

export const socialHandles = [
    {
        name: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/victor.nyabuto.7370/",
    },
    {
        name: "Facebook",
        icon: <FaFacebookSquare />,
        link: "https://web.facebook.com/victor.conrad.10/",
    },
    {
        name: "Twitter",
        icon: <FaXTwitter />,
        link: "https://x.com/Vic46849339",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/victor-nyabuto-7b9a15283/",
    },
];

export const footer = [
    {
        title: "Explore",
        routes: [
            { name: "About Me", id: 'about' },
            { name: "Skill", id: 'skill' },
        ],
    },
    {
        title: "Trusted",
        routes: [
            { name: "Services", id: 'services' },
            { name: "Projects", id: 'projects' },
            { name: "Testimonials", id: 'testimonials' },
        ],
    },
<<<<<<< HEAD
=======
    {
        title: "Others",
        routes: [
            { name: "Privacy Policy" },
            { name: "Terms and Conditions" },
            { name: "Cookie Policy" },
        ],
    },
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
];
