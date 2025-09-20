import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    // Programming Languages
    { 
      name: "Java", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
      category: "language",
      color: "#f89820"
    },
    { 
      name: "Python", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      category: "language",
      color: "#3776ab"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      category: "language",
      color: "#f7df1e"
    },
    { 
      name: "C++", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
      category: "language",
      color: "#00599c"
    },
    
    // Web Technologies
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      category: "web",
      color: "#61dafb"
    },
    { 
      name: "HTML5", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      category: "web",
      color: "#e34f26"
    },
    { 
      name: "CSS3", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      category: "web",
      color: "#1572b6"
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      category: "web",
      color: "#339933"
    },
    
    // Data Science & ML
    { 
      name: "TensorFlow", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", 
      category: "ml",
      color: "#ff6f00"
    },
    { 
      name: "Pandas", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", 
      category: "ml",
      color: "#150458"
    },
    { 
      name: "NumPy", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", 
      category: "ml",
      color: "#013243"
    },
    { 
      name: "Jupyter", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", 
      category: "ml",
      color: "#f37626"
    },
    
    // Databases
    { 
      name: "MySQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
      category: "database",
      color: "#4479a1"
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
      category: "database",
      color: "#47a248"
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills-header">
          <h2 className="tech-stack-title">TECH STACK</h2>
          <p className="tech-stack-subtitle">My Expertise</p>
        </div>
        
        <div className="tech-stack-single-page">
          {/* Programming Languages */}
          <div className="tech-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-row">
              {skills.filter(s => s.category === "language").map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-logo-container">
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <div className="skill-glow" style={{ backgroundColor: skill.color }}></div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div className="tech-category">
            <h3 className="category-title">Web Technologies</h3>
            <div className="skills-row">
              {skills.filter(s => s.category === "web").map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-logo-container">
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <div className="skill-glow" style={{ backgroundColor: skill.color }}></div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Science & ML */}
          <div className="tech-category">
            <h3 className="category-title">Data Science & ML</h3>
            <div className="skills-row">
              {skills.filter(s => s.category === "ml").map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-logo-container">
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <div className="skill-glow" style={{ backgroundColor: skill.color }}></div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="tech-category">
            <h3 className="category-title">Databases</h3>
            <div className="skills-row">
              {skills.filter(s => s.category === "database").map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-logo-container">
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <div className="skill-glow" style={{ backgroundColor: skill.color }}></div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;