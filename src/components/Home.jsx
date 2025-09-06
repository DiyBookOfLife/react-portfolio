import { useEffect } from "react";
import WJProject from "../assets/images/WJProject.png";
import LPProject from "../assets/images/LPProject.png";
import css1 from "../assets/images/css1.avif";
import html2 from "../assets/images/html2.avif";
import html3 from "../assets/images/html3.avif";
import "./Home.css";
import FacePreview from "../assets/images/face-recognition.png";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const dropdown = document.getElementById("topic-select");
    const handleChange = (e) => {
      const selectedTopic = e.target.value;
      document
        .querySelector(".box-container")
        ?.scrollIntoView({ behavior: "smooth" });
      const cards = document.querySelectorAll(".flip-card");
      cards.forEach((card) => {
        const cardInner = card.querySelector(".flip-card-inner");
        cardInner.classList.remove("flipped");
        if (card.dataset.topic === selectedTopic) {
          cardInner.classList.add("flipped");
        }
        setTimeout(() => {
          cardInner.classList.remove("flipped");
        }, 3000);
      });
    };
    dropdown?.addEventListener("change", handleChange);

    return () => dropdown?.removeEventListener("change", handleChange);
  }, []);

  function highlightSkill(topic) {
    const dropdown = document.getElementById("topic-select");
    if (!dropdown) return;
    dropdown.value = topic;
    dropdown.dispatchEvent(new Event("change", { bubbles: true }));
  }

  return (
    <main id="main" className="main-body">
      <div className="container">
        <h2 className="main-title">Frontend Developer</h2>
        <p className="hero-subline">
          React • JavaScript • APIs — I build fast, accessible web apps.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn">
            Projects
          </a>
          <Link to="/contact" className="btn btn-outline">
            Contact
          </Link>
        </div>

        <section className="about-me">
          <p>
            I’m a Front-End Web Developer with a solid foundation in HTML, CSS,
            and JavaScript, supported by years of IT support experience. I focus
            on building clean, accessible, and responsive applications that keep
            users at the center.
          </p>
          <p>
            Currently advancing my skills in React and modern frameworks, I
            enjoy creating dynamic, interactive interfaces that solve real
            problems. I’m eager to join a collaborative team where I can apply
            my problem-solving abilities and deliver meaningful value.
          </p>
        </section>

        <section id="projects" className="projects-section">
          <h2 id="projects-title">Projects</h2>
          <div className="projects-container">
            {/* === Face Recognition (Webcam) === */}
            <div className="project-card">
              {/* TEXT LEFT */}
              <div className="project-text">
                <h3>Webcam Face Recognition</h3>
                <p className="project-desc">
                  Real-time face detection from the webcam with on-screen
                  overlays. Built for fast, in-browser inference using React +
                  TypeScript.
                </p>

                {/* TAGS */}
                <div className="tags">
                  {[
                    "React",
                    "TypeScript",
                    "Webcam/WebRTC",
                    "Canvas",
                    "Face Detection",
                  ].map((t) => (
                    <button
                      key={t}
                      className="tag"
                      type="button"
                      onClick={() => highlightSkill(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* LINKS */}
                <div className="actions">
                  <a
                    href="https://github.com/DiyBookOfLife/webcam-face-recognition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://webcam-face-recognition-wine.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* IMAGE RIGHT — CLICKABLE */}
              <a
                className="project-image-link"
                href="https://webcam-face-recognition-wine.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={FacePreview}
                  alt="Webcam Face Recognition app—live camera feed with face boxes drawn on the video."
                />
              </a>
            </div>

            {/* === Weather Journal App === */}
            <div className="project-card">
              {/* TEXT LEFT */}
              <div className="project-text">
                <h3>Weather Journal App</h3>
                <p className="project-desc">
                  Fetches weather data via OpenWeatherMap and dynamically
                  updates the UI with user input.
                </p>

                {/* TAGS */}
                <div className="tags">
                  {["APIs & Fetching Data", "Express", "JavaScript"].map(
                    (t) => (
                      <button
                        key={t}
                        className="tag"
                        type="button"
                        onClick={() => highlightSkill(t)}
                      >
                        {t}
                      </button>
                    )
                  )}
                </div>

                {/* LINKS */}
                <div className="actions">
                  <a
                    href="https://github.com/DiyBookOfLife/weather-journal-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://diybookoflife.github.io/weather-journal-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* IMAGE RIGHT — CLICKABLE */}
              <a
                className="project-image-link"
                href="https://diybookoflife.github.io/weather-journal-app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={WJProject}
                  alt="Weather Journal App—form inputs and results panel for city weather."
                />
              </a>
            </div>

            {/* === Landing Page === */}
            <div className="project-card">
              {/* TEXT LEFT */}
              <div className="project-text">
                <h3>Landing Page</h3>
                <p className="project-desc">
                  Responsive landing page built with semantic HTML and CSS
                  grid/flexbox for a polished first impression.
                </p>

                {/* TAGS */}
                <div className="tags">
                  {["Responsive Web Design", "HTML5", "CSS3"].map((t) => (
                    <button
                      key={t}
                      className="tag"
                      type="button"
                      onClick={() => highlightSkill(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* LINKS */}
                <div className="actions">
                  <a
                    href="https://github.com/DiyBookOfLife/landing-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://diybookoflife.github.io/landing-project/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* IMAGE RIGHT — CLICKABLE */}
              <a
                className="project-image-link"
                href="https://diybookoflife.github.io/landing-project/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={LPProject}
                  alt="Responsive landing page—hero section and navigation on a dark theme."
                />
              </a>
            </div>
          </div>
        </section>

        <div className="box-container">
          {[
            {
              topic: "JavaScript",
              desc: "Skilled in DOM manipulation, event handling, asynchronous functions (async/await, Promises), and building dynamic user interfaces.",
            },
            {
              topic: "Responsive Web Design",
              desc: "Fluent in CSS Flexbox, Grid, and media queries to ensure seamless user experiences across all screen sizes.",
            },
            {
              topic: "Version Control",
              desc: "Experienced in branching, pull requests, commits, and collaboration workflows for clean project management in Git & Github.",
            },
            {
              topic: "APIs & Fetching Data",
              desc: "Confident working with REST APIs, handling fetch requests, parsing JSON, and updating the DOM dynamically.",
            },
            {
              topic: "UI/UX Principles",
              desc: "Focused on creating user-friendly layouts with attention to accessibility, visual hierarchy, and smooth interaction.",
            },
            {
              topic: "Node.js & Express",
              desc: "Able to build lightweight backend servers, set up routes, and connect front-end to server logic using Express.",
            },
            {
              topic: "Sass & Bootstrap",
              desc: "Experienced using Bootstrap’s utility classes and Sass for organized, modular, and scalable CSS. Strong focus on clean and responsive styling.",
            },
            {
              topic: "React",
              desc: "Comfortable using React to build component-based UIs, manage state, and create dynamic single-page applications with reusable logic.",
            },
          ].map((card) => (
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
    </main>
  );
}

export default Home;
