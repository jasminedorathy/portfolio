import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Customer Segmentation Analysis",
      category: "machine-learning",
      description: "Developed a machine learning model to segment customers based on purchasing behavior using clustering algorithms.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "K-Means"],
      features: [
        "Data preprocessing and feature engineering",
        "K-Means clustering implementation",
        "Customer behavior analysis",
        "Interactive visualizations"
      ],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/jasminedorathy/customer_segmentation",
      demo: "https://customersegmentation-gbfuazmcdavukrub8qcchb.streamlit.app/",
      status: "Completed"
    },
    {
      id: 2,
      title: "Predictive Sales Forecasting",
      category: "data-science",
      description: "Built a time series forecasting model to predict sales trends and help businesses make data-driven decisions.",
      technologies: ["Python", "TensorFlow", "LSTM", "NumPy", "Plotly"],
      features: [
        "Time series data analysis",
        "LSTM neural network implementation",
        "Sales trend prediction",
        "Interactive dashboard"
      ],
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/jasminedorathy/sales-forecasting",
      demo: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "E-Commerce Website",
      category: "web-development",
      description: "Responsive e-commerce platform with modern UI/UX design and interactive features built during web development internship.",
      technologies: ["JavaScript", "React", "CSS3", "HTML5", "Node.js"],
      features: [
        "Responsive design",
        "Product catalog",
        "Shopping cart functionality",
        "User authentication"
      ],
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/jasminedorathy/ecommerce-website",
      demo: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "Sentiment Analysis Tool",
      category: "machine-learning",
      description: "Natural Language Processing tool to analyze sentiment in social media posts and customer reviews.",
      technologies: ["Python", "NLTK", "TextBlob", "Flask", "Bootstrap"],
      features: [
        "Text preprocessing",
        "Sentiment classification",
        "Real-time analysis",
        "Web interface"
      ],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/jasminedorathy/sentiment-analysis",
      demo: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "web-development",
      description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Vite"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Interactive components",
        "Modern UI/UX"
      ],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/jasminedorathy/portfolio",
      demo: "#",
      status: "Completed"
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      category: "data-science",
      description: "Interactive dashboard for visualizing complex datasets with multiple chart types and filtering options.",
      technologies: ["Python", "Dash", "Plotly", "Pandas", "CSS"],
      features: [
        "Interactive charts",
        "Real-time data updates",
        "Multiple visualization types",
        "Export functionality"
      ],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/jasminedorathy/data-dashboard",
      demo: "#",
      status: "In Progress"
    },
    {
      id: 7,
      title: "Movie Recommendation System",
      category: "machine-learning",
      description: "Collaborative filtering based recommendation system for movies using machine learning algorithms.",
      technologies: ["Python", "Pandas", "Scikit-learn", "NumPy", "Streamlit"],
      features: [
        "Collaborative filtering",
        "Content-based filtering",
        "Hybrid recommendation approach",
        "User-friendly interface"
      ],
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/jasminedorathy/movie-recommender",
      demo: "#",
      status: "Completed"
    },
    {
      id: 8,
      title: "Weather Prediction App",
      category: "data-science",
      description: "Machine learning model to predict weather patterns using historical data and real-time API integration.",
      technologies: ["Python", "TensorFlow", "API Integration", "Flask", "Chart.js"],
      features: [
        "Weather pattern analysis",
        "Real-time API integration",
        "Predictive modeling",
        "Interactive charts"
      ],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/jasminedorathy/weatherapp",
      demo: "https://jasminedorathy.github.io/weather-login-app/",
      status: "Completed"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'web-development', label: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Showcasing my journey through data science, machine learning, and web development
        </p>
        
        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="View GitHub" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.demo} className="project-link" aria-label="View Demo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;