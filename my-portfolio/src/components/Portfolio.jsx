// src/components/Portfolio.jsx
import React from "react";
import "../styles/portfolio.css";


export default function Portfolio() {
  const name = "Jeevan S";
  const location = "Bangalore, India";
  const email = "jeevans100803@gmail.com";
  const phone = "9740001322";
  const github = "https://github.com/Jeev100803";
  const linkedin = "https://www.linkedin.com/in/jeevans100803/";
  const resumeLink = "/resume.pdf";
  const subtitle = "Software Developer | Frontend Developer | Backend Developer";

  const heroAbout = `Passionate about creating scalable and efficient web application, I speacialize in both front-end and back-end development, with expertise in mordern technologies, I build high performance, user friendly solutions that improve user experiences.`;

  const aboutSection = `I'm a versatile developer with hands-on experience in Java (11,17,21), Python, and modern web technologies. My strengths lie in front-end development, where I enjoy building clean, responsive interfaces using HTML, CSS, Tailwind CSS, JavaScript, and ReactJS. I also have solid foundational knowledge of backend development with Java, Servlets, Hibernate, and Spring Boot, along with experience creating REST APIs. I'm comfortable working with SQL databases and using tools like VS Code, Eclipse, Jupyter Notebook, and GitHub. Passionate about learning and problem-solving, I aim to build intuitive user experiences and continuously grow my development skill set`;

  const projects = [
    { id: 1, title: "E-commerce Shopping Website", link: "https://github.com/Jeev100803/Ecommerce-shopping-website.git" },
    { id: 2, title: "Event Management System", link: "https://github.com/Jeev100803/Event-Management-System.git" },
    { id: 3, title: "Brain Tumor Prediction (ML)", link: "https://github.com/Jeev100803" }
  ];

  const education = [
    { id: 1, title: "East West Institute of Technology", subtitle: "B.E — Artificial Intelligence & Data Science", period: "2021 - 2025" },
    { id: 2, title: "RNS PU College, Bangalore", subtitle: "PU (PCMC)", period: "2019 - 2021" }
  ];

  const skills = {
    programming: ["Java (11, 17, 21)", "Python"],
    webDevelopment: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Servlet"],
    frameworks: ["ReactJS", "Hibernate", "SpringBoot"],
    technologies: ["REST API"],
    databases: ["SQL"],
    tools: ["Visual Studio Code", "Jupyter Notebook", "Eclipse", "GitHub"]
  };

  const imgCandidates = ["/portfolio.jpg", "/profile.jpg", "/profile.png"];
  const handleImgError = (e) => {
    const img = e.currentTarget;
    const tried = img.getAttribute("data-tried") || "";
    const idx = imgCandidates.indexOf(tried);
    const nextIdx = idx + 1;
    if (nextIdx < imgCandidates.length) {
      img.setAttribute("data-tried", imgCandidates[nextIdx]);
      img.src = imgCandidates[nextIdx];
      return;
    }
    img.onerror = null;
  };

  return (
    <div className="portfolio-root">
      {/* STICKY NAV */}
      <nav className="top-nav">
        <ul className="nav-center">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>

        <div className="nav-right">
          <a className="nav-btn" href={`tel:${phone}`} title="Phone">📞</a>
          <a className="nav-btn" href={`mailto:${email}`} title="Gmail">📧</a>
          <a className="nav-btn" href={linkedin} target="_blank" rel="noreferrer" title="LinkedIn">💼</a>
          <a className="nav-btn" href={github} target="_blank" rel="noreferrer" title="GitHub">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a className="nav-btn" href={resumeLink} target="_blank" rel="noreferrer" title="Resume">📄</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-left">
            <div className="eyebrow">Hi there <span className="wave">👋</span></div>
            <h1 className="hero-title">I'm <span className="hero-name">{name}</span></h1>
            <p className="hero-subtitle">{subtitle}</p>
            <p className="hero-desc">{heroAbout}</p>

            <div className="hero-cta">
              <a className="cta-btn" href={`tel:${phone}`}>Phone</a>
              <a className="cta-btn" href={`mailto:${email}`}>Gmail</a>
              <a className="cta-btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="cta-btn" href={github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="cta-btn" href={resumeLink} target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-wrap">
              <img src={imgCandidates[0]} data-tried={imgCandidates[0]} alt="profile" className="profile-photo" onError={handleImgError} />
            </div>
          </div>
        </div>
      </header>

      {/* DOWN ARROW - Navigate to About */}
      <a href="#about" className="hero-band" title="Go to About" />

      {/* MAIN CONTENT */}
      <main className="page-body">
        <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <p className="about-text">{aboutSection}</p>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          {projects.map(p => (
            <div key={p.id} className="project-item">
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">{p.title}</a>
            </div>
          ))}
        </section>

        <section id="education" className="section">
          <h2 className="section-title">Education</h2>
          <div className="timeline-horizontal">
            {education.map((ed, i) => (
              <React.Fragment key={ed.id}>
                <div className="timeline-dot">
                  <div className="timeline-icon">🎓</div>
                  <div className="timeline-info">
                    <div className="timeline-title">{ed.title}</div>
                    <div className="timeline-sub">{ed.subtitle}</div>
                    <div className="timeline-period">{ed.period}</div>
                  </div>
                </div>
                {i !== education.length - 1 && <div className="timeline-connector" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skill-category">
            <h3 className="skill-category-title">Programming</h3>
            <div className="skills-box">
              {skills.programming.map((skill, idx) => (<span key={idx} className="skill-tag">{skill}</span>))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Web Development</h3>
            <div className="skills-box">
              {skills.webDevelopment.map((skill, idx) => (<span key={idx} className="skill-tag">{skill}</span>))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Libraries & Frameworks</h3>
            <div className="skills-box">
              {skills.frameworks.map((skill, idx) => (<span key={idx} className="skill-tag">{skill}</span>))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Technologies</h3>
            <div className="skills-box">
              {skills.technologies.map((skill, idx) => (<span key={idx} className="skill-tag">{skill}</span>))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Databases</h3>
            <div className="skills-box">
              {skills.databases.map((skill, idx) => (<span key={idx} className="skill-tag">{skill}</span>))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Tools</h3>
            <div className="skills-box">
              {skills.tools.map((skill, idx) => (<span key={idx} className="skill-tag">{skill}</span>))}
            </div>
          </div>
        </section>

        {/* UP ARROW - Back to Home */}
        <a href="#home" className="footer-arrow" title="Back to Top" />

        <footer className="footer">
          © {new Date().getFullYear()} {name} — {location}
        </footer>
      </main>
    </div>
  );
}
