import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="mainBody">
      <div className="experienceContainer">
        <div className="experienceHeader">
          <h2>Work Experience</h2>
        </div>

        <aside className="experienceSidebar">
          <blockquote cite="https://www.forbes.com/quotes/theme/experience/">
            <p className="quotation">
              "The story of any one man's real experience finds its startling
              parallel in that of everyone of us."
            </p>
            <p>-James Russell Lowell</p>
          </blockquote>
        </aside>

        <main className="experienceMain">
          <div className="experience-container">
            <div className="experience-box">
              <div className="company">AT&T Mobility LLC</div>
              <div className="title">Premier Service Consultant</div>
              <div className="experienceDescription">
                <ul>
                  <li>Root cause analysis to identify system vulnerabilities and process improvements.</li>
                  <li>Provide technical support and guidance to agents, assisting with billing concerns and de-escalations.</li>
                  <li>Utilize ticketing systems, such as Salesforce, to address and resolve mobile OS, hardware, and network issues.</li>
                </ul>
              </div>
            </div>

            <div className="experience-box">
              <div className="company">AT&T Mobility LLC</div>
              <div className="title">Customer Support Specialist</div>
              <div className="experienceDescription">
                <ul>
                  <li>Deliver exceptional technical support for Mobility Back Office, providing resolution to customer issues.</li>
                  <li>Served as manager relief, guiding agents in handling irate customers, billing concerns, and technical problems.</li>
                </ul>
              </div>
            </div>

            <div className="experience-box">
              <div className="company">AT&T Mobility LLC</div>
              <div className="title">Customer Service Representative</div>
              <div className="experienceDescription">
                <ul>
                  <li>Received incoming calls from AT&T mobile customers, providing assistance with billing concerns, sales, and product/service inquiries.</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Experience;
