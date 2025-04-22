import React from 'react';
import certFrontEnd from '../assets/images/certFrontEnd.png';
import udacity from '../assets/images/udacity.png';
import degree from '../assets/images/degree.jpg';
import shecodes from '../assets/images/shecodes.png';
import './Education.css';

function Education() {
  return (
    <div className="educationBody">
      <div className="educationWrapper">
        <div className="certifications">
          <figure>
            <img
              className="cert-item"
              src={certFrontEnd}
              alt="Front End Web Developer"
            />
            <figcaption>Certification from Udacity</figcaption>
          </figure>

          <figure>
            <img
              className="cert-item"
              src={udacity}
              alt="Intro to Programming from Udacity"
            />
            <figcaption>Certification from Udacity</figcaption>
          </figure>

          <figure>
            <img
              className="cert-item"
              src={degree}
              alt="associates degree in computer science"
            />
            <figcaption>A.S. in Computer Science</figcaption>
          </figure>

          <figure>
            <img
              className="cert-item"
              src={shecodes}
              alt="Intro to Coding from Shecodes"
            />
            <figcaption>Certification from Shecodes</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Education;