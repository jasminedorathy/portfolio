import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic foundation in Artificial Intelligence and Data Science
        </p>
        
        <div className="education-content">
          <div className="education-main">
            <div className="degree-card">
              <div className="degree-header">
                <div className="college-logo">
                  <div className="logo-placeholder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                </div>
                <div className="degree-info">
                  <h3 className="degree-title">B.Tech Artificial Intelligence and Data Science</h3>
                  <h4 className="college-name">Engineering College</h4>
                  <div className="degree-meta">
                    <span className="duration">2022 - 2026</span>
                    <span className="cgpa">CGPA: 9.0/10.0</span>
                  </div>
                </div>
              </div>
              
              <div className="degree-description">
                <p>
                  Pursuing a comprehensive degree in Artificial Intelligence and Data Science, 
                  focusing on machine learning algorithms, data analytics, and AI applications. 
                  Maintaining an excellent academic record with a <strong>9.0 CGPA</strong>, 
                  demonstrating strong analytical and problem-solving capabilities.
                </p>
              </div>

              <div className="coursework">
                <h4>Key Coursework</h4>
                <div className="courses-grid">
                  <div className="course-category">
                    <h5>Core AI/ML</h5>
                    <ul>
                      <li>Machine Learning Algorithms</li>
                      <li>Deep Learning</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision</li>
                      <li>Neural Networks</li>
                    </ul>
                  </div>
                  
                  <div className="course-category">
                    <h5>Data Science</h5>
                    <ul>
                      <li>Data Structures & Algorithms</li>
                      <li>Statistical Analysis</li>
                      <li>Data Mining</li>
                      <li>Big Data Analytics</li>
                      <li>Data Visualization</li>
                    </ul>
                  </div>
                  
                  <div className="course-category">
                    <h5>Programming</h5>
                    <ul>
                      <li>Java Programming</li>
                      <li>Python for Data Science</li>
                      <li>Database Management</li>
                      <li>Web Technologies</li>
                      <li>Software Engineering</li>
                    </ul>
                  </div>
                  
                  <div className="course-category">
                    <h5>Mathematics</h5>
                    <ul>
                      <li>Linear Algebra</li>
                      <li>Probability & Statistics</li>
                      <li>Discrete Mathematics</li>
                      <li>Calculus</li>
                      <li>Optimization Techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="education-sidebar">
            <div className="achievements-card">
              <h3>Academic Achievements</h3>
              <div className="achievement-list">
                <div className="achievement-item">
                  <div className="achievement-icon">🏆</div>
                  <div>
                    <h4>Excellent Academic Performance</h4>
                    <p>Maintaining 9.0 CGPA throughout the program</p>
                  </div>
                </div>
                
                <div className="achievement-item">
                  <div className="achievement-icon">📚</div>
                  <div>
                    <h4>Comprehensive Curriculum</h4>
                    <p>Strong foundation in AI, ML, and Data Science</p>
                  </div>
                </div>
                
                <div className="achievement-item">
                  <div className="achievement-icon">💡</div>
                  <div>
                    <h4>Practical Projects</h4>
                    <p>Applied learning through hands-on projects</p>
                  </div>
                </div>
                
                <div className="achievement-item">
                  <div className="achievement-icon">🔬</div>
                  <div>
                    <h4>Research Oriented</h4>
                    <p>Focus on innovative AI solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-developed-card">
              <h3>Skills Developed</h3>
              <div className="skills-categories">
                <div className="skill-category">
                  <h4>Technical Skills</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Machine Learning</span>
                    <span className="skill-tag">Data Analysis</span>
                    <span className="skill-tag">AI Algorithms</span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4>Analytical Skills</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Problem Solving</span>
                    <span className="skill-tag">Critical Thinking</span>
                    <span className="skill-tag">Statistical Analysis</span>
                    <span className="skill-tag">Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;