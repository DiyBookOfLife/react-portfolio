import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contactPage">
      <div className="contactContent">
        <blockquote id="quote">
          "I can do all things through <b>Christ</b> who strengthens me"
          <cite>- Philippians 4:13</cite>
        </blockquote>

        <div className="contactContainer">
          <a href="mailto:tsthomas205@gmail.com">
            <button className="headerBox">Email</button>
          </a>
          <a
            href="https://www.linkedin.com/in/tonithomas2025/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="contentBox">LinkedIn</button>
          </a>
          <a
            href="https://github.com/DiyBookOfLife"
            target="_blank"
            rel="noreferrer"
          >
            <button className="footerBox">GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
