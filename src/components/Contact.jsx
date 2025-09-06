// Contact.jsx
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h2>Let’s Connect</h2>
        <p className="contact-intro">
          I’m open to Frontend/Software Engineer roles and collaboration. Reach
          out and I’ll get back within 24–48 hours.
        </p>

        <div className="contact-actions">
          <a
            className="btn"
            href="mailto:tsthomas205@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Toni,%0D%0A"
          >
            Email
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/tonithomas2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn"
            href="https://github.com/DiyBookOfLife"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
