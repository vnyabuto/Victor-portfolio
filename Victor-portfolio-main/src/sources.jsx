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
import { FaFacebookSquare, FaPaintBrush, FaCogs, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi';
import { DiReact } from "react-icons/di";
import { SiExpress, SiMongodb, SiAdobexd } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";

import { SiAdobexd } from "react-icons/si";

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
            },
        ],
    },
    {
        title: "Frontend Development",
        data: [
            {
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
        ],
    },
    {
        title: "Backend Development",
        data: [
            {
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
            },
            {
                skill: "Python",
                level: "Experienced",
            },
            {
                skill: "MySQL",
                level: "Experienced",
            },
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
                skill: "TensorFlow",
                level: "Intermediate",
            },
            {
                skill: "scikit-learn",
                level: "Experienced",
            },
            {
                skill: "Pandas",
                level: "Experienced",
            },
            {
                skill: "NumPy",
                level: "Experienced",
            },
            {
                skill: "OpenCV",
                level: "Intermediate",
            },
            {
                skill: "Keras",
                level: "Intermediate",
            },
            {
                skill: "R",
                level: "Beginner",
            },
        ],
    },
];

export const projects = [
    {
        id: 1,
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
        ],
    },
    {
        id: 2,
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
                name: "MongoDB",
                icon: <SiMongodb />,
                iconColor: "limegreen",
            },
        ],
    },
    {
        id: 3,
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
            },
        ],
    },
    {
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
            },
        ],
    },
    {
        id: 5,
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
        ],
    },
    {
        id: 6,
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
        ],
    },
];

export const clients = [
    {
        image: client1,
        name: 'Simon Meka',
        role: 'LivinAI CEO',
        review: `Victor's expertise in full stack development, combined with his strong background in data science and machine learning, brought incredible value to our project. He delivered a robust, user-friendly application that not only enhanced our business operations but also provided intelligent, data-driven insights. His ability to seamlessly integrate machine learning models into the application made our solutions smarter and more efficient. From front-end to back-end, and with advanced AI capabilities, Victor ensured a smooth and successful project delivery.`,
    },
    {
        image: client2,
        name: 'Alice Johnson',
        role: 'CTO of TechCorp Ltd',
        review: `Victor's expertise in full stack development, data science, and machine learning has been a game-changer for our organization. His strategic approach and technical knowledge significantly improved our system's efficiency and introduced smarter, data-driven solutions.`,
    },
    {
        image: client3,
        name: 'John Phil',
        role: 'Product Manager at Web Solutions',
        review: `Victor is exceptional at blending web development with data science and machine learning. He created a stunning, responsive website that not only aligns with our brand but also integrates intelligent features, making it both engaging and innovative. His attention to detail and creativity truly set him apart.`,
    },
    {
        image: client4,
        name: 'Simon Ongachi',
        role: 'Founder of Lotty Fashions',
        review: `Victor’s expertise in full stack development, combined with his knowledge of data science and machine learning, resulted in a high-performance application that not only streamlined our workflow but also provided intelligent insights that boosted productivity. His dedication to quality and timely delivery made the entire process smooth and hassle-free.`,
    },
    {
        image: client5,
        name: 'Bonface Mutua',
        role: 'CEO of Nectar Series Ltd',
        review: `Victor’s IT consultancy transformed our tech infrastructure. His strategic insights, combined with his expertise in data science and machine learning, were key to our successful digital transformation. We now have a more secure, efficient, and data-driven system, thanks to his guidance.`,
    },
];

export const contactOptions = [
    {
        title: "Email",
        value: "vnyabuto00@gmail.com", // Corrected from double '@' to single
        icon: <MdOutlineAlternateEmail />,
    },
    {
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
    {
        title: "Others",
        routes: [
            { name: "Privacy Policy" },
            { name: "Terms and Conditions" },
            { name: "Cookie Policy" },
        ],
    },
];
