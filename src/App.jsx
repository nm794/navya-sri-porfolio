// App.jsx
import React from 'react';
import './App.css';

const Portfolio = () => {
 const projects = [
   {
     title: "Uni-sHub",
     description: "Food delivery price comparison platform",
     tech: ["React", "Node.js", "MongoDB"],
     image: "/public/images/sc2.png", 
     link: "https://uni-shub.in"
   },
   {
     title: "Travel Portal",
     description: "Interactive travel booking system",
     tech: ["React", "JavaScript", "CSS3"],
     image: "/public/images/sc1.png",
     link: "#"
   }
 ];

 const experience = [
   {
     role: "Frontend Developer",
     company: "Rebecca Everlene Trust Company",
     period: "Oct 2024 - Present",
     description: "Built browser applications using React and TypeScript, reduced memory footprint by 40%"
   },
   {
     role: "Founder & Technical Lead",
     company: "Uni-sHub", 
     period: "Jun 2024 - Present",
     description: "Built full-stack platform using React.js and Node.js, improved user engagement by 35%"
   },
   {
     role: "Business Analyst",
     company: "KNR Constructions",
     period: "Apr 2021 - May 2022", 
     description: "Created interactive dashboards and optimized web applications"
   }
 ];

 const skills = {
   frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
   backend: ["Node.js", "Java", "Python", "C"],
   data: ["Power BI", "SQL", "Data Analysis", "Excel"],
   tools: ["Git", "AWS", "Docker", "MongoDB"]
 };

 return (
   <div className="portfolio-container">
     <header className="header">
       <nav>
         <div className="logo">NM</div>
         <div className="nav-links">
           <a href="#projects">Work</a>
           <a href="#experience">Experience</a>
           <a href="#skills">Skills</a>
           <a href="#contact">Contact</a>
         </div>
       </nav>
     </header>

     <main>
       <section id="hero" className="hero-section">
         <div className="hero-content">
           <h1>Navya Sri Morthala</h1>
           <h2>Frontend Developer</h2>
           <div className="hero-cta">
             <a href="#projects" className="cta-button">View My Work</a>
           </div>
         </div>
       </section>

       <section id="projects" className="projects-section">
         <h2>Projects</h2>
         <div className="projects-grid">
           {projects.map(project => (
             <div className="project-card" key={project.title}>
               <img src={project.image} alt={project.title} />
               <div className="project-info">
                 <h3>{project.title}</h3>
                 <p>{project.description}</p>
                 <div className="tech-stack">
                   {project.tech.map(tech => (
                     <span key={tech}>{tech}</span>
                   ))}
                 </div>
                 <a href={project.link} className="view-project">View Project →</a>
               </div>
             </div>
           ))}
         </div>
       </section>

       <section id="experience" className="experience-section">
         <h2>Experience</h2>
         <div className="experience-grid">
           {experience.map((job, index) => (
             <div className="experience-card" key={index}>
               <div className="experience-header">
                 <h3>{job.role}</h3>
                 <span className="company">{job.company}</span>
                 <span className="period">{job.period}</span>
               </div>
               <p>{job.description}</p>
             </div>
           ))}
         </div>
       </section>

       <section id="skills" className="skills-section">
         <h2>Skills</h2>
         <div className="skills-grid">
           {Object.entries(skills).map(([category, items]) => (
             <div className="skill-group" key={category}>
               <h3>{category.toUpperCase()}</h3>
               <div className="skill-tags">
                 {items.map(skill => (
                   <span key={skill} className="skill-tag">{skill}</span>
                 ))}
               </div>
             </div>
           ))}
         </div>
       </section>

       <section id="contact" className="contact-section">
         <h2>Let's Connect</h2>
         <div className="contact-links">
           <a href="mailto:navajeevan3598@gmail.com" className="contact-button">Email</a>
           <a href="https://linkedin.com/in/navya-sri-morthala" className="contact-button">LinkedIn</a>
           <a href="https://github.com/nm794" className="contact-button">GitHub</a>
         </div>
       </section>
     </main>
   </div>
 );
};

export default Portfolio;