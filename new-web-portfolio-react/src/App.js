import React from 'react';
import './App.css';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">Nikoloz Alimbarashvili</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <section id="home" className="header">
        <div className="header-content">
          <h1>Nikoloz Alimbarashvili</h1>
          <p>Full-stack Developer | CyberSecurity Student</p>
          <div className="header-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              Nikoloz Alimbarashvili — currently pursuing a degree in Cyber Security at {' '}
              <a href="https://cu.edu.ge/en" target="_blank" rel="noopener noreferrer">Caucasus University</a>. 
              With a background in computer science, I'm focused on developing the knowledge and 
              mindset needed to address modern security challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Library Management System</h3>
              <p>An application where you manage your books, mark them as you wish and sort them out - basically just organizing them.</p>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>A modern, responsive portfolio website built with React showcasing projects and professional information.</p>
            </div>
            <div className="project-card">
              <h3>Vulnerability Scanner</h3>
              <p>Built a professional vulnerability scanner that identifies security risks in network systems. The tool performs port scanning, service detection, and CVE vulnerability analysis, providing actionable security assessments with risk-prioritized results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-items">
                <span>Java</span>
                <span>Spring</span>
                <span>React</span>
                <span>SQL</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>Git</span>
                <span>Python</span>
                <span>C</span>
                <span>REST APIs</span>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact-content">
            <p>Interested in working together? Get in touch.</p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> alimbarashvilinikusha@gmail.com
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Tbilisi, Georgia
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/alimbaraa" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/nikoloz-alimbarashvili-26471b2b2/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://drive.google.com/file/d/1f9inBVa732rPAF4dUBWVmNjAnDIqiMn_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-link">Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;