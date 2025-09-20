import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about transforming data into intelligent solutions
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello! I'm Jasmine Dorathy</h3>
              <p>
                A dedicated <strong>Data Scientist and Machine Learning Engineer</strong> with a passion for 
                solving complex problems through innovative AI solutions. Fresh graduate with a 
                strong foundation in AI and Data Science, maintaining an excellent <strong>9.0 CGPA</strong>.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"/>
                    <path d="M9 11V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
                  </svg>
                </div>
                <div>
                  <h4>Problem Solver</h4>
                  <p>Tackling complex challenges through data-driven approaches and innovative solutions.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <h4>Tech Innovator</h4>
                  <p>Exploring cutting-edge AI, ML, and web technologies to create impactful solutions.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <h4>Continuous Learner</h4>
                  <p>Staying updated with latest trends in the rapidly evolving field of AI and technology.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">9.0</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Internships</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2022</div>
                <div className="stat-label">Started College</div>
              </div>
            </div>

            <div className="about-skills-preview">
              <h4>Core Competencies</h4>
              <div className="skills-tags">
                <span className="skill-tag">Data Science</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">AI Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;