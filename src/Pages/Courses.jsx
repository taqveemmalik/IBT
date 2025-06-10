import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { InnerHeader } from '../Components/Header';
import heroimg from "../Assets/Imags/Bg/bg.jpg";
import iconai from "../Assets/Imags/Icons/icon-ai.png";
import ai from "../Assets/Imags/Courses/ai.png";
import iconpython from "../Assets/Imags/Icons/icon-python.png";
import python from "../Assets/Imags/Courses/python.png";
import iconblockchain from "../Assets/Imags/Icons/icon-blockchain.png";
import blockchain from "../Assets/Imags/Courses/blockchain.png";
import iconmining from "../Assets/Imags/Icons/icon-mining.png";
import mining from "../Assets/Imags/Courses/mining.png";
import arrow from "../Assets/Imags/Icons/icon-arrow.svg";
import { Image } from 'react-bootstrap';

const coursesData = [
    {
        id: 1,
        title: "AI Courses",
        subtitle: "3-Month Artificial Intelligence Program",
        description: "Learn AI from scratch! Build smart systems, analyze data, and create projects like chatbots or image recognizers. Perfect for students, job seekers, and professionals looking to enter the AI field.",
        duration: "3 Months (12 Weeks)",
        level: "Beginner to Advanced",
        format: "Onsite Classes with Computers Provided",
        icon: iconai,
        image: ai,
        alt: "AI Courses",
        link: "/AiCourses",
        highlights: [
            "AI & Python foundations from scratch",
            "Machine Learning algorithms & neural networks",
            "Natural Language Processing & chatbots",
            "Computer Vision & image recognition",
            "Real-world projects for Pakistani businesses",
            "Portfolio of 3-5 AI projects"
        ],
        tools: ["Python", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NLTK", "Pandas", "NumPy"],
        certification: "IBT AI Certificate - Industry Recognized",
        placement: "95% placement rate in AI/ML roles"
    },
    {
        id: 2,
        title: "Python Courses",
        subtitle: "Programming & Development",
        description: "Master one of the most powerful programming languages used across data science, software development, and AI. Build real-world applications and automation tools.",
        duration: "10 Weeks",
        level: "Beginner Friendly",
        format: "Weekday / Weekend Options",
        icon: iconpython,
        image: python,
        alt: "Python Courses",
        link: "/PythonCourses",
        highlights: [
            "Python syntax and data structures",
            "Object-oriented programming",
            "Web development with Flask/Django",
            "Data analysis with Pandas & NumPy",
            "API development and integration",
            "Automation and scripting"
        ],
        tools: ["Python 3.x", "Flask", "Django", "Pandas", "NumPy", "Matplotlib", "SQLite"],
        certification: "IBT Python Programming Certificate",
        placement: "90% placement rate in development roles"
    },
    {
        id: 3,
        title: "Blockchain Courses",
        subtitle: "Pre-Requisite Course",
        description: "Perfect for beginners—grasp the concepts that drive decentralized technologies. Understand blockchain architecture, smart contracts, and cryptocurrency fundamentals.",
        duration: "8 Weeks",
        level: "Beginner",
        format: "Weekday / Weekend Options",
        icon: iconblockchain,
        image: blockchain,
        alt: "Blockchain Courses",
        link: "/BlockchainCourses",
        highlights: [
            "Blockchain architecture and consensus",
            "Cryptocurrency fundamentals",
            "Smart contract basics",
            "DeFi and NFT concepts",
            "Security and privacy essentials",
            "Real-world blockchain applications"
        ],
        tools: ["Bitcoin", "Ethereum", "MetaMask", "Remix IDE", "Solidity", "Web3.js"],
        certification: "Certificate of Completion: Blockchain Foundations",
        placement: "85% transition to advanced blockchain roles"
    },
    {
        id: 4,
        title: "Blockchain Mining Workshop",
        subtitle: "Advanced Infrastructure",
        description: "Hands-on experience in mining protocols, nodes, and real-time blockchain data analytics. Learn about consensus mechanisms and network security.",
        duration: "6 Weeks",
        level: "Intermediate",
        format: "Intensive Workshop",
        icon: iconmining,
        image: mining,
        alt: "Mining Workshop",
        link: "/MiningWorkshop",
        highlights: [
            "Mining protocols and algorithms",
            "Node setup and configuration",
            "Consensus mechanisms (PoW, PoS)",
            "Network security and validation",
            "Real-time blockchain analytics",
            "Energy efficiency and sustainability"
        ],
        tools: ["Bitcoin Core", "Ethereum Node", "Geth", "Grafana", "Prometheus", "CLI Tools"],
        certification: "IBT Blockchain Mining Certificate",
        placement: "80% placement in blockchain infrastructure roles"
    }
];

function Courses() {
    const [animatedElements, setAnimatedElements] = useState([]);

    // Function to check if an element is in the viewport
    function isElementInViewport(elem) {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const elemTop = elem.getBoundingClientRect().top + scroll;

        return elemTop - scroll < windowHeight;
    }

    // Function to add the "anime" class to sections in the viewport
    function animateSections() {
        const elementsToAnimate = document.querySelectorAll('.scroll-anime');
        const elementsInViewport = [];

        elementsToAnimate.forEach((elem) => {
            if (isElementInViewport(elem)) {
                elem.classList.add('anime');
                elementsInViewport.push(elem);
            }
        });

        setAnimatedElements(elementsInViewport);
    }

    useEffect(() => {
        // Initial check on page load
        animateSections();

        // Add scroll event listener
        window.addEventListener('scroll', animateSections);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', animateSections);
        };
    }, []);

    return (
        <>
            <InnerHeader
                heading="ALL"
                highlight="COURSES"
                description="Discover our comprehensive range of tech bootcamps designed to transform your career. From AI and Python to Blockchain, we offer industry-aligned programs that prepare you for the future of technology."
                bgImages={[heroimg]}
            />

            <Container fluid className='courses-main-page'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" className='text-center scroll-anime top'>
                            <div className='spacer-50' />
                            <h2>Choose Your <span>Tech Journey</span></h2>
                            <h4>Ready for intensive, outcome-driven learning? Our Bootcamps are built to transform you into an industry-ready professional.</h4>
                            <div className='spacer-50' />
                        </Col>
                    </Row>

                    <Row>
                        {coursesData.map((course, index) => (
                            <Col xl="6\" lg="6\" md="12\" key={course.id} className='mb-4'>
                                <div className={`course-detail-card scroll-anime ${index % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="course-header">
                                        <div className="course-icon">
                                            <Image src={course.icon} alt={course.alt} />
                                        </div>
                                        <div className="course-title-section">
                                            <h3>{course.title}</h3>
                                            <p className="course-subtitle">{course.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="course-image">
                                        <Image src={course.image} alt={course.alt} />
                                    </div>

                                    <div className="course-content">
                                        <p className="course-description">{course.description}</p>
                                        
                                        <div className="course-meta">
                                            <div className="meta-item">
                                                <span className="meta-label">Duration:</span>
                                                <span className="meta-value">{course.duration}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Level:</span>
                                                <span className="meta-value">{course.level}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Format:</span>
                                                <span className="meta-value">{course.format}</span>
                                            </div>
                                        </div>

                                        <div className="course-highlights">
                                            <h5>What You'll Learn:</h5>
                                            <ul>
                                                {course.highlights.slice(0, 4).map((highlight, idx) => (
                                                    <li key={idx}>{highlight}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="course-tools">
                                            <h5>Technologies:</h5>
                                            <div className="tools-list">
                                                {course.tools.slice(0, 4).map((tool, idx) => (
                                                    <span key={idx} className="tool-tag">{tool}</span>
                                                ))}
                                                {course.tools.length > 4 && <span className="tool-tag">+{course.tools.length - 4} more</span>}
                                            </div>
                                        </div>

                                        <div className="course-stats">
                                            <div className="stat-item">
                                                <span className="stat-value">{course.placement}</span>
                                            </div>
                                            <div className="stat-item">
                                                <span className="stat-label">Certification:</span>
                                                <span className="stat-desc">{course.certification}</span>
                                            </div>
                                        </div>

                                        <div className="course-actions">
                                            <Link className="course-detail-btn" to={course.link}>
                                                View Full Details <Image src={arrow} alt="Arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        <Col xl="12" className='text-center scroll-anime bottom'>
                            <div className='spacer-50' />
                            <div className='courses-cta-section'>
                                <h2>Ready to Start Your <span>Tech Career?</span></h2>
                                <h4>Join thousands of successful graduates who transformed their careers with IBT Learning</h4>
                                <div className='spacer-30' />
                                <div className="cta-stats">
                                    <div className="cta-stat">
                                        <h3>2,000+</h3>
                                        <p>Happy Learners</p>
                                    </div>
                                    <div className="cta-stat">
                                        <h3>95%</h3>
                                        <p>Placement Rate</p>
                                    </div>
                                    <div className="cta-stat">
                                        <h3>4.9+</h3>
                                        <p>Average Rating</p>
                                    </div>
                                </div>
                                <div className='spacer-30' />
                                <Link className="reg-btn big" to="/">Talk to Our Advisors</Link>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Courses;