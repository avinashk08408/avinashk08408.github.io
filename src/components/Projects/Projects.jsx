import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title:"AuthShield",
      description:
      "A modern role-based authentication system with secure login, user management and admin dashboard.",

      tech:["React","Flask","SQLite"],

      image:"https://placehold.co/700x420",

      github:"#",

      live:"#"
    },

    {
      title:"Web Vulnerability Scanner",

      description:
      "An intelligent scanner that detects common OWASP vulnerabilities and generates professional reports.",

      tech:["Python","Flask","Cyber Security"],

      image:"https://placehold.co/700x420",

      github:"#",

      live:"#"
    },

    {
      title:"Portfolio Website",

      description:
      "Premium Apple-inspired portfolio built using React with smooth animations and Graphite Core theme.",

      tech:["React","CSS","Framer Motion"],

      image:"https://placehold.co/700x420",

      github:"#",

      live:"#"
    }

  ];

  return (

    <section className="projects" id="projects">

      <div className="container">

        <div className="about-header">

          <span className="section-subtitle">

            FEATURED PROJECTS

          </span>

          <h2 className="section-title">

            Selected Work

          </h2>

          <p className="section-description">

            A collection of projects focused on web development,
            cybersecurity and modern user experiences.

          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project,index)=>(

            <div className="project-card glass" key={index}>

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>

                  {project.description}

                </p>

                <div className="project-tech">

                  {project.tech.map((item,i)=>(

                    <span key={i}>

                      {item}

                    </span>

                  ))}

                </div>

                <div className="project-buttons">

                  <a href={project.github}>

                    <FaGithub />

                    GitHub

                  </a>

                  <a href={project.live}>

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Projects;
