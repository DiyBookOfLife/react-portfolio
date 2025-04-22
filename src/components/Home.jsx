import { useEffect } from 'react';
import WJProject from '../assets/images/WJProject.png';
import LPProject from '../assets/images/LPProject.png';
import css1 from '../assets/images/css1.avif';
import html2 from '../assets/images/html2.avif';
import html3 from '../assets/images/html3.avif';
import './Home.css';

function Home() {
  useEffect(() => {
    const dropdown = document.getElementById("topic-select");
    const handleChange = (e) => {
      const selectedTopic = e.target.value;
      document.querySelector('.box-container')?.scrollIntoView({ behavior: 'smooth' });
      const cards = document.querySelectorAll('.flip-card');
      cards.forEach(card => {
        const cardInner = card.querySelector('.flip-card-inner');
        cardInner.classList.remove('flipped');
        if (card.dataset.topic === selectedTopic) {
          cardInner.classList.add('flipped');
        }
        setTimeout(() => {
          cardInner.classList.remove('flipped');
        }, 3000);
      });
    };
    dropdown?.addEventListener("change", handleChange);
    return () => dropdown?.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="mainBody">
      <h2 className="mainTitle">Front-End Web Development</h2>

      <select id="topic-select">
        <option value="">--Explore a Technology --</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Responsive Web Design">Responsive Web Design</option>
        <option value="Version Control">Version Control</option>
        <option value="APIs & Fetching Data">APIs & Fetching Data</option>
        <option value="UI/UX Principles">UI/UX Principles</option>
        <option value="Node.js & Express">Node.js & Express</option>
        <option value="Sass & Bootstrap">Sass & Bootstrap</option>
        <option value="React">React</option>
      </select>

      <section className="sectionAboutMe">
        <p className="aboutMe">
          I’m a passionate and dedicated Front-End Web Developer with a solid
          foundation in HTML, CSS, and JavaScript, and a strong background in IT
          Support. I bring a user-focused mindset, strong problem-solving
          abilities, and a commitment to writing clean, accessible, and
          responsive code. Currently deepening my skills in modern frameworks
          like React, I thrive on building dynamic, interactive web experiences
          and continuously growing as a developer. I’m eager to contribute to a
          collaborative team and bring real value to meaningful projects.
        </p>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Weather Journal App</h3>
            <img src={WJProject} alt="Weather App Screenshot" />
            <p>
              A simple app that fetches weather data using an external API and
              updates the UI dynamically using JavaScript.
            </p>
            <p>
              <strong>Tech Used:</strong> HTML, CSS, JS, OpenWeatherMap API,
              Express
            </p>
            <a href="https://github.com/DiyBookOfLife/weather-journal-app" target="_blank" rel="noreferrer">GitHub</a>{' '}
            <a href="https://diybookoflife.github.io/weather-journal-app/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>

          <div className="project-card">
            <h3>Landing Page</h3>
            <img src={LPProject} alt="Landing Page Screenshot" />
            <p>
              A responsive landing page built from scratch using semantic HTML and
              modern CSS techniques. This project emphasizes clean layout design,
              smooth navigation, and consistent styling to create an engaging
              first impression for users.
            </p>
            <p>
              <strong>Tech Used:</strong> HTML5, CSS3, Flexbox, Grid, Media Queries
            </p>
            <a href="https://github.com/DiyBookOfLife/landing-project" target="_blank" rel="noreferrer">GitHub</a>{' '}
            <a href="https://diybookoflife.github.io/landing-project/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>

      <div className="box-container">
        {[
            { topic: "JavaScript", desc: "Skilled in DOM manipulation, event handling, asynchronous functions (async/await, Promises), and building dynamic user interfaces." },
            { topic: "Responsive Web Design", desc: "Fluent in CSS Flexbox, Grid, and media queries to ensure seamless user experiences across all screen sizes." },
            { topic: "Version Control", desc: "Experienced in branching, pull requests, commits, and collaboration workflows for clean project management in Git & Github." },
            { topic: "APIs & Fetching Data", desc: "Confident working with REST APIs, handling fetch requests, parsing JSON, and updating the DOM dynamically." },
            { topic: "UI/UX Principles", desc: "Focused on creating user-friendly layouts with attention to accessibility, visual hierarchy, and smooth interaction." },
            { topic: "Node.js & Express", desc: "Able to build lightweight backend servers, set up routes, and connect front-end to server logic using Express." },
            { topic: "Sass & Bootstrap", desc: "Experienced using Bootstrap’s utility classes and Sass for organized, modular, and scalable CSS. Strong focus on clean and responsive styling." },
            { topic: "React", desc: "Comfortable using React to build component-based UIs, manage state, and create dynamic single-page applications with reusable logic." }
        ].map(card => (
            <div key={card.topic} className="flip-card" data-topic={card.topic}>
            <div className="flip-card-inner">
                <div className="flip-card-front">{card.topic}</div>
                <div className="flip-card-back">{card.desc}</div>
            </div>
            </div>
        ))}
        </div>


      

      <div className="cards-container">
        {[css1, html2, html3].map((src, i) => (
          <div key={i} className="card">
            <img src={src} alt="Card Image" className="card-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
