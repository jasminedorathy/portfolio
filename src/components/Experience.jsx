import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "XploreIT CORP",
      duration: "2023",
      type: "Internship",
      location: "On-site",
      description: "Gained hands-on experience in web development, working on real-world projects and learning industry best practices.",
      achievements: [
        "Developed responsive web applications using modern JavaScript frameworks",
        "Collaborated with senior developers on client projects",
        "Implemented user-friendly interfaces with focus on UX/UI design"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "React", "Git"],
      icon: "💻"
    },
    {
      id: 2,
      title: "Machine Learning Intern",
      company: "Codsoft",
      duration: "2023",
      type: "Online Internship",
      location: "Remote",
      description: "Focused on machine learning algorithms and data science projects, building practical ML solutions.",
      achievements: [
        "Developed and implemented machine learning models for data analysis",
        "Worked on supervised and unsupervised learning algorithms",
        "Created data preprocessing pipelines and feature engineering solutions"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      icon: "🤖"
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Building expertise through hands-on internships and real-world projects
        </p>
        
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="card-header">
                <div className="company-icon">{exp.icon}</div>
                <div className="header-info">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="job-type">{exp.type}</span>
                  </div>
                  <div className="job-meta">
                    <span className="duration">{exp.duration}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="job-description">{exp.description}</p>
              
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-card">
            <h3>What I Learned</h3>
            <div className="learning-grid">
              <div className="learning-item">
                <div className="learning-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4>Technical Skills</h4>
                  <p>Gained proficiency in web development frameworks, ML algorithms, and data science tools</p>
                </div>
              </div>
              
              <div className="learning-item">
                <div className="learning-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h4>Team Collaboration</h4>
                  <p>Learned to work effectively in team environments and contribute to collaborative projects</p>
                </div>
              </div>
              
              <div className="learning-item">
                <div className="learning-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"/>
                    <path d="M9 11V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
                  </svg>
                </div>
                <div>
                  <h4>Problem Solving</h4>
                  <p>Developed analytical thinking and systematic approaches to complex technical challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;