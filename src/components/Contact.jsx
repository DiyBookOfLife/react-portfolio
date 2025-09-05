import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <main id="main" className="main-body">
      <div className="contactContent">
        <blockquote id="quote">
          "I can do all things through <b>Christ</b> who strengthens me"
          <cite>- Philippians 4:13</cite>
        </blockquote>

        <div className="contactContainer">
          <a
            href="mailto:tsthomas205@gmail.com"
            aria-label="Send me an email"
            className="headerBox"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/tonithomas2025/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="contentBox"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/DiyBookOfLife"
            target="_blank"
            rel="noreferrer"
            aria-label="View my GitHub projects"
            className="footerBox"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
